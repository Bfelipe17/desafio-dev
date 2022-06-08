defmodule CnabFinancial.CNAB.ParserTest do
  use CnabFinancial.DataCase, async: true

  alias CnabFinancial.CNAB.Parser

  describe "parse_file/1" do
    test "parses the file" do
      file = "CNAB.txt"

      response =
        file
        |> Parser.parse()
        |> Enum.count()

      assert response == 21
    end
  end
end
