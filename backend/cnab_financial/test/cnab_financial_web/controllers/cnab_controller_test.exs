defmodule CnabFinancialWeb.CnabControllerTest do
  use CnabFinancialWeb.ConnCase, async: true

  import CnabFinancial.Factory

  alias CnabFinancial.Auth.Guardian
  alias CnabFinancial.{User, User.Create}

  describe "index/2" do
    test "when all params are valid, creates the user", %{conn: conn} do
      params = build(:user_params)

      response =
        conn
        |> post(Routes.user_path(conn, :create, params))
        |> json_response(:created)

      assert %{
               "message" => "User created",
               "user" => %{
                 "email" => "teste@teste.com",
                 "name" => "Bruno Felipe"
               },
               "token" => _token
             } = response
    end

    test "when there are invalid params, returns an error", %{conn: conn} do
      params = build(:user_params, %{"password" => "123", "email" => "email"})

      response =
        conn
        |> post(Routes.user_path(conn, :create, params))
        |> json_response(:bad_request)

      assert %{
               "message" => %{
                 "email" => ["has invalid format"],
                 "password" => ["should be at least 6 character(s)"]
               }
             } = response
    end
  end

  describe "session/2" do
    test "when the user exists, return the token", %{conn: conn} do
      params = build(:user_params)
      {:ok, %User{email: email, password: password}} = Create.call(params)

      response =
        conn
        |> post(Routes.user_path(conn, :session, %{"email" => email, "password" => password}))
        |> json_response(:created)

      assert %{
               "token" => _token
             } = response
    end

    test "when the user does not exists, return the token", %{conn: conn} do
      response =
        conn
        |> post(
          Routes.user_path(conn, :session, %{"email" => "ab@cd.com", "password" => "123456"})
        )
        |> json_response(:not_found)

      assert %{"message" => "User not found"} = response
    end
  end

  describe "me/2" do
    test "when the token is valid, return the user", %{conn: conn} do
      params = build(:user_params)
      {:ok, %User{email: email, password: password}} = Create.call(params)
      {:ok, token} = Guardian.authenticate(%{"email" => email, "password" => password})

      conn = put_req_header(conn, "authorization", "Bearer #{token}")

      response =
        conn
        |> get(Routes.user_path(conn, :me, %{"token" => token}))
        |> json_response(:ok)

      assert %{"email" => "teste@teste.com", "name" => "Bruno Felipe"} = response
    end

    test "when the token is invalid, returns an error", %{conn: conn} do
      token = "abc"

      conn = put_req_header(conn, "authorization", "Bearer #{token}")

      response =
        conn
        |> put_resp_content_type("application/json")
        |> get(Routes.user_path(conn, :me, %{"token" => token}))
        |> json_response(:unauthorized)

      assert %{"message" => "invalid_token"} = response
    end
  end
end
