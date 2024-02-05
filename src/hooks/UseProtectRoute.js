import { useUser } from "../context/UserContext.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UseProtectRoute() {
  const { userToken } = useUser();
  const navigate = useNavigate();
  useEffect(() => { 
      if (!userToken) navigate("/") 
    }, [userToken, navigate]
  );
}

export default UseProtectRoute;