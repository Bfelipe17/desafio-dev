defmodule CnabFinancial.CNAB.Create do
  @moduledoc """
    Module that receive a file with CNABs and insert into database
  """

  alias CnabFinancial.CNAB.Parser
  alias CnabFinancial.Repo

  def call(file) do
    Parser.parse(file)
    |> Enum.map(&Repo.insert(&1))
  end
end
