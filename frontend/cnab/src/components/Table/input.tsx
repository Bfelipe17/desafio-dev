import "./style.css"

const fakeData = {
  "data": [
    {
      "card": "4753****3153",
      "cpf": "12312312300",
      "date": "2019-03-01",
      "hour": 153453,
      "store_name": "BAR DO JOÃO",
      "store_owner": "JOÃO MACEDO",
      "type": 3,
      "value": 142.0
    },
    {
      "card": "8473****1231",
      "cpf": "12312312300",
      "date": "2019-03-01",
      "hour": 231233,
      "store_name": "MERCEARIA 3 IRMÃO",
      "store_owner": "JOSÉ COSTA",
      "type": 2,
      "value": 102.0
    },
    {
      "card": "6777****1313",
      "cpf": "12312312300",
      "date": "2019-03-01",
      "hour": 172712,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 3,
      "value": 192.0
    },
    {
      "card": "3123****7687",
      "cpf": "12312312300",
      "date": "2019-03-01",
      "hour": 145607,
      "store_name": "LOJA DO Ó - MATRIZ",
      "store_owner": "MARIA JOSEFINA",
      "type": 5,
      "value": 132.0
    },
  ]
}

type CnabData = {
  type: number;
  date: Date;
  value: number;
  cpf: string;
  card: string;
  hour: string;
  storeOwner: string;
  storeName: string;
}

export function Table() {

  const isOutflow = (number: number) => {
    return number === 2 || number === 3 || number === 9;
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
        {fakeData.data.map((cnab: any) => {
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