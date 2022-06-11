import { formatValue } from "../../utils/format";

import "./style.css"

interface TotalProp {
  value: number;
}

export function Total({ value }: TotalProp) {
  return (
    <p className="total_text">Total: <span className={value > 0 ? "positive" : "negative"}>{formatValue(value.toString())}</span></p>
  )
}