defmodule CnabFinancial.CNAB.GetTest do
  use CnabFinancial.DataCase, async: true

  import CnabFinancial.Factory

  alias CnabFinancial.CNAB
  alias CnabFinancial.CNAB.Get

  describe "all/0" do
    test "should return all registries on database" do
      insert(:cnab_changeset)

      response = Get.all() |> Enum.at(0)

      assert %CNAB{
               store_name: "MERCADO DA AVENIDA",
               store_owner: "MARCOS PEREIRA"
             } = response
    end
  end
end
