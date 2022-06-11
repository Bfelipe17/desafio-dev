defmodule CnabFinancial.CNAB.CreateTest do
  use CnabFinancial.DataCase, async: true

  import CnabFinancial.Factory

  alias CnabFinancial.CNAB
  alias CnabFinancial.CNAB.Create
  alias CnabFinancial.User

  describe "call/1" do
    test "when the file is valid, create the CNABs" do
      %User{id: id} = insert(:user_changeset)
      response = Create.call("CNAB.txt", id)

      assert {:ok, %CNAB{}} = response |> Enum.at(0)
    end
  end
end
