defmodule CnabFinancial.CNAB.Get do
  @moduledoc """
    Module that get CNAB from database
  """

  alias CnabFinancial.{CNAB, Repo}

  def all() do
    Repo.all(CNAB)
  end
end
