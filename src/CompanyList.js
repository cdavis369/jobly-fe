import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Company from "./Company.js";
import JoblyApi from "./api.js";
import UseProtectRoute from "./hooks/UseProtectRoute.js";
import UseGetAppliedJobs from "./hooks/UseGetAppliedJobs.js";
import "./style/CompanyList.css";

function CompanyList() {
  const [isLoading, setIsLoading] = useState(true)
  const [companies, setCompanies] = useState([]);

  UseProtectRoute();
  UseGetAppliedJobs();

  useEffect(() => {
    async function getCompanies() {
      let response = await JoblyApi.getCompanies();
      setCompanies(response);
      setIsLoading(false)
    }
    getCompanies();
  }, []);

  return (
    <div className="company-list">
      {isLoading ? (<p>Loading...</p>) 
        : (companies.map(c => (
            <Link to={`/company/${c.handle}`} key={`${c.handle}`}>
              <Company props={c}/>
            </Link>
          )))
      }
    </div>  
  );
}

export default CompanyList;