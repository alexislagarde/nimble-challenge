
import "./App.css";
import { fetchCandidateByEmail } from "./Api/handleApi";

function App() {
const { candidate } = fetchCandidateByEmail("alexislagarde@hotmail.com")

return (
<div className="App">
 <h1>Nimble Gravity Challenge</h1>
  <div className="card-candidates">
    <table className="candidatesTable">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Candidate ID</th>
          <th>Application ID</th>
        </tr>
      </thead>

      <tbody>
        {candidate && (
          <tr>
            <td>{candidate.firstName}</td>
            <td>{candidate.lastName}</td>
            <td>{candidate.email}</td>
            <td>{candidate.candidateId}</td>
            <td>{candidate.applicationId}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  
</div>


);
}

export default App;
