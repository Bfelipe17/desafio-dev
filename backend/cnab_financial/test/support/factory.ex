defmodule CnabFinancial.Factory do
  @moduledoc """
    Module that help us creating test data
  """

  use ExMachina.Ecto, repo: CnabFinancial.Repo

  alias CnabFinancial.{CNAB, User}

  def cnab_params_factory do
    %{
      "card" => "6777****1313",
      "cpf" => "84515254073",
      "date" => ~D[2019-03-01],
      "hour" => "172712",
      "store_name" => "MERCADO DA AVENIDA",
      "store_owner" => "MARCOS PEREIRA",
      "type" => "3",
      "value" => "0000019200",
      "kind" => "Financiamento",
      "user_id" => "123"
    }
  end

  def cnab_changeset_factory do
    %CNAB{
      card: "1234****2231",
      cpf: "84515254073",
      date: ~D[2019-06-01],
      hour: "10:00:00",
      store_name: "MERCADO DA AVENIDA",
      store_owner: "MARCOS PEREIRA",
      type: 4,
      value: 506.17,
      kind: "Crédito"
    }
  end

  def user_params_factory do
    %{
      "name" => "Bruno Felipe",
      "email" => "teste@teste.com",
      "password" => "testing"
    }
  end

  def user_changeset_factory do
    %User{
      name: "Bruno Felipe",
      email: "teste@teste.com",
      password: "testing",
      id: "f0834884-3158-41c8-9006-d5a137037d44"
    }
  end
end
