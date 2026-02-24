const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Manejador centralizado de respuestas para peticiones fetch.
 * Normaliza las respuestas exitosas y los errores en un objeto consistente.
 * * @param {Promise<Response>} promise - Promesa de una petición fetch.
 * @returns {Promise<{data: any, error: string|null}>} Objeto con los datos o el mensaje de error.
 */
const handleResponse = async (promise) => {
  try {
    const response = await promise;
    
    if (!response.ok) {
     
      return { data: null, error: `Error ${response.status}: ${response.statusText}` };
    }

    const data = await response.json();
    return { data, error: null };
  } catch (err) {
    
    return { data: null, error: "Error de conexión o red" };
  }
};

/**
 * Obtiene la información del candidato a partir de su dirección de correo electrónico.
 * Se agrego encodeURIComponent para asegurar que el email se envíe correctamente en la URL, evitando problemas con caracteres extraños.
 * @param {string} email - El email del candidato.
 * @returns {Promise<{data: any, error: string|null}>} Los datos del candidato  o un error, segun sea el caso de exito.
 */
export const fetchCandidateByEmail = async (email) => {
  const response = await fetch(`${BASE_URL}/api/candidate/get-by-email?email=${encodeURIComponent(email)}`);
  return handleResponse(response);
};


/**
 * Obtiene la lista para obtener las posiciones disponibles.
 * @param () - No requiere parámetros.
 * @returns {Promise<{data: Array|null, error: string|null}>} Una lista de objetos de posiciones o el error correspondiente.
 */
export const getListJobs = async () => {
  const response = await fetch(`${BASE_URL}/api/jobs/get-list`);
  return handleResponse(response);
};

/**
 * Envía la postulación del candidato a una posicion específica.
 * @param {Object} submitData - Objeto con la información de postulación.
 * @param {string} submitData.uuid - Identificador único del candidato.
 * @param {number|string} submitData.jobId - ID de la posición a la que aplica.
 * @param {number|string} submitData.candidateId - ID del candidato.
 * @param {string} submitData.repoUrl - URL del repositorio de GitHub con la solución.
 * @returns {Promise<{data: any, error: string|null}>} Confirmación de la postulación o error.
 */

export const submitApplication = async (submitData) => {
  
 const response= await  fetch(`${BASE_URL}/api/candidate/apply-to-job`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    })
  return handleResponse(response);
  
};




