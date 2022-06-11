import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

export function Select() {
  const { setStoreName } = useContext(StoreContext);

  return (
    <select name="store" onChange={e => setStoreName(e.currentTarget.value)}>
      <option value="ALL" selected={true}>ALL</option>
      <option value="BAR DO JOÃO">BAR DO JOÃO</option>
      <option value="MERCEARIA 3 IRMÃO">MERCEARIA 3 IRMÃO</option>
      <option value="MERCADO DA AVENIDA">MERCADO DA AVENIDA</option>
      <option value="LOJA DO Ó - MATRIZ">LOJA DO Ó - MATRIZ</option>
      <option value="LOJA DO Ó - FILIAL">LOJA DO Ó - FILIAL</option>
    </select>)
}