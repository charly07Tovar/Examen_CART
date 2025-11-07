import { obtenerCursos, eliminarCurso } from "../../Functions/LogicCurso";

// Utilizamos una función para mostrar los registros de la tabla
export const TablaCursos = () => {
    return (
        <div className="table tabla-registro">
            <h2>Registro de cursos</h2>
            <table>
                <thead>
                    <tr className='table-info info'>
                        <th scope='row'>Nombre</th>
                        <th scope='row'>Clave</th>
                        <th scope='row'>Profesor</th>
                        <th scope='row'>Grupo</th>
                        <th scope='row'>Carrera</th>
                        <th scope='row'>Acciones</th>
                    </tr>
                </thead>
                <tbody id='cuerpo-tabla'>
                    {obtenerCursos().map((curso, index) => {
                        return (
                            <tr key={index}>
                                <td>{curso.nombre}</td>
                                <td>{curso.clave}</td>
                                <td>{curso.profesor}</td>
                                <td>{curso.grupo}</td>
                                <td>{curso.carrera}</td>
                                <td>
                                    <button
                                        className="btnEliminar"
                                        id='btnEliminar'
                                        onClick={() => eliminarCurso(index)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
