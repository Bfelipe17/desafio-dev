defmodule CnabFinancial.CNAB.Create do
  alias CnabFinancial.CNAB.Parser
  alias CnabFinancial.Repo

  def call(file) do
    Parser.parse(file)
    |> Enum.map(&Repo.insert(&1))
  end
end
