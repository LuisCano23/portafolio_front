// portafolio-front/src/services/api.js
import axios from 'axios';

// ✅ Configuración CORRECTA para Vercel + entorno local
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? process.env.REACT_APP_API_URL || 'https://tu-backend-en-vercel.vercel.app'
  : 'http://localhost:5000';


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para manejar errores
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error.response?.data || error.message);
  }
);

// Funciones específicas para referencias
export const referenciasApi = {
  // Obtener todas las referencias
  getReferencias: () => api.get('/api/referencias'),
  
  // Obtener una referencia por ID
  getReferenciaById: (id) => api.get(`/api/referencias/${id}`),
  
  // Crear nueva referencia
  createReferencia: (data) => api.post('/api/referencias', data),
  
  // Verificar salud de la API
  healthCheck: () => api.get('/api/health'),
};

export default referenciasApi;