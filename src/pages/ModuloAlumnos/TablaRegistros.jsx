// src/components/TablaRegistros.jsx
import { useEffect, useState } from "react";
import { obtenerAlumnosAprobados, eliminarAlumno } from "../../Functions/Logic";
import { useAlumnos } from "../../context/AlumnosContext";

export const TablaRegistros = () => {
  const [alumnos, setAlumnos] = useState([]);
  const { refreshTrigger, setAlumnoSeleccionado } = useAlumnos();

  const cargarAlumnos = () => {
    obtenerAlumnosAprobados(setAlumnos);
  };

  useEffect(() => {
    cargarAlumnos();
  }, [refreshTrigger]);

  const handleEliminar = async (id) => {
    await eliminarAlumno(id, setAlumnos);
    cargarAlumnos();
  };

  return (
    <div className="table tabla-registro">
      <h2>Registro de alumnos</h2>
      <table>
        <thead>
          <tr className="table-info info">
            <th>Nombre</th>
            <th>Edad</th>
            <th>Carrera</th>
            <th>Cuatrimestre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="cuerpo-tabla">
          {alumnos.length > 0 ? (
            alumnos.map((alumno, index) => (
              <tr key={alumno.idAlumno || `alumno-${index}`}>
                <td>{alumno.nombre}</td>
                <td>{alumno.edad}</td>
                <td>{alumno.carrera}</td>
                <td>{alumno.cuatrimestre}</td>
                <td>
                  <button
                    className="btnEditar"
                    onClick={() => setAlumnoSeleccionado(alumno)}
                  >
                    Editar
                  </button>
                  <button
                    className="btnEliminar"
                    onClick={() =>
                      handleEliminar(alumno.id)
                    }
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No hay alumnos registrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
