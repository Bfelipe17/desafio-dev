defmodule CnabFinancial.Repo.Migrations.CreateCnabs do
  use Ecto.Migration

  def change do
    create table(:cnabs, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :type, :integer
      add :date, :date
      add :value, :float
      add :cpf, :string
      add :card, :string
      add :hour, :integer
      add :store_owner, :string
      add :store_name, :string

      timestamps()
    end
  end
end
