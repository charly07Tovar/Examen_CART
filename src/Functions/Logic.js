// src/Functions/Logic.js
import { selectAll, remove, add, update } from "../services/alumnoService";

// Obtener todos los alumnos
export const obtenerAlumnosAprobados = async (setAlumnos) => {
  try {
    const data = await selectAll();
    setAlumnos(data);
  } catch (error) {
    console.error("Error al obtener alumnos:", error);
    setAlumnos([]);
  }
};

// Agregar alumno
export const agregarAlumno = async (nuevoAlumno, setAlumnos) => {
  try {
    const result = await add(nuevoAlumno);
    alert("Alumno agregado correctamente");

    if (setAlumnos) obtenerAlumnosAprobados(setAlumnos);

    return { success: true, data: result.data };
  } catch (error) {
    console.error("Error al agregar alumno:", error);
    alert("Error al agregar el alumno");
    return { success: false, error: error.message };
  }
};

// Actualizar alumno
export const actualizarAlumno = async (id, alumno) => {
  try {
    const response = await update(id, alumno);
    return { success: true, data: response };
  } catch (error) {
    console.log("alumno", alumno);
    console.error("Error al actualizar alumno:", error);
    return { success: false, error: error.message };
  }
};

// Eliminar alumno
export const eliminarAlumno = async (idAlumno, setAlumnos) => {
  const confirmar = window.confirm("¿Deseas eliminar este alumno?");
  if (!confirmar) return;

  try {
    await remove(idAlumno);
    alert("Alumno eliminado correctamente");
    obtenerAlumnosAprobados(setAlumnos);
  } catch (error) {
    console.error("Error al eliminar alumno:", error);
    alert("Error al eliminar el alumno");
  }
};
