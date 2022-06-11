import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface UserProviderProps {
  children: ReactNode;
}

type UserContextData = {
  banana: string;
};

export const UserContext = createContext({} as UserContextData)

export function StoreProvider({ children }: UserProviderProps) {
  const [cookies, setCookie, removeCookie] = useCookies(['bycoders_test_token']);
  const token = cookies.bycoders_test_token;
  const navigate = useNavigate();

  const banana = "Banana";

  useEffect(() => {
    const token = cookies.bycoders_test_token;
    if (cookies.bycoders_test_token) {
      api.get("/users/me", { headers: { 'Authorization': `Bearer ${token}` } })
        .catch(function (error) {
          removeCookie('bycoders_test_token')
          navigate("/login")
        })
    }
  }, [])


  return (
    <UserContext.Provider value={{ banana }}>
      {children}
    </UserContext.Provider>
  )
}