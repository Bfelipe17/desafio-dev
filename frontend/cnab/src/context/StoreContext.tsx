import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface StoreProviderProps {
  children: ReactNode;
}

type StoreContextData = {
  storeName: string;
  setStoreName: Dispatch<SetStateAction<string>>;
};

export const StoreContext = createContext({} as StoreContextData)

export function StoreProvider({ children }: StoreProviderProps) {
  const [storeName, setStoreName] = useState("ALL");

  return (
    <StoreContext.Provider value={{ storeName, setStoreName }}>
      {children}
    </StoreContext.Provider>
  )
}