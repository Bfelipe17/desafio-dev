import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Table } from "../../components/Table";
import { api } from "../../services/api";


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
  ]
}

export function Dashboard() {
  const [cookies, setCookie, removeCookie] = useCookies(['bycoders_test_token']);
  const navigate = useNavigate();

  useEffect(() => {
    const token = cookies.bycoders_test_token;
    if (cookies.bycoders_test_token) {
      api.get("/users/me", { headers: { 'Authorization': `Bearer ${token}` } })
        .then(function (response) {
        }).catch(function (error) {
          removeCookie('bycoders_test_token')
          navigate("/login")
        })
    } else {
      console.log("Manga")
    }
  }, [])

  console.log("Banana")
  return (
    <Table cnabs={fakeData.data} />
  )
}