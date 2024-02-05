import { useUser } from './context/UserContext';
import JoblyApi from './api';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function Logout() {
  const { setUsername, setUserToken } = useUser();
  const navigate = useNavigate();
  
  setUsername("");
  setUserToken("");
  JoblyApi.token = null;
  localStorage.removeItem("token");
  useEffect(() => {
    navigate("/");
  })

}

export default Logout;