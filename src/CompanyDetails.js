import React, { useState, useEffect } from "react";
import Job from "./Job.js";
import Company from "./Company.js";
import { useParams } from 'react-router-dom';
import JoblyApi from "./api.js";
import UseProtectRoute from "./hooks/UseProtectRoute.js";
import UseGetAppliedJobs from "./hooks/UseGetAppliedJobs.js";
import { useUser } from "./context/UserContext.js";
import "./style/CompanyDetails.css";

function CompanyDetails() {
  const [isLoading, setIsLoading] = useState(true)
  const [company, setCompany] = useState({});
  const [companyJobs, setCompanyJobs] = useState([]);  
  const { appliedJobs } = useUser();
  const { handle } = useParams();

  UseProtectRoute();
  UseGetAppliedJobs();

  useEffect(() => {
    async function getCompany() {
      let response = await JoblyApi.getCompany(handle);
      setIsLoading(false);
      setCompany(response);
      setCompanyJobs(response.jobs)
    }
    getCompany();
  }, [handle]);

  return (
    <div className="company-details-container">
      {isLoading 
      ? (<p>Loading...</p>) 
      : (
        <div className="company-details">
          <Company props={company} />
          <div className="company-jobs">
            {companyJobs.map(j => <Job props={{...j, appliedJobs: appliedJobs}}/>)}
          </div>
        </div>
      )
      }
    </div>
  )
}

export default CompanyDetails