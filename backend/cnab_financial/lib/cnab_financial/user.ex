defmodule CnabFinancial.User do
  @moduledoc false
  use Ecto.Schema
  import Ecto.Changeset
  alias Ecto.Changeset
  alias CnabFinancial.CNAB

  @required_fields [:name, :email, :password]

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "users" do
    field :email, :string
    field :name, :string
    field :password_hash, :string
    field :password, :string, virtual: true

    has_many :cnabs, CNAB

    timestamps()
  end

  @doc false
  def changeset(attrs) do
    %__MODULE__{}
    |> cast(attrs, @required_fields)
    |> validate_required(@required_fields)
    |> validate_length(:password, min: 6)
    |> validate_format(:email, ~r/\w+@\w+.\w+/)
    |> unique_constraint(:email)
    |> put_password_hash()
  end

  defp put_password_hash(%Changeset{valid?: true, changes: %{password: password}} = changeset) do
    change(changeset, Pbkdf2.add_hash(password))
  end

  defp put_password_hash(changeset), do: changeset
end
