import "./style.css"

interface TableProps {
  cnabs: CnabProps[]
}

interface CnabProps {
  card: string;
  cpf: string;
  date: string;
  hour: number;
  store_name: string;
  store_owner: string;
  type: number;
  value: number;
}

export function Table({ cnabs }: TableProps) {

  const isOutflow = (type: number) => {
    return type === 2 || type === 3 || type === 9;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Date</th>
          <th>Value</th>
          <th>CPF</th>
          <th>Card</th>
          <th>Hour</th>
          <th>Store owner</th>
          <th>Store name</th>
          <th>Kind</th>
        </tr>
      </thead>
      <tbody>
        {cnabs.map((cnab: any) => {
          const kind = isOutflow(cnab.type)
          return (
            <tr className={kind ? 'tr_red' : 'tr_green'}>
              <th>{cnab.type}</th>
              <th>{cnab.date}</th>
              <th>{cnab.value}</th>
              <th>{cnab.cpf}</th>
              <th>{cnab.card}</th>
              <th>{cnab.hour}</th>
              <th>{cnab.store_owner}</th>
              <th>{cnab.store_name}</th>
              <th>{kind ? "Outflow" : "Inflow"}</th>
            </tr>
          )
        })}

      </tbody>
    </table>
  )
}