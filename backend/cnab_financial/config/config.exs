# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :cnab_financial,
  ecto_repos: [CnabFinancial.Repo]

config :cnab_financial, CnabFinancial.Auth.Guardian,
  issuer: "cnab_financial",
  secret_key: "35QpjlRfBxEkN0Skr8f2I83FfnZLLlut4ehAkS8Mjng8N+gxXrEdfEVtWqIwlPcD"

config :cnab_financial, CnabFinancial.Auth.Pipeline,
  module: CnabFinancial.Auth.Guardian,
  error_handler: CnabFinancial.Auth.ErrorHandler

# Configures the endpoint
config :cnab_financial, CnabFinancialWeb.Endpoint,
  url: [ip: {0, 0, 0, 0}, port: 4000],
  render_errors: [view: CnabFinancialWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: CnabFinancial.PubSub,
  live_view: [signing_salt: "EQi2QUzv"]

# Configures the mailer
#
# By default it uses the "Local" adapter which stores the emails
# locally. You can see the emails in your browser, at "/dev/mailbox".
#
# For production it's recommended to configure a different adapter
# at the `config/runtime.exs`.
config :cnab_financial, CnabFinancial.Mailer, adapter: Swoosh.Adapters.Local

# Swoosh API client is needed for adapters other than SMTP.
config :swoosh, :api_client, false

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
