import { useEffect, useState } from "react";
import { agregarAlumno, actualizarAlumno } from "../../Functions/Logic";
import { useAlumnos } from "../../context/AlumnosContext";
import './../../styles/Formulario.css';

export const Formulario = () => {
    const { triggerRefresh, alumnoSeleccionado, setAlumnoSeleccionado } = useAlumnos();

    const [formData, setFormData] = useState({
        nombre: "",
        edad: "",
        carrera: "",
        cuatrimestre: ""
    });

    // Cargar los datos cuando se selecciona un alumno
    useEffect(() => {
        if (alumnoSeleccionado) {
            setFormData({
                id: alumnoSeleccionado.id,
                nombre: alumnoSeleccionado.nombre || "",
                edad: alumnoSeleccionado.edad || "",
                carrera: alumnoSeleccionado.carrera || "",
                cuatrimestre: alumnoSeleccionado.cuatrimestre || ""
            });
        } else {
            setFormData({ nombre: "", edad: "", carrera: "", cuatrimestre: "" });
        }
    }, [alumnoSeleccionado]);

    // ✅ Convertir edad a entero si es el campo "edad"
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === "edad" ? parseInt(value, 10) || "" : value
        });
    };

    const enviarInfo = async (event) => {
        event.preventDefault();

        if (alumnoSeleccionado) {
            // 🧩 Modo editar
            const resultado = await actualizarAlumno(alumnoSeleccionado.id, formData);
            if (resultado.success) {
                alert("Alumno actualizado correctamente");
                triggerRefresh();
                setAlumnoSeleccionado(null);
            } else {
                alert("Error al actualizar el alumno: " + resultado.error);
            }
        } else {
            // ➕ Modo agregar
            const resultado = await agregarAlumno(formData);
            if (resultado.success) {
                alert("Alumno agregado correctamente");
                setFormData({ nombre: "", edad: "", carrera: "", cuatrimestre: "" });
                triggerRefresh();
            } else {
                alert("Error al agregar el alumno: " + resultado.error);
            }
        }
    };

    return (
        <div className="seccion-formulario">
            <form className="formulario-alumno" onSubmit={enviarInfo}>
                <input
                    name="nombre"
                    type="text"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                <input
                    name="edad"
                    type="number"
                    placeholder="Edad"
                    value={formData.edad}
                    onChange={handleChange}
                    required
                />
                <input
                    name="carrera"
                    type="text"
                    placeholder="Carrera"
                    value={formData.carrera}
                    onChange={handleChange}
                    required
                />
                <input
                    name="cuatrimestre"
                    type="text"
                    placeholder="Cuatrimestre"
                    value={formData.cuatrimestre}
                    onChange={handleChange}
                    required
                />

                <div className="btn-style">
                    <button type="submit" className="btn btn-success">
                        {alumnoSeleccionado ? "Actualizar" : "Añadir"}
                    </button>
                    {alumnoSeleccionado && (
                        <button
                            type="button"
                            className="btn btn-delete"
                            onClick={() => setAlumnoSeleccionado(null)}
                        >
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};
