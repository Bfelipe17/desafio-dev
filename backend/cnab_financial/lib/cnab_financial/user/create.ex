defmodule CnabFinancial.User.Create do
  @moduledoc """
    Module that User params and insert into database
  """

  alias CnabFinancial.{Error, Repo, User}

  def call(params) do
    params
    |> User.changeset()
    |> Repo.insert()
    |> handle_insert()
  end

  defp handle_insert({:ok, %User{}} = result), do: result

  defp handle_insert({:error, result}), do: {:error, Error.build(:bad_request, result)}
end
