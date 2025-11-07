const listaCursos = [
    { nombre: "Sistemas Operativos", clave: "SO101", profesor: "Ing. Martínez", grupo: "IDGS1003", carrera: "Ing. Desarrollo de Software" },
    { nombre: "Desarrollo Móvil Integral", clave: "DM202", profesor: "Mtra. López", grupo: "IDGS1001", carrera: "Ing. Desarrollo de Software" },
    { nombre: "Bases de Datos", clave: "BD103", profesor: "Ing. Ramírez", grupo: "IDGS1002", carrera: "Ing. Desarrollo de Software" }
];

export function obtenerCursos() {
    return listaCursos;
}

// simulamos un intervalo de 3 segundos 
export const agregarCurso = (curso) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(curso);
            console.log("Un momento por favor....");
            listaCursos.push(curso);
            console.log(`Curso agregado: ${curso.nombre}`);
            renderizarCursos();
        }, 3000);
    });
}

export function renderizarCursos() {
    const cuerpoTabla = document.getElementById('cuerpo-tabla');
    if (!cuerpoTabla) return;

    cuerpoTabla.innerHTML = listaCursos.map((curso, index) =>
        `<tr key=${index}>
            <td>${curso.nombre}</td>
            <td>${curso.clave}</td>
            <td>${curso.profesor}</td>
            <td>${curso.grupo}</td>
            <td>${curso.carrera}</td>
            <td><button id='btnEliminar' onclick='eliminarCurso(${index})'>Eliminar</button></td>
        </tr>`
    ).join('');
}

export const eliminarCurso = (index) => {
    const nuevaLista = listaCursos.filter((_, i) => i !== index);
    listaCursos.length = 0;
    listaCursos.push(...nuevaLista);
    renderizarCursos();
};

window.eliminarCurso = eliminarCurso;
