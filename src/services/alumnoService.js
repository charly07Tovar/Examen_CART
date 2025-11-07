// src/services/AlumnoService.js
import { API_BASE_URL } from "../../Api";

const ALUMNO_ENDPOINT = `/Alumno`;

// Obtener todos los alumnos
export const selectAll = async () => {
    const response = await API_BASE_URL.get(`${ALUMNO_ENDPOINT}/Get`);
    return response.data;
};

// Obtener un alumno por ID
export const selectOne = async (id) => {
    const response = await API_BASE_URL.get(`${ALUMNO_ENDPOINT}/Get/${id}`);
    return response.data;
};

// Agregar un nuevo alumno
export const add = async (alumno) => {
    const response = await API_BASE_URL.post(`${ALUMNO_ENDPOINT}/Add`, alumno);
    return { success: true, data: response.data };
};

// Eliminar un alumno por ID
export const remove = async (id) => {
    const response = await API_BASE_URL.delete(`${ALUMNO_ENDPOINT}/delete/${id}`);
    return response.data;
};

// Actualizar un alumno
export const update = async (id, alumno) => {
    const response = await API_BASE_URL.put(
        `${ALUMNO_ENDPOINT}/Update/${id}`,
        alumno,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response.data;
};

