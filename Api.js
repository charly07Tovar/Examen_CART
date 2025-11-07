import axios from "axios";

// Crear una instancia de Axios con la url base de la api del backend
export const API_BASE_URL = axios.create({
  baseURL: "https://localhost:7253/api",
});
