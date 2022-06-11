import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({});

export function UserProvider({ children }: UserProviderProps) {
  const [cookies, setCookie, removeCookie] = useCookies(["bycoders_test_token"]);
  const token = cookies.bycoders_test_token;
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.bycoders_test_token) {
      api.get("/users/me", { headers: { "Authorization": `Bearer ${token}` } })
        .catch(function (error) {
          removeCookie("bycoders_test_token");
          navigate("/login");
        })
    }
  }, [])

  return (
    <UserContext.Provider value={{}} >
      {children}
    </UserContext.Provider>
  )
}