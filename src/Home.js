import { useUser } from "./context/UserContext.js";
import NewUserHome from "./NewUserHome.js";
import "./style/Home.css";

function Home() {
  const { username } = useUser();
  return (
    <div className="home">
      {username 
        ? (<p>Welcome back, {username}.</p>)
        : (<NewUserHome />)}
    </div>
  )
}

export default Home;