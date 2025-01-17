defmodule CnabFinancial.Repo.Migrations.AddCnabsToUser do
  use Ecto.Migration

  def change do
    alter table(:cnabs) do
      add :user_id, references(:users, type: :binary_id)
    end
  end
end
