import React, { useState } from 'react';
import { useUser } from './context/UserContext';
import { useNavigate } from "react-router-dom";
import JoblyApi from './api';

function Register() {
  const { setUsername, setUserToken } = useUser();
  const navigate = useNavigate();
  // form
  const [username, setFormUsername] = useState("");
  const [password, setFormPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password || !passwordCheck || !firstName || !lastName || !email) {
      alert("All fields required");
    } else if (password !== passwordCheck) {
      alert("Passwords do not match.");
    } else {
      const data = {
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email
      }

      let response = await JoblyApi.register(data);
      
      if (response.token) {
        setUsername(username);
        setUserToken(response.token);
        JoblyApi.token = response.token;
        localStorage.setItem("token", response.token);
        localStorage.setItem("username", username);
        setFormUsername("");
        setFormPassword("");
        setPasswordCheck("");
        setFirstname("");
        setLastName("");
        setEmail("");
        navigate("/");
      } else {
        alert(response)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} label="register-form">
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setFormUsername(e.target.value)} />
        </label>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstname(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setFormPassword(e.target.value)} />
        </label>
        <label>
          Retype Password:
          <input type="password" value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)} />
        </label>
        <button type="submit">Register</button>
    </form>
  )
}

export default Register;