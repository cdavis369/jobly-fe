import "./style/Company.css";

function Company({props}) {
  const {handle, name, description, numEmployees, logoURL} = props;
  
  return (
    <div className="company">
      <div className="company-logo">
        <img src={`${logoURL}`} alt="logoURL.png" />
      </div>
      
      <div className="company-info">
        <table className="company-details-table">
          <tr>
            <th>Company Name</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>Company Handle</th>
            <td>{handle}</td>
          </tr>
          <tr>
            <th>Employees</th>
            <td>{numEmployees}</td>
          </tr>
          <tr>
            <th>Details</th>
            <td>{description}</td>
          </tr>
        </table>
        {/* <p className="company-name">Company Name:</p>
        <p className="company-handle">Company Handle:</p>
        <p className="num-employees">Number of Employees:</p>
        <p className="company-description">Company Description:</p> */}
      </div>
      {/* <div className="company-details">
        <p className="company-name">{name}</p>
        <p className="company-handle">{handle}</p>
        <p className="num-employees">{numEmployees}</p>
        <p className="company-description">{description}</p>
      </div> */}
    </div>
  )
}

export default Company;