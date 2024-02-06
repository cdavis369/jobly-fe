import React, { useState } from 'react';
import { useUser } from './context/UserContext';
import { useNavigate } from "react-router-dom";
import JoblyApi from './api';
import "./style/Login.css";

function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const { setUsername, setUserToken } = useUser()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Username and password required");
    } else {
      const user = {username: username, password: password};
      console.log(user);
      let response = await JoblyApi.login(user);
      if (response.token) {
        setUsername(username);
        setUserToken(response.token);
        JoblyApi.token = response.token;
        localStorage.setItem("token", response.token);
        localStorage.setItem("username", username)
        navigate("/");
      } else {
        alert(response);
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setusername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
    </form>
  )
}

export default Login;