defmodule CnabFinancialWeb.Middleware.ValidUser do
  import Plug.Conn

  alias CnabFinancial.Auth.Guardian

  def init(options), do: options

  def call(conn, _opts) do
    token =
      get_req_header(conn, "authorization")
      |> Enum.at(0)
      |> String.split(" ")
      |> Enum.at(1)

    case Guardian.resource_from_token(token) do
      {:ok, {:error, _}, _} -> render_error(conn)
      {:ok, {:ok, _}, _} -> conn
    end
  end

  defp render_error(conn) do
    body = Jason.encode!(%{message: "User not found"})

    conn
    |> put_resp_content_type("application/json")
    |> send_resp(:bad_request, body)
    |> halt()
  end
end
