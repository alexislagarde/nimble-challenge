const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const handleResponse = async (promise) => {
  try {
    const response = await promise;
    
    if (!response.ok) {
      // Si la API responde pero con error (404, 500, etc.)
      return { data: null, error: `Error ${response.status}: ${response.statusText}` };
    }

    const data = await response.json();
    return { data, error: null };
  } catch (err) {
    // Si hay un error de red (el servidor no responde)
    return { data: null, error: "Error de conexión o red" };
  }
};

export const fetchCandidateByEmail = async (email) => {
  const response = await fetch(`${BASE_URL}/api/candidate/get-by-email?email=${encodeURIComponent(email)}`);
  return handleResponse(response);
};

export const getListJobs = async () => {
  const response = await fetch(`${BASE_URL}/api/jobs/get-list`);
  return handleResponse(response);
};




