import { useState } from "react";

function JobList({ jobs }) {
 
  const [githubLinks, setGithubLinks] = useState({});

  const handleChange = (id, value) => {
    setGithubLinks({ ...githubLinks, [id]: value });
  };

  const handleSubmit = (id, title) => {
    const url = githubLinks[id];
    if (!url) return alert("Por favor ingresa una URL");
    alert(`Postulación enviada para ${title}`);
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {jobs.map((job) => (
        <li key={job.id} style={{ marginBottom: "20px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
          <div>
            <strong>{job.title}</strong>
          </div>
          <input
            type="text"
            placeholder="URL del repositorio GitHub"
            value={githubLinks[job.id] || ""}
            onChange={(e) => handleChange(job.id, e.target.value)}
          />
          <button onClick={() => handleSubmit(job.id, job.title)}>
            Submit
          </button>
        </li>
      ))}
    </ul>
  );
}

export default JobList;