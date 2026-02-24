import { useState } from "react";

function JobList({ jobs }) {
  // Estado para los links de cada puesto
  const [githubLinks, setGithubLinks] = useState({});

  const handleChange = (id, value) => {
    setGithubLinks({ ...githubLinks, [id]: value });
  };

  const handleSubmit = (id, title) => {
    const url = githubLinks[id];
    if (!url) {
      alert("Por favor, ingresa la URL del repositorio.");
      return;
    }
   
    alert(`Postulación enviada para: ${title}`);
   //..por aca puedo agregar el submit, ver bien
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
                value={githubLinks[job.id] || ""}
                onChange={(e) => handleChange(job.id, e.target.value)}
                style={{ width: "90%", padding: "5px" }}
              />
            </td>
            <td style={styles.td}>
              <button 
                onClick={() => handleSubmit(job.id, job.title)}
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