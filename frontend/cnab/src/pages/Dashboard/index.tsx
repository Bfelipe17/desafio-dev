import { useContext, useEffect } from "react";
import { FileUpload } from "../../components/File";
import { Select } from "../../components/Select";
import { Table } from "../../components/Table";
import { Total } from "../../components/Total";
import { StoreContext } from "../../context/StoreContext";
import "./style.css"

export function Dashboard() {
  const { storeName, getCnabsBy, data, total } = useContext(StoreContext);

  useEffect(() => {
    getCnabsBy(storeName);
  }, [storeName])

  return (
    <div className="dashboard">
      <div className="options">
        <Select />
        <FileUpload />
      </div>
      <Total value={total} />
      <Table cnabs={data} />
    </div>
  )
}