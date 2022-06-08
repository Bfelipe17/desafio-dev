defmodule CnabFinancialWeb.UserView do
  use CnabFinancialWeb, :view

  alias CnabFinancial.User
  alias CnabFinancialWeb.UserView

  def render("create.json", %{token: token, user: %User{} = user}) do
    %{
      message: "User created",
      token: token,
      user: render_one(user, UserView, "user.json")
    }
  end

  def render("user.json", %{user: user}) do
    %{
      name: user.name,
      email: user.email
    }
  end
end
