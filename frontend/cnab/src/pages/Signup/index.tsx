import { useState } from "react";
import { api } from "../../services/api";
import { ToastContainer, toast } from 'react-toastify';
import { useCookies } from 'react-cookie';

import 'react-toastify/dist/ReactToastify.css';
import "../Login/style.css"

export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['bycoders_test_token']);

  const handleLogin = () => {
    // eslint-disable-next-line no-restricted-globals
    event?.preventDefault();
    api.post('/users', {
      name,
      email,
      password
    }).then(function (response) {
      const { token } = response.data;
      setCookie('bycoders_test_token', token, { path: '/' });
      toast.success("User created!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      <main>
        <form onSubmit={handleLogin}>
          <h2>Create an account</h2>
          <label htmlFor="name">Name</label>
          <input type="name" id="name" onChange={(e) => setName(e.target.value)} placeholder="Ex: Joe user" />
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Ex: joe@user.com" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="******" />
          <button>Login</button>
          <p><a href="/login">Login to your account</a></p>
        </form>
      </main>
    </>

  )
}