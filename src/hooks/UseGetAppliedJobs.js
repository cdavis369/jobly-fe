import { useState } from "react";
import JoblyApi from "../api";
import { useUser } from "../context/UserContext";

async function UseGetAppliedJobs() {
  const [isLoading, setIsLoading] = useState(true);
  const { username, setAppliedJobs } = useUser();
  if (isLoading) {
    const response = await JoblyApi.getUser(username);
    setAppliedJobs(response.applications);
    setIsLoading(false);
  }

  return;
}

export default UseGetAppliedJobs;
