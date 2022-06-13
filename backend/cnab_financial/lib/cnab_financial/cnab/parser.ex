defmodule CnabFinancial.CNAB.Parser do
  @moduledoc """
    Module that reads an file with CNABs and converts all fields
  """
  alias Decimal, as: D

  @regex ~r/([\d]{1})([\d]{8})([\d]{10})([\d]{11})([\S]{12})([\d]{6})([\S\s]{14})([\S\s]{19})/
  @date_regex ~r/([\d]{4})([\d]{2})([\d]{2})/
  @hour_regex ~r/([\d]{2})([\d]{2})([\d]{2})/

  def parse(file) do
    file
    |> File.stream!()
    |> Stream.map(&parse_line(&1))
  end

  defp parse_line(line) do
    Regex.run(@regex, line)
    |> generate_params()
  end

  defp generate_params([_, type, date, value, cpf, card, hour, store_owner, store_name]) do
    %{
      "type" => type,
      "date" => generate_date(date),
      "value" => format_value(type, value),
      "cpf" => cpf,
      "card" => card,
      "hour" => generate_hour(hour),
      "store_owner" => String.trim(store_owner),
      "store_name" => String.trim(store_name),
      "kind" => kind(type)
    }
  end

  defp generate_date(date) do
    [_, year, month, day] = Regex.run(@date_regex, date)
    Date.from_iso8601!("#{year}-#{month}-#{day}")
  end

  defp generate_hour(hour) do
    [_, hour, minute, second] = Regex.run(@hour_regex, hour)
    "#{hour}:#{minute}:#{second}"
  end

  defp format_value(type, value) do
    case type do
      "2" -> outflow(value)
      "3" -> outflow(value)
      "9" -> outflow(value)
      _ -> inflow(value)
    end
  end

  defp outflow(value) do
    D.div(D.new("-#{value}"), 100)
  end

  defp inflow(value) do
    D.div(D.new(value), 100)
  end

  defp kind("1"), do: "Débito"
  defp kind("2"), do: "Boleto"
  defp kind("3"), do: "Financiamento"
  defp kind("4"), do: "Crédito"
  defp kind("5"), do: "Recebimento Empréstimo"
  defp kind("6"), do: "Vendas"
  defp kind("7"), do: "Recebimento TED"
  defp kind("8"), do: "Recebimento DOC"
  defp kind("9"), do: "Aluguel"
end
