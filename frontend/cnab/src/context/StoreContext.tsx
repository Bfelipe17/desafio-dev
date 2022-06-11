import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
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
};

export const StoreContext = createContext({} as StoreContextData)

export function StoreProvider({ children }: StoreProviderProps) {
  const [cookies, setCookie, removeCookie] = useCookies(['bycoders_test_token']);
  const [storeName, setStoreName] = useState("ALL");
  const [data, setData] = useState([]);
  const token = cookies.bycoders_test_token;

  const getCnabsBy = (storeName: string) => {
    api.get(`/cnabs/list?store_name=${storeName}`, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(function (response) {
        setData(response.data.data)
      }).catch(function (error) {
        throw new Error(error)
      })
  }

  return (
    <StoreContext.Provider value={{ storeName, setStoreName, getCnabsBy, data }}>
      {children}
    </StoreContext.Provider>
  )
}