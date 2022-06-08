defmodule CnabFinancial.Auth.Pipeline do
  @moduledoc false
  use Guardian.Plug.Pipeline, otp_app: :cnab_financial

  plug Guardian.Plug.VerifyHeader
  plug Guardian.Plug.EnsureAuthenticated
  plug Guardian.Plug.LoadResource
end
