defmodule CnabFinancialWeb.CnabControllerTest do
  use CnabFinancialWeb.ConnCase, async: true

  import CnabFinancial.Factory

  alias CnabFinancial.Auth.Guardian
  alias CnabFinancial.User

  describe "get/2" do
    test "when the store name exists, return all entries", %{conn: conn} do
      user = insert(:user_changeset)
      %User{id: id} = user

      insert(:cnab_changeset, %{user_id: id})

      {:ok, token, _claims} = Guardian.encode_and_sign(user)

      conn = put_req_header(conn, "authorization", "Bearer #{token}")

      response =
        conn
        |> get(Routes.cnab_path(conn, :get, %{"store_name" => "MERCADO DA AVENIDA"}))
        |> json_response(:ok)

      assert %{
               "data" => [
                 %{
                   "id" => id,
                   "store_name" => "MERCADO DA AVENIDA"
                 }
               ]
             } = response
    end
  end
end
