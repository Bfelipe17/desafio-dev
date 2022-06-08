defmodule CnabFinancial.Repo do
  use Ecto.Repo,
    otp_app: :cnab_financial,
    adapter: Ecto.Adapters.Postgres
end
