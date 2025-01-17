defmodule CnabFinancial.Auth.Guardian do
  @moduledoc """
    Module that creates a token to an existing user
  """
  use Guardian, otp_app: :cnab_financial

  alias CnabFinancial.{Error, User}
  alias CnabFinancial.User.Get, as: UserGet

  def subject_for_token(%User{id: id}, _claims), do: {:ok, id}

  def resource_from_claims(%{"sub" => id}) do
    resource = UserGet.by_id(id)
    {:ok, resource}
  end

  def authenticate(%{"email" => email, "password" => password}) do
    with {:ok, %User{password_hash: hash} = user} <- UserGet.by_email(email),
         true <- Pbkdf2.verify_pass(password, hash),
         {:ok, token, _claims} <- encode_and_sign(user) do
      {:ok, token}
    else
      false -> {:error, Error.build(:unauthorized, "Please verify your credentials")}
      error -> error
    end
  end

  def authenticate(_), do: {:error, Error.build(:bad_request, "Invalid or missing params")}
end
