defmodule CnabFinancialWeb.FallbackController do
  use CnabFinancialWeb, :controller

  alias CnabFinancial.Error
  alias CnabFinancialWeb.ErrorView

  def call(conn, {:error, %Error{status: status, result: result}}) do
    conn
    |> put_status(status)
    |> put_view(ErrorView)
    |> render("error.json", result: result)
  end
end
