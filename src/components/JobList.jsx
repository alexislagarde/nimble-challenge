import { useState } from "react";
import { submitApplication } from "../Api/useApi";

function JobList({ jobs , candidate , setError }) {
  
  const [repoUrl, setRepoUrl] = useState({});

  const handleChange = (id, value) => {
    setRepoUrl({ ...repoUrl, [id]: value });
  };

  const handleSubmit = async (id) => {
    const url = repoUrl[id];

    if (!url) {
      alert("Por favor, ingresar la URL del repositorio.");
      return;
    }

    if (!candidate) {
      alert("Error: No hay datos del candidato. Revisar el Step 2.");
      return;
    }

const submitData = {
  uuid: candidate.uuid,
  jobId: id,
  candidateId: candidate.candidateId,
  applicationId:candidate.applicationId,//ACA ESTA EL QUE FALTABAAA
  repoUrl: url,
  mail: candidate.email 
};

    console.log(" Datos postulación...", submitData)
  
   const result = await submitApplication(submitData);
    if (result.error) {
      setError(result.error); 
    } else {
      setError(null); 
      setRepoUrl({ ...repoUrl, [id]: "" });
    } 

  };

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
      <thead style={{ textAlign: "center" }}>
        <tr >
          <th style={styles.th}>Tìtulo de la posición</th>
          <th style={styles.th}>GitHub URL</th>
          <th style={styles.th}>Botón</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <tr key={job.id} style={{ borderBottom: "1px solid #ddd" }}>
            <td style={styles.td}>
              <strong>{job.title}</strong>
            </td>
            <td style={styles.td}>
              <input
                type="url"
                placeholder="https://github.com/..."
                value={repoUrl[job.id] || ""}
                onChange={(e) => handleChange(job.id, e.target.value)}
                style={{ width: "90%", padding: "5px" }}
              />
            </td>
            <td style={styles.td}>
              <button 
                onClick={() => handleSubmit(job.id)}
                style={styles.button}
              >
                Submit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const styles = {
  th: { padding: "12px", borderBottom: "2px solid" },
  td: { padding: "10px" },
  button: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default JobList;