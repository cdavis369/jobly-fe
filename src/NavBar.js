import { NavLink } from "react-router-dom";
import { useUser } from "./context/UserContext";
import "./style/NavBar.css";

function NavBar() {
  const  { username } = useUser();
  return (
    <div className="navbar">
      <p className="navbar-title">
        <NavLink to="/">Jobly</NavLink>
      </p>
      <div className="navbar-links">
        { username === "" 
          ? (<span>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </span>)
          : (<span>
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/logout">Logout {username}</NavLink>
            </span>)
        }
      </div>
    </div>
  )
}

export default NavBar;