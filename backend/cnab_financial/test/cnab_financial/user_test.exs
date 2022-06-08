defmodule CnabFinancial.UserTest do
  use CnabFinancial.DataCase, async: true

  import CnabFinancial.Factory

  alias CnabFinancial.User
  alias Ecto.Changeset

  describe "changeset/1" do
    test "when all params are valid, returns a valid changeset" do
      params = build(:user_params)

      response = User.changeset(params)

      assert %Changeset{valid?: true} = response
    end
  end

  test "when there is an invalid or missing field, returns an error" do
    params = build(:user_params, %{"password" => "123"})

    response = User.changeset(params)

    assert %Changeset{valid?: false} = response
  end
end
