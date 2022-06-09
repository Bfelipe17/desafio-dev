defmodule CnabFinancial.Auth.GuardianTest do
  use CnabFinancial.DataCase, async: true

  alias CnabFinancial.Auth.Guardian
  alias CnabFinancial.{Error, User, User.Create}

  describe "authenticate/1" do
    test "when the user exists, returns a valid token" do
      {:ok, %User{email: email, password: password}} =
        Create.call(%{
          "name" => "Bruno Felipe",
          "email" => "teste@teste.com",
          "password" => "testing"
        })

      response = Guardian.authenticate(%{"email" => email, "password" => password})

      assert {:ok, _token} = response
    end

    test "when the user email is incorrect" do
      {:ok, %User{password: password}} =
        Create.call(%{
          "name" => "Bruno Felipe",
          "email" => "teste@teste.com",
          "password" => "testing"
        })

      response = Guardian.authenticate(%{"email" => "testing@testin.com", "password" => password})

      assert {:error, %Error{result: "User not found"}} = response
    end

    test "when the user password is incorrect" do
      {:ok, %User{email: email}} =
        Create.call(%{
          "name" => "Bruno Felipe",
          "email" => "teste@teste.com",
          "password" => "testing"
        })

      response = Guardian.authenticate(%{"email" => email, "password" => "123456"})

      assert {:error, %Error{result: "Please verify your credentials"}} = response
    end

    test "when the params is invalid" do
      response = Guardian.authenticate(%{"password" => "123456"})

      assert {:error, %Error{result: "Invalid or missing params"}} = response
    end
  end
end
