import { useNavigate } from "react-router-dom";
import React from "react";
import "./style/NewUserHome.css";
function NewUserHome() {
  const navigate = useNavigate();

  const login = () => { navigate("/login") }
  const register = () => { navigate("/register") }
  
  return (
    <div className="new-user-home">
      <h3>Jobly</h3>
      <p>All the jobs in one, convenient place</p>
      <div className="new-user-home-buttons">
        <button onClick={login}>Login</button>
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}

export default NewUserHome;