defmodule CnabFinancialWeb.CnabView do
  use CnabFinancialWeb, :view

  alias CnabFinancialWeb.CnabView

  def render("index.json", %{data: data}) do
    %{data: render_many(data, CnabView, "cnab.json")}
  end

  def render("cnab.json", %{cnab: cnab}) do
    %{
      type: cnab.type,
      date: cnab.date,
      value: cnab.value,
      cpf: cnab.cpf,
      card: cnab.card,
      hour: cnab.hour,
      store_owner: cnab.store_owner,
      store_name: cnab.store_name
    }
  end
end
