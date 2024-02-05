import React, { useState, useEffect } from "react";
import Job from "./Job.js";
import JoblyApi from "./api.js";
import UseProtectRoute from "./hooks/UseProtectRoute.js";
import UseGetAppliedJobs from "./hooks/UseGetAppliedJobs.js";
import { useUser } from "./context/UserContext.js";
import "./style/JobList.css";

function JobList() {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([]);
  const { appliedJobs } = useUser();

  UseProtectRoute();
  UseGetAppliedJobs();

  console.log( appliedJobs )
  useEffect(() => {
    async function getJobs() {
      let response = await JoblyApi.getJobs();
      setJobs(response);
      setIsLoading(false);
    }
    getJobs();
  }, []);

  return (
    <div className="job-list">
      {isLoading ? (<p>Loading...</p>) 
        : (jobs.map(j => (<Job props={{...j, appliedJobs: appliedJobs}} key={j.id}/>)))
      }
    </div>
  );
}

export default JobList;