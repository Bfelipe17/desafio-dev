import { ChangeEvent, createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { api } from "../services/api";

interface StoreProviderProps {
  children: ReactNode;
}

type StoreContextData = {
  storeName: string;
  setStoreName: Dispatch<SetStateAction<string>>;
  getCnabsBy(storeName: string): void;
  data: any[];
  total: number;
  fileHandler(e: ChangeEvent<HTMLInputElement>): void;
  handleFileSubmit(): void;
};

export const StoreContext = createContext({} as StoreContextData)

export function StoreProvider({ children }: StoreProviderProps) {
  const [cookies] = useCookies(["bycoders_test_token"]);
  const [storeName, setStoreName] = useState("ALL");
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [file, setFile] = useState<File>();
  const token = cookies.bycoders_test_token;

  useEffect(() => {
    setTotal(data.reduce((accumulator: any, currentValue: any) => {
      return accumulator + Number(currentValue.value)
    }, 0))
  }, [data])

  const getCnabsBy = (storeName: string) => {
    api.get(`/cnabs/list?store_name=${storeName}`, { headers: { "Authorization": `Bearer ${token}` } })
      .then(function (response) {
        setData(response.data.data)
      }).catch(function (error) {
        throw new Error(error)
      })
  }

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
        getCnabsBy(storeName);
      })
    }
  }

  return (
    <StoreContext.Provider value={{ storeName, setStoreName, getCnabsBy, data, total, fileHandler, handleFileSubmit }}>
      {children}
    </StoreContext.Provider>
  )
}