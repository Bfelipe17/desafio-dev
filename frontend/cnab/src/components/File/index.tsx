import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

export function FileUpload() {
  const { fileHandler, handleFileSubmit } = useContext(StoreContext);
  return (
    <div>
      <input type="file" onChange={e => fileHandler(e)} />
      <button type="button" onClick={handleFileSubmit}>Upload file</button>
    </div>
  )
}