defmodule CnabFinancialWeb.UserController do
  use CnabFinancialWeb, :controller

  alias CnabFinancial.{Auth.Guardian, User, User.Create}

  def new(conn, params) do
    with {:ok, %User{} = user} <- Create.call(params),
         {:ok, token, _claims} <- Guardian.encode_and_sign(user) do
      conn
      |> put_status(:created)
      |> render("create.json", token: token, user: user)
    end
  end

  def session(conn, params) do
    with {:ok, token} <- Guardian.authenticate(params) do
      conn
      |> put_status(:created)
      |> render("token.json", token: token)
    end
  end

  def me(conn, _params) do
    [_, token] =
      get_req_header(conn, "authorization")
      |> Enum.at(0)
      |> String.split(" ")

    with {:ok, {:ok, user}, _} <- Guardian.resource_from_token(token) do
      conn
      |> put_status(:ok)
      |> render("user.json", user: user)
    end
  end
end
