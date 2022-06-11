defmodule CnabFinancialWeb.CnabController do
  use CnabFinancialWeb, :controller

  alias CnabFinancial.Auth.Guardian
  alias CnabFinancial.CNAB.{Create, Get}
  alias CnabFinancial.User
  alias CnabFinancialWeb.FallbackController

  action_fallback FallbackController

  def index(conn, _params) do
    cnabs = Get.all()

    conn
    |> put_status(:ok)
    |> render("index.json", data: cnabs)
  end

  def create(
        conn,
        %{
          "file" => %Plug.Upload{
            path: path
          }
        } = params
      ) do
    [_, token] =
      get_req_header(conn, "authorization")
      |> Enum.at(0)
      |> String.split(" ")

    with {:ok, {:ok, %User{id: id}}, _} <- Guardian.resource_from_token(token) do
      IO.inspect(params)

      Create.call(path, id)

      conn
      |> put_status(201)
      |> text("")
    end
  end

  def get(conn, %{"store_name" => store_name}) do
    cnabs = Get.by_store_name(store_name)

    conn
    |> put_status(200)
    |> render("index.json", data: cnabs)
  end
end
