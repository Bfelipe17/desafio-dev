defmodule CnabFinancial.CNAB.Parser do
  @moduledoc """
    Module that reads an file with CNABs and converts all to a valid CNAB Changeset
  """

  alias CnabFinancial.CNAB

  @regex ~r/([\d]{1})([\d]{8})([\d]{10})([\d]{11})([\S]{12})([\d]{6})([\S\s]{14})([\S\s]{19})/
  @date_regex ~r/([\d]{4})([\d]{2})([\d]{2})/

  def parse(file) do
    file
    |> File.stream!()
    |> Stream.map(&parse_line(&1))
  end

  defp parse_line(line) do
    Regex.run(@regex, line)
    |> format_fields()
  end

  defp format_fields([_, type, date, value, cpf, card, hour, store_owner, store_name]) do
    [_, year, month, day] = Regex.run(@date_regex, date)

    params = %{
      "type" => type,
      "date" => Date.from_iso8601!("#{year}-#{month}-#{day}"),
      "value" => String.to_integer(value) / 100.0,
      "cpf" => cpf,
      "card" => card,
      "hour" => hour,
      "store_owner" => String.trim(store_owner),
      "store_name" => String.trim(store_name)
    }

    CNAB.changeset(params)
  end
end
