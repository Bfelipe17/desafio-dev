import { useState } from "react";
import { api } from "../../services/api";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // eslint-disable-next-line no-restricted-globals
    event?.preventDefault();
    api.post('/users/session', {
      email,
      password
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      toast.error(`${error.response.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleLogin}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button>Logar</button>
      </form>
    </>

  )
}