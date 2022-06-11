import { ChangeEvent, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Table } from "../../components/Table";
import { api } from "../../services/api";
import { formatValue } from "../../utils/format";
import "./style.css"


export function Dashboard() {
  const [cookies, setCookie, removeCookie] = useCookies(['bycoders_test_token']);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [storeName, setStoreName] = useState('ALL');
  const [file, setFile] = useState<File>();
  const [total, setTotal] = useState(0);
  const token = cookies.bycoders_test_token;

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

    api.get("/cnabs", { headers: { 'Authorization': `Bearer ${token}` } })
      .then(function (response) {
        setData(response.data.data)
      }).catch(function (error) {
        console.log(error)
      })
  }, [])


  useEffect(() => {
    getCnabsBy(storeName)
  }, [storeName])

  useEffect(() => {
    setTotal(data.reduce((accumulator: any, currentValue: any) => {
      console.log({ accumulator, currentValue: Number(currentValue.value) })
      return accumulator + Number(currentValue.value)
    }, 0))
  }, [data])

  const fileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList) return;

    setFile(fileList[0]);
  }

  const handleFileSubmit = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file, file.name);

      api.post("/cnabs", formData, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }).then(function (response) {
        getCnabsBy(storeName)
      })
    }
  }

  const getCnabsBy = (storeName: string) => {
    api.get(`/cnabs/list?store_name=${storeName}`, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(function (response) {
        setData(response.data.data)
      }).catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className="dashboard">
      <div className="options">
        <select name="store" onChange={e => setStoreName(e.currentTarget.value)}>
          <option value="ALL" selected={true}>ALL</option>
          <option value="BAR DO JOÃO">BAR DO JOÃO</option>
          <option value="MERCEARIA 3 IRMÃO">MERCEARIA 3 IRMÃO</option>
          <option value="MERCADO DA AVENIDA">MERCADO DA AVENIDA</option>
          <option value="LOJA DO Ó - MATRIZ">LOJA DO Ó - MATRIZ</option>
          <option value="LOJA DO Ó - FILIAL">LOJA DO Ó - FILIAL</option>
        </select>
        <div>
          <input type="file" onChange={e => fileHandler(e)} />
          <button type="button" onClick={handleFileSubmit}>Upload file</button>
        </div>
      </div>
      <p>Total: {formatValue(total.toString())}</p>
      <Table cnabs={data} />
    </div>
  )
}