defmodule CnabFinancial.CNAB.Get do
  @moduledoc """
    Module that get CNAB from database
  """

  import Ecto.Query

  alias CnabFinancial.{CNAB, Repo}

  def all() do
    Repo.all(CNAB)
  end

  def by_store_name("ALL") do
    all()
  end

  def by_store_name(store_name) do
    query =
      from c in CNAB,
        where: c.store_name == ^store_name

    Repo.all(query)
  end
end
