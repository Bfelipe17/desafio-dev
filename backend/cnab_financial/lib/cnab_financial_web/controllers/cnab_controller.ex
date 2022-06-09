defmodule CnabFinancialWeb.CnabController do
  use CnabFinancialWeb, :controller

  alias CnabFinancial.CNAB.{Create, Get}
  alias CnabFinancialWeb.FallbackController

  action_fallback FallbackController

  def index(conn, _params) do
    cnabs = Get.all()

    conn
    |> put_status(:ok)
    |> render("index.json", data: cnabs)
  end

  def create(conn, %{
        "file" => %Plug.Upload{
          path: path
        }
      }) do
    Create.call(path)

    conn
    |> put_status(201)
    |> text("")
  end
end
