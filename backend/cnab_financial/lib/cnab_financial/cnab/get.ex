defmodule CnabFinancial.CNAB.Get do
  alias CnabFinancial.{CNAB, Repo}

  def all() do
    Repo.all(CNAB)
  end
end
