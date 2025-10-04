import { agregarAlumno } from "../Functions/Logic";

// Funcion con argumento
const enviarInfo = (event) => {
    event.preventDefault();

    const alumnoAgregado = {
        nombre: event.target.nombre.value,
        edad: parseInt(event.target.edad.value),
        materia: event.target.materia.value,
        grupo: event.target.grupo.value,
        carrera: event.target.carrera.value
    }

    agregarAlumno(alumnoAgregado);
    event.target.reset();

    console.log(event.target.nombre.value);
}

export const Formulario = () => {
    return (
        <div className='seccion-formulario'>
            <form className='formulario-alumno' onSubmit={enviarInfo} >

                <input id="nombre" name='nombre' type='text' placeholder='Nombre' />
                <input id="edad" name='edad' type='number' placeholder='Edad' />
                <input id="materia" name='materia' type="text" placeholder='Materia' />
                <input id="grupo" name='grupo' type="text" placeholder='Grupo' />
                <input id="carrera" name='carrera' type="text" placeholder='Carrera' />

                <div className='btn-style'>
                    <button type='submit' className="btn btn-success">Añadir</button>
                </div>

            </form>
        </div>
    )
}