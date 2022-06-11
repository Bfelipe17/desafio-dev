defmodule CnabFinancial.Repo.Migrations.ChangeValueToDecimal do
  use Ecto.Migration

  def change do
    alter table(:cnabs) do
      modify :value, :decimal
      modify :hour, :string
      add :kind, :string
    end
  end
end
