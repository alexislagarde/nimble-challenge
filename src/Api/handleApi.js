import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;


export function fetchCandidateByEmail(email) {
const [candidate, setCandidates] = useState([]);
useEffect(() => {
fetch(`${BASE_URL}/api/candidate/get-by-email?email=${encodeURIComponent(email)}`)
.then((response) => response.json()) 
.then((data) => setCandidates(data))
.catch((error) => console.error("Error fetching candidate:", error));
}, []);
  return { candidate };
}

// export const getListJobs = async () => {
//   const res = await fetch(`${BASE_URL}/api/jobs/get-list`);
//   return handleResponse(res);
// };




// export const applyToJob = async (data) => {
//   const res = await fetch(`${BASE_URL}/api/candidate/apply-to-job`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return handleResponse(res);
// };

// const handleResponse = async (res) => {
//   if (!res.ok) {
//     throw new Error(`Error ${res.status}: ${res.statusText}`);
//   }
//   return res.json();
// };