import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import CompanyList from "./CompanyList.js";
import Logout from "./Logout.js";
import JobList from "./JobList.js";
import CompanyDetails from "./CompanyDetails.js";
import Profile from "./UserProfile.js";
import Register from "./Register.js";
import Login from "./Login.js";

function Router() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/companies" Component={CompanyList} />
      <Route exact path="/company/:handle" Component={CompanyDetails} />
      <Route exact path="/jobs" Component={JobList} />
      <Route exact path="/login" Component={Login} />
      <Route exact path="/logout" Component={Logout} />
      <Route exact path="/register" Component={Register} />
      <Route exact path="/profile" Component={Profile} />
      <Route Component={Home} />
    </Routes>
  );
}

export default Router;