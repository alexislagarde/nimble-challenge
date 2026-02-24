import { useEffect, useState } from "react";
import "./App.css";
import { fetchCandidateByEmail, getListJobs } from "./Api/useApi";
import JobList from "./components/JobList";
import CandidateEmail from "./components/CandidateEmail";

function App() {
  const [candidate, setCandidate] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const resCandidate = await fetchCandidateByEmail("alexislagarde@hotmail.com");
      const resJobs = await getListJobs();

      setCandidate(resCandidate.data);
      setJobs(resJobs.data || []); 

      if (resCandidate.error || resJobs.error) {
        setError(resCandidate.error || resJobs.error);
      
      }

      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <div className="App">
      <h1>Nimble Gravity Challenge</h1>

      {error && (
        <div style={{ color: 'red', border: '1px solid red', padding: '10px', margin: '10px 0' }}>
          <p><strong>Error:</strong> {error}</p>
          <p>No se pudo cargar la información. Revisa el email o la API.</p>
        </div>
      )}

      
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Cargando datos...</p>
        </div>
      ) : (
      
        <>
          <div>
            <h3>Step 2 — Obtener tus datos de candidato</h3>
            <CandidateEmail candidate={candidate} />
          </div>

          <div className="card-jobs">
            <h3>Step 3 y 4 — Obtener la lista de posiciones abiertas y Mostrarlas en un componente</h3>
            <JobList jobs={jobs} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;