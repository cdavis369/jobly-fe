import { useEffect, useState } from "react";
import JoblyApi from "./api";
import UseProtectRoute from "./hooks/UseProtectRoute.js";
import { useUser } from "./context/UserContext.js";

function UserProfile() {
  const [isLoading, setIsLoading] = useState(true);
  // const [user, setUser] = useState([]);
  const { username } = useUser();
  // form
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  UseProtectRoute();

  useEffect(() => {
    async function getUserProfile() {
      if (isLoading) {
        let response = await JoblyApi.getUser(username);
        // setUser(response);
        setIsLoading(false);
        // form
        setFirstname(response.firstName);
        setLastName(response.lastName);
        setEmail(response.email);
      }
    }
    getUserProfile();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email
    }

    if (password) userData["password"] = password;

    const response = await JoblyApi.editUser(username, userData);
    console.log(response);

  }

  return (
    <form onSubmit={handleSubmit} label="register-form">
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
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Edit</button>
    </form>
  )
}

export default UserProfile;