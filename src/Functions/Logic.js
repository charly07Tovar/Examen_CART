const listaAlumnos = [
    { nombre: "Ana", edad: 20, materia: "Sistemas Operativos", grupo: "IDGS1003", carrera: "Ing. Desarrollo de Software" },
    { nombre: "Luis", edad: 22, materia: "Desarrollo móvil integral", grupo: "IDGS1001", carrera: "Ing. Desarrollo de Software" },
    { nombre: "María", edad: 19, materia: "Desarrollo móvil integral", grupo: "IDGS1001", carrera: "Ing. Desarrollo de Software" }];

export function obtenerAlumnosAprobados() {
    return listaAlumnos;
}

// simulamos un intervalo de 2 segundos 
export const agregarAlumno = (alumno) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(alumno);
            console.log("Un momento por favor....")
            listaAlumnos.push(alumno);
            console.log(`Alumno agregado:  ${alumno.nombre}`);
            renderizarAlumnos();
        }, 3000);
    });
}

export function renderizarAlumnos() {
    const cuerpoTabla = document.getElementById('cuerpo-tabla');
    if (!cuerpoTabla) return;

    cuerpoTabla.innerHTML = listaAlumnos.map((alumno, index) =>
        `<tr key=${index}>
            <td>${alumno.nombre}</td>
            <td>${alumno.edad}</td>
            <td>${alumno.materia}</td>
            <td>${alumno.grupo}</td>
            <td>${alumno.carrera}</td>
            <td><button id='btnEliminar' onclick='eliminarAlumno(${index})'>Eliminar</button></td>
        </tr>`).join('');
}

export const eliminarAlumno = (index) => {
    const nuevaLista = listaAlumnos.filter((_, i) => i !== index);
    listaAlumnos.length = 0;
    listaAlumnos.push(...nuevaLista);
    renderizarAlumnos();
};

window.eliminarAlumno = eliminarAlumno;