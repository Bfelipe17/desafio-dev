defmodule CnabFinancial.Error do
  @moduledoc """
    Module that creates an error
  """
  @keys [:status, :result]

  @enforce_keys @keys

  defstruct @keys

  def build(status, result) do
    %__MODULE__{
      status: status,
      result: result
    }
  end

  def build_user_not_found_error, do: build(:not_found, "User not found")
end
