import axios from "axios";

// Crear una instancia de Axios con la url base de la api del backend
export const api = axios.create({
  baseURL: "https://localhost:7253/api",
});
