defmodule CnabFinancialWeb.CnabController do
  use CnabFinancialWeb, :controller

  alias CnabFinancial.CNAB.Create

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
