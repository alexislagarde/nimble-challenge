import { useEffect, useState } from "react";
import "./App.css";
import { fetchCandidateByEmail, getListJobs } from "./Api/useApi";
import JobList from "./components/JobList";

function App() {

  
  const [candidate, setCandidate] = useState(null);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
   
    const loadData = async () => {
      try {
        const candidates = await fetchCandidateByEmail("alexislagarde@hotmail.com");
        const jobs= await getListJobs();
        
        setCandidate(candidates);
        setJobs(jobs);
      } catch (error) {
        console.error("Error cargando datos:", error);
      }
    };

    loadData();
  }, []);

return (
<div className="App">
 <h1>Nimble Gravity Challenge</h1>
  <div className="card-candidates">
   <h3>Step 2 — Obtener tus datos de candidato</h3>
    <table className="candidatesTable" style={{ border: "1px solid black" }}>
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
  <div className="card-jobs">
    <h3>Step 3 — Obtener la lista de posiciones abiertas</h3>
       <JobList jobs={jobs} />

  </div>

</div>


);
}

export default App;
