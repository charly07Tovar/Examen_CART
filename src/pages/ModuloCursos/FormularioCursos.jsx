import { agregarCurso } from "../../Functions/LogicCurso";
import './../../styles/FormularioCursos.css';

// Función con argumento
const enviarInfo = (event) => {
    event.preventDefault();

    const cursoAgregado = {
        nombre: event.target.nombre.value,
        clave: event.target.clave.value,
        profesor: event.target.profesor.value,
        grupo: event.target.grupo.value,
        carrera: event.target.carrera.value
    };

    agregarCurso(cursoAgregado);
    event.target.reset();

    console.log(`Curso agregado: ${cursoAgregado.nombre}`);
};

export const FormularioCursos = () => {
    return (
        <div className='seccion-formulario'>
            <form className='formulario-curso' onSubmit={enviarInfo}>

                <input id="nombre" name='nombre' type='text' placeholder='Nombre del curso' required />
                <input id="clave" name='clave' type='text' placeholder='Clave del curso' required />
                <input id="profesor" name='profesor' type='text' placeholder='Profesor asignado' required />
                <input id="grupo" name='grupo' type='text' placeholder='Grupo' required />
                <input id="carrera" name='carrera' type='text' placeholder='Carrera' required />

                <div className='btn-style'>
                    <button type='submit' className="btn btn-success">Añadir curso</button>
                </div>

            </form>
        </div>
    );
};
