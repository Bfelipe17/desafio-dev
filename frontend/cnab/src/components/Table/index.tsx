import "./style.css"

interface TableProps {
  cnabs: CnabProps[]
}

interface CnabProps {
  id: string;
  card: string;
  cpf: string;
  date: string;
  hour: number;
  store_name: string;
  store_owner: string;
  type: number;
  value: number;
  kind: string;
}

export function Table({ cnabs }: TableProps) {

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
          return (
            <tr className={cnab.value < 0 ? 'tr_red' : 'tr_green'} id={cnab.id}>
              <th>{cnab.type}</th>
              <th>{cnab.date}</th>
              <th>{cnab.value}</th>
              <th>{cnab.cpf}</th>
              <th>{cnab.card}</th>
              <th>{cnab.hour}</th>
              <th>{cnab.store_owner}</th>
              <th>{cnab.store_name}</th>
              <th>{cnab.kind}</th>
            </tr>
          )
        })}

      </tbody>
    </table>
  )
}