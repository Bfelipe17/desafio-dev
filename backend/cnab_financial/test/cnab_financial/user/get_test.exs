defmodule CnabFinancial.User.GetTest do
  use CnabFinancial.DataCase, async: true

  import CnabFinancial.Factory

  alias CnabFinancial.{User, User.Get}

  describe "by_id/1" do
    test "should return the corresponding user by id" do
      %User{id: id} = insert(:user_changeset)

      user = Get.by_id(id)

      assert {:ok, %User{name: "Bruno Felipe"}} = user
    end
  end

  describe "by_email/1" do
    test "should return the corresponding user by email" do
      %User{email: email} = insert(:user_changeset)

      user = Get.by_email(email)

      assert {:ok, %User{name: "Bruno Felipe"}} = user
    end
  end
end
