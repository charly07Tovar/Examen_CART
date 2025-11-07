import { obtenerAlumnosAprobados, eliminarAlumno } from "../../Functions/Logic"

// utilizamos una funcion para mostrar los registros de la tabla
export const TablaRegistros = () => {
    return (
        <div className="table tabla-registro">
        <h2>Registro de alumnos</h2>
        <table>
          <thead>
            <tr className='table-info info'>
              <th scope='row'>Nombre</th>
              <th scope='row'>Edad</th>
              <th scope='row'>Materia</th>
              <th scope='row'>Grupo</th>
              <th scope='row'>Carrera</th>
              <th scope='row'>Acciones</th>
            </tr>
          </thead>
          <tbody id='cuerpo-tabla' >
            {obtenerAlumnosAprobados().map((alumno, index) => {
              return (
                <tr key={index}>
                  <td>{alumno.nombre}</td>
                  <td>{alumno.edad}</td>
                  <td>{alumno.materia}</td>
                  <td>{alumno.grupo}</td>
                  <td>{alumno.carrera}</td>
                  <td><button className="btnEliminar" id='btnEliminar' onClick={() => eliminarAlumno(index)}>Eliminar</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
}