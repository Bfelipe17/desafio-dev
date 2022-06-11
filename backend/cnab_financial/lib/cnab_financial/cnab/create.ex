defmodule CnabFinancial.CNAB.Create do
  @moduledoc """
    Module that receive a file with CNABs and insert into database
  """

  alias CnabFinancial.CNAB
  alias CnabFinancial.CNAB.Parser
  alias CnabFinancial.Repo

  def call(file, id) do
    Parser.parse(file)
    |> Enum.map(&apply_user(&1, id))
    |> Enum.map(&handle_insert(&1))
  end

  defp apply_user(params, id) do
    params
    |> Map.put("user_id", id)
    |> CNAB.changeset()
  end

  defp handle_insert(changeset), do: Repo.insert(changeset)
end
