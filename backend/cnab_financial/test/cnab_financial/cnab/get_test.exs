defmodule CnabFinancial.CNAB.GetTest do
  use CnabFinancial.DataCase, async: true

  alias CnabFinancial.{CNAB, Repo}
  alias CnabFinancial.CNAB.Get

  describe "all/0" do
    test "should return all registries on database" do
      %CNAB{
        card: "1234****2231",
        cpf: "84515254073",
        date: ~D[2019-06-01],
        hour: 100_000,
        store_name: "MERCADO DA AVENIDA",
        store_owner: "MARCOS PEREIRA",
        type: 4,
        value: 506.17
      }
      |> Repo.insert()

      response = Get.all() |> Enum.at(0)

      assert %CNAB{
               store_name: "MERCADO DA AVENIDA",
               store_owner: "MARCOS PEREIRA"
             } = response
    end
  end
end
