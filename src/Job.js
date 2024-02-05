import JoblyApi from "./api";
import { useUser } from "./context/UserContext";
import "./style/Job.css";

function Job({props}) {
  const { id, title, salary, equity, companyHandle, companyName, appliedJobs } = props;
  const { username, setAppliedJobs } = useUser();

  const applied = appliedJobs.includes(id) ? true : false;

  const applyForJob = async () => {
    const response = await JoblyApi.applyForJob(username, id);
    console.log(response)
    setAppliedJobs([...appliedJobs, id]);
    // navigate("/jobs");
  }

  return (
    <div className="job">
      <div className="job-info">
        <p className="title">Job title:</p>
        <p className="salary">Salary:</p>
        <p className="equity">Equity:</p>
        {companyName && (
          <div>
            <p className="co-name">Company Name:</p>
            <p className="co-handle">Company Handle:</p>
        </div>
        )}

      </div>
      <div className="job-details">
        <p className="title">{title}</p>
        <p className="salary">{ salary ? `$${salary.toLocaleString('en-US')}` : "NULL" }</p>
        <p className="equity">{equity ? equity : 0}</p>
        {companyName && (
          <div>
            <p className="co-name">{companyName}</p>
            <p className="co-handle">{companyHandle}</p>  
          </div>
        )}
      </div>
      <div className="apply">
        <button className="button-apply" onClick={applyForJob} disabled={applied}>Apply</button>
      </div>
    </div>
  )
}

export default Job;
