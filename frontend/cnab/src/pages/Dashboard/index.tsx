import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Table } from "../../components/Table";
import { api } from "../../services/api";
import "./style.css"


export function Dashboard() {
  const [cookies, setCookie, removeCookie] = useCookies(['bycoders_test_token']);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [storeName, setStoreName] = useState('ALL');

  useEffect(() => {
    const token = cookies.bycoders_test_token;
    if (cookies.bycoders_test_token) {
      api.get("/users/me", { headers: { 'Authorization': `Bearer ${token}` } })
        .then(function (response) {
        }).catch(function (error) {
          removeCookie('bycoders_test_token')
          navigate("/login")
        })
    }
  }, [])

  const token = cookies.bycoders_test_token;

  useEffect(() => {
    api.get("/cnabs", { headers: { 'Authorization': `Bearer ${token}` } })
      .then(function (response) {
        setData(response.data.data)
      }).catch(function (error) {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    api.get(`/cnabs/list?store_name=${storeName}`, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(function (response) {
        setData(response.data.data)
      }).catch(function (error) {
        console.log(error)
      })
  }, [storeName])

  console.log(storeName)

  return (
    <div className="dashboard">
      <select name="store" onChange={e => setStoreName(e.currentTarget.value)}>
        <option value="ALL" selected={true}>ALL</option>
        <option value="BAR DO JOÃO">BAR DO JOÃO</option>
        <option value="MERCEARIA 3 IRMÃO">MERCEARIA 3 IRMÃO</option>
        <option value="MERCADO DA AVENIDA">MERCADO DA AVENIDA</option>
        <option value="LOJA DO Ó - MATRIZ">LOJA DO Ó - MATRIZ</option>
        <option value="LOJA DO Ó - FILIAL">LOJA DO Ó - FILIAL</option>
      </select>

      <Table cnabs={data} />
    </div>

  )
}