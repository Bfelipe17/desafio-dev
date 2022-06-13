import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

export function Logout() {
  const { logout } = useContext(UserContext);

  return <span onClick={logout}>Log out</span>
}