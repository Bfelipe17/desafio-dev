import { createContext, ReactNode, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({});

export function UserProvider({ children }: UserProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(["bycoders_test_token"]);
  const token = cookies.bycoders_test_token;
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.bycoders_test_token) {
      api.get("/users/me", { headers: { "Authorization": `Bearer ${token}` } })
        .catch(function () {
          removeCookie("bycoders_test_token");
          navigate("/login");
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <UserContext.Provider value={{}} >
      {children}
    </UserContext.Provider>
  )
}