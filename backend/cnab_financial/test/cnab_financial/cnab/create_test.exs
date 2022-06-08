defmodule CnabFinancial.CNAB.CreateTest do
  use CnabFinancial.DataCase, async: true

  alias CnabFinancial.CNAB
  alias CnabFinancial.CNAB.Create

  describe "call/1" do
    test "when the file is valid, create the CNABs" do
      response = Create.call("CNAB.txt")

      assert {:ok, %CNAB{}} = response |> Enum.at(0)
    end
  end
end
