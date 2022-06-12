defmodule CnabFinancialWeb.CnabController do
  use CnabFinancialWeb, :controller

  alias CnabFinancial.Auth.Guardian
  alias CnabFinancial.CNAB.{Create, Get}
  alias CnabFinancial.User
  alias CnabFinancialWeb.FallbackController

  action_fallback FallbackController

  def create(
        conn,
        %{
          "file" => %Plug.Upload{
            path: path
          }
        }
      ) do
    token = get_token(conn)

    with {:ok, {:ok, %User{id: id}}, _} <- Guardian.resource_from_token(token) do
      Create.call(path, id)

      conn
      |> put_status(201)
      |> text("")
    end
  end

  def get(conn, %{"store_name" => store_name}) do
    token = get_token(conn)

    with {:ok, {:ok, %User{id: id}}, _} <- Guardian.resource_from_token(token) do
      cnabs = Get.by_store_name(store_name, id)

      conn
      |> put_status(200)
      |> render("index.json", data: cnabs)
    end
  end

  defp get_token(conn) do
    get_req_header(conn, "authorization")
    |> Enum.at(0)
    |> String.split(" ")
    |> Enum.at(1)
  end
end
