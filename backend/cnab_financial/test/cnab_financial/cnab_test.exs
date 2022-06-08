defmodule CnabFinancial.CNABTest do
  use CnabFinancial.DataCase, async: true

  import CnabFinancial.Factory

  alias CnabFinancial.CNAB
  alias Ecto.Changeset

  describe "changeset/2" do
    test "when all params are valid, returns a valid changeset" do
      params = build(:cnab_params)

      response = CNAB.changeset(params)

      assert %Changeset{valid?: true} = response
    end

    test "when there is an invalid or missing field, returns an error" do
      params = %{
        "card" => "6777****1313",
        "cpf" => "84515254073",
        "date" => ~D[2019-03-01]
      }

      response = CNAB.changeset(params)

      assert %Changeset{valid?: false} = response
    end
  end
end
