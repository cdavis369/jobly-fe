import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router.js"
import JoblyApi from "./api.js";
import NavBar from "./NavBar.js";
import { useUser } from "./context/UserContext.js";
import './style/App.css';


function App() {
  const { setUserToken, setUsername } = useUser();

  useEffect(() => {
    function getUserToken() {
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("username");
      if (token && username) {
        setUserToken(token);
        setUsername(username);
        JoblyApi.token = token;
      }
    }
    getUserToken();

  }, [setUserToken, setUsername]);

  return (
    <div className="App">
      <img src="./jobly-background.webp" alt="wallpaper.webp" className="application-background"/>
      <div className="jobly">
        <BrowserRouter>
          <NavBar />
          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
