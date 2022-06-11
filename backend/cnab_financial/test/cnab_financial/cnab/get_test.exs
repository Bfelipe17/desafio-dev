defmodule CnabFinancial.CNAB.GetTest do
  use CnabFinancial.DataCase, async: true

  import CnabFinancial.Factory

  alias CnabFinancial.CNAB
  alias CnabFinancial.CNAB.Get
  alias CnabFinancial.User

  describe "by_store_name/2" do
    test "should return all registries for the corresponding store name on database" do
      %User{id: id} = insert(:user_changeset)
      insert(:cnab_changeset, %{user_id: id})

      response = Get.by_store_name("MERCADO DA AVENIDA", id) |> Enum.at(0)

      assert %CNAB{
               store_name: "MERCADO DA AVENIDA",
               store_owner: "MARCOS PEREIRA"
             } = response
    end
  end
end
