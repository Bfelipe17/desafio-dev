/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { Header } from "../../components/Header";
import { Select } from "../../components/Select";
import { Table } from "../../components/Table";
import { Total } from "../../components/Total";
import { StoreContext } from "../../context/StoreContext";
import "./style.css"

export function Dashboard() {
  const { storeName, getCnabsBy, data, total } = useContext(StoreContext);
  const [cookies] = useCookies(['bycoders_test_token']);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.bycoders_test_token) {
      navigate("/login")
    }
  }, [])

  useEffect(() => {
    getCnabsBy(storeName);
  }, [storeName])

  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="options">
          <Select />
        </div>
        <Total value={total} />
        <Table cnabs={data} />
      </div>
    </>
  )
}