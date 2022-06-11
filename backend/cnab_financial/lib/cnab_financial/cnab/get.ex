defmodule CnabFinancial.CNAB.Get do
  @moduledoc """
    Module that get CNAB from database
  """

  import Ecto.Query

  alias CnabFinancial.{CNAB, Repo}

  def by_store_name("ALL", user_id) do
    query =
      from c in CNAB,
        where: c.user_id == ^user_id

    Repo.all(query)
  end

  def by_store_name(store_name, user_id) do
    query =
      from c in CNAB,
        where: c.store_name == ^store_name and c.user_id == ^user_id

    Repo.all(query)
  end
end
