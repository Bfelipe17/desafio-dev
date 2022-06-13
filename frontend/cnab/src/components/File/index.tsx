import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

import "./style.css"

export function FileUpload() {
  const { fileHandler, handleFileSubmit, fileName } = useContext(StoreContext);
  return (
    <div>
      <div className="input">
        <input type="file" name="file" id="file" onChange={e => fileHandler(e)} className="input_file" />
        <label htmlFor="file">Choose a file</label>
        <span>Chosen file: <strong>{fileName}</strong></span>
      </div>
      <button type="button" onClick={handleFileSubmit}>Upload file</button>
    </div>
  )
}