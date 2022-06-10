import { Table } from "../../components/Table";

const fakeData = {
  "data": [
    {
      "card": "4753****3153",
      "cpf": "09620676017",
      "date": "2019-03-01",
      "hour": 153453,
      "store_name": "BAR DO JOÃO",
      "store_owner": "JOÃO MACEDO",
      "type": 3,
      "value": 142.0
    },
    {
      "card": "8473****1231",
      "cpf": "23270298056",
      "date": "2019-03-01",
      "hour": 231233,
      "store_name": "MERCEARIA 3 IRMÃO",
      "store_owner": "JOSÉ COSTA",
      "type": 2,
      "value": 102.0
    },
    {
      "card": "6777****1313",
      "cpf": "84515254073",
      "date": "2019-03-01",
      "hour": 172712,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 3,
      "value": 192.0
    },
    {
      "card": "3123****7687",
      "cpf": "55641815063",
      "date": "2019-03-01",
      "hour": 145607,
      "store_name": "LOJA DO Ó - MATRIZ",
      "store_owner": "MARIA JOSEFINA",
      "type": 5,
      "value": 132.0
    },
    {
      "card": "1234****3324",
      "cpf": "55641815063",
      "date": "2019-03-01",
      "hour": 90002,
      "store_name": "LOJA DO Ó - MATRIZ",
      "store_owner": "MARIA JOSEFINA",
      "type": 1,
      "value": 200.0
    },
    {
      "card": "2344****1222",
      "cpf": "84515254073",
      "date": "2019-03-01",
      "hour": 123222,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 8,
      "value": 2.0
    },
    {
      "card": "6777****1313",
      "cpf": "23270298056",
      "date": "2019-03-01",
      "hour": 172712,
      "store_name": "MERCEARIA 3 IRMÃO",
      "store_owner": "JOSÉ COSTA",
      "type": 3,
      "value": 6102.0
    },
    {
      "card": "6777****1313",
      "cpf": "84515254073",
      "date": "2019-03-01",
      "hour": 172712,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 3,
      "value": 122.0
    },
    {
      "card": "3648****0099",
      "cpf": "09620676017",
      "date": "2019-03-01",
      "hour": 234234,
      "store_name": "BAR DO JOÃO",
      "store_owner": "JOÃO MACEDO",
      "type": 2,
      "value": 112.0
    },
    {
      "card": "2344****1222",
      "cpf": "84515254073",
      "date": "2019-03-01",
      "hour": 123222,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 8,
      "value": 102.03
    },
    {
      "card": "1234****6678",
      "cpf": "55641815063",
      "date": "2019-03-01",
      "hour": 100000,
      "store_name": "LOJA DO Ó - FILIAL",
      "store_owner": "MARIA JOSEFINA",
      "type": 4,
      "value": 152.32
    },
    {
      "card": "3648****0099",
      "cpf": "09620676017",
      "date": "2019-03-01",
      "hour": 234234,
      "store_name": "BAR DO JOÃO",
      "store_owner": "JOÃO MACEDO",
      "type": 2,
      "value": 112.0
    },
    {
      "card": "3123****7687",
      "cpf": "84515254073",
      "date": "2019-03-01",
      "hour": 145607,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 5,
      "value": 802.0
    },
    {
      "card": "7677****8778",
      "cpf": "23270298056",
      "date": "2019-03-01",
      "hour": 141808,
      "store_name": "MERCEARIA 3 IRMÃO",
      "store_owner": "JOSÉ COSTA",
      "type": 2,
      "value": 5.0
    },
    {
      "card": "2344****1222",
      "cpf": "84515254073",
      "date": "2019-03-01",
      "hour": 123222,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 8,
      "value": 102.03
    },
    {
      "card": "1234****7890",
      "cpf": "09620676017",
      "date": "2019-03-01",
      "hour": 233000,
      "store_name": "BAR DO JOÃO",
      "store_owner": "JOÃO MACEDO",
      "type": 1,
      "value": 152.0
    },
    {
      "card": "6777****1313",
      "cpf": "23270298056",
      "date": "2019-03-01",
      "hour": 172712,
      "store_name": "MERCEARIA 3 IRMÃO",
      "store_owner": "JOSÉ COSTA",
      "type": 3,
      "value": 602.0
    },
    {
      "card": "8723****9987",
      "cpf": "23270298056",
      "date": "2019-03-01",
      "hour": 123333,
      "store_name": "MERCEARIA 3 IRMÃO",
      "store_owner": "JOSÉ COSTA",
      "type": 2,
      "value": 109.0
    },
    {
      "card": "6777****1313",
      "cpf": "23270298056",
      "date": "2019-03-01",
      "hour": 172712,
      "store_name": "MERCEARIA 3 IRMÃO",
      "store_owner": "JOSÉ COSTA",
      "type": 3,
      "value": 103.0
    },
    {
      "card": "8723****9987",
      "cpf": "84515254073",
      "date": "2019-03-01",
      "hour": 123333,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 2,
      "value": 107.0
    },
    {
      "card": "8723****9987",
      "cpf": "84515254073",
      "date": "2019-03-01",
      "hour": 123333,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 2,
      "value": 107.0
    },
    {
      "card": "6228****9090",
      "cpf": "55641815063",
      "date": "2019-03-01",
      "hour": 0,
      "store_name": "LOJA DO Ó - MATRIZ",
      "store_owner": "MARIA JOSEFINA",
      "type": 9,
      "value": 102.0
    },
    {
      "card": "6228****9090",
      "cpf": "55641815063",
      "date": "2019-03-01",
      "hour": 0,
      "store_name": "LOJA DO Ó - MATRIZ",
      "store_owner": "MARIA JOSEFINA",
      "type": 9,
      "value": 102.0
    },
    {
      "card": "8473****1231",
      "cpf": "84515254073",
      "date": "2019-03-01",
      "hour": 231233,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 2,
      "value": 502.0
    },
    {
      "card": "3123****7687",
      "cpf": "55641815063",
      "date": "2019-03-01",
      "hour": 145607,
      "store_name": "LOJA DO Ó - MATRIZ",
      "store_owner": "MARIA JOSEFINA",
      "type": 5,
      "value": 132.0
    },
    {
      "card": "6777****1313",
      "cpf": "23270298056",
      "date": "2019-03-01",
      "hour": 172712,
      "store_name": "MERCEARIA 3 IRMÃO",
      "store_owner": "JOSÉ COSTA",
      "type": 3,
      "value": 6102.0
    },
    {
      "card": "1234****2231",
      "cpf": "84515254073",
      "date": "2019-06-01",
      "hour": 100000,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 4,
      "value": 506.17
    },
    {
      "card": "6777****1313",
      "cpf": "23270298056",
      "date": "2019-03-01",
      "hour": 172712,
      "store_name": "MERCEARIA 3 IRMÃO",
      "store_owner": "JOSÉ COSTA",
      "type": 3,
      "value": 602.0
    },
    {
      "card": "6777****1313",
      "cpf": "84515254073",
      "date": "2019-03-01",
      "hour": 172712,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 3,
      "value": 122.0
    },
    {
      "card": "1234****6678",
      "cpf": "55641815063",
      "date": "2019-03-01",
      "hour": 100000,
      "store_name": "LOJA DO Ó - FILIAL",
      "store_owner": "MARIA JOSEFINA",
      "type": 4,
      "value": 152.32
    },
    {
      "card": "8723****9987",
      "cpf": "23270298056",
      "date": "2019-03-01",
      "hour": 123333,
      "store_name": "MERCEARIA 3 IRMÃO",
      "store_owner": "JOSÉ COSTA",
      "type": 2,
      "value": 109.0
    },
    {
      "card": "4753****3153",
      "cpf": "09620676017",
      "date": "2019-03-01",
      "hour": 153453,
      "store_name": "BAR DO JOÃO",
      "store_owner": "JOÃO MACEDO",
      "type": 3,
      "value": 142.0
    },
    {
      "card": "8473****1231",
      "cpf": "23270298056",
      "date": "2019-03-01",
      "hour": 231233,
      "store_name": "MERCEARIA 3 IRMÃO",
      "store_owner": "JOSÉ COSTA",
      "type": 2,
      "value": 102.0
    },
    {
      "card": "6777****1313",
      "cpf": "84515254073",
      "date": "2019-03-01",
      "hour": 172712,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 3,
      "value": 192.0
    },
    {
      "card": "1234****3324",
      "cpf": "55641815063",
      "date": "2019-03-01",
      "hour": 90002,
      "store_name": "LOJA DO Ó - MATRIZ",
      "store_owner": "MARIA JOSEFINA",
      "type": 1,
      "value": 200.0
    },
    {
      "card": "2344****1222",
      "cpf": "84515254073",
      "date": "2019-03-01",
      "hour": 123222,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 8,
      "value": 2.0
    },
    {
      "card": "1234****7890",
      "cpf": "09620676017",
      "date": "2019-03-01",
      "hour": 233000,
      "store_name": "BAR DO JOÃO",
      "store_owner": "JOÃO MACEDO",
      "type": 1,
      "value": 152.0
    },
    {
      "card": "6777****1313",
      "cpf": "23270298056",
      "date": "2019-03-01",
      "hour": 172712,
      "store_name": "MERCEARIA 3 IRMÃO",
      "store_owner": "JOSÉ COSTA",
      "type": 3,
      "value": 103.0
    },
    {
      "card": "3123****7687",
      "cpf": "84515254073",
      "date": "2019-03-01",
      "hour": 145607,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 5,
      "value": 802.0
    },
    {
      "card": "7677****8778",
      "cpf": "23270298056",
      "date": "2019-03-01",
      "hour": 141808,
      "store_name": "MERCEARIA 3 IRMÃO",
      "store_owner": "JOSÉ COSTA",
      "type": 2,
      "value": 5.0
    },
    {
      "card": "8473****1231",
      "cpf": "84515254073",
      "date": "2019-03-01",
      "hour": 231233,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 2,
      "value": 502.0
    },
    {
      "card": "1234****2231",
      "cpf": "84515254073",
      "date": "2019-06-01",
      "hour": 100000,
      "store_name": "MERCADO DA AVENIDA",
      "store_owner": "MARCOS PEREIRA",
      "type": 4,
      "value": 506.17
    }
  ]
}

export function Dashboard() {

  console.log("Banana")
  return (
    <Table cnabs={fakeData.data} />
  )
}