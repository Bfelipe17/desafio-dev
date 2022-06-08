defmodule CnabFinancial.CNAB do
  use Ecto.Schema
  import Ecto.Changeset

  @required_fields [:type, :date, :value, :cpf, :card, :hour, :store_owner, :store_name]

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "cnabs" do
    field :card, :string
    field :cpf, :string
    field :date, :date
    field :hour, :integer
    field :store_name, :string
    field :store_owner, :string
    field :type, :integer
    field :value, :float

    timestamps()
  end

  @doc false
  def changeset(cnab, attrs) do
    cnab
    |> cast(attrs, @required_fields)
    |> validate_required(@required_fields)
  end
end
