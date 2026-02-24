const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCandidateByEmail = async (email) => {
  const response = await fetch(`${BASE_URL}/api/candidate/get-by-email?email=${encodeURIComponent(email)}`);
  return response.json();
};

export const getListJobs = async () => {
  const response = await fetch(`${BASE_URL}/api/jobs/get-list`);
  return response.json();
};




