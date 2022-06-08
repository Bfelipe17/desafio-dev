defmodule CnabFinancial.Auth.Pipeline do
  use Guardian.Plug.Pipeline, otp_app: :cnab_financial

  plug Guardian.Plug.VerifyHeader
  plug Guardian.Plug.EnsureAuthenticated
  plug Guardian.Plug.LoadResource
end
