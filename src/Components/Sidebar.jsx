import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './../styles/Sidebar.css';
import { useAuth } from "../context/AutenticacionContext";

export const Sidebar = () => {
    const { isAuthenticated, logout } = useAuth();
    return (
        <aside className="sidebar">
            {/* Header */}
            <div className="sidebar-header">
                <Link to="/" className="sidebar-logo">
                    <div className="logo-icon">UTL</div>
                    <span className="logo-text">Universidad Tecnológica de León </span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="sidebar-nav">
                {/* Sección Principal */}
                <div className="nav-section">
                    <div className="nav-section-title">Principal</div>

                    <Link to="/alumnos" className="nav-item">
                        <i className="bi bi-people-fill nav-icon"></i>
                        <span className="nav-text">Alumnos</span>
                    </Link>

                    <Link to="/cursos" className="nav-item">
                        <i className="bi bi-book-fill nav-icon"></i>
                        <span className="nav-text">Cursos</span>
                    </Link>
                </div>

                {/* Sección Configuración */}
                <div className="nav-section">
                    <div className="nav-section-title">Sistema</div>

                    <Link to="/configuracion" className="nav-item">
                        <i className="bi bi-gear-fill nav-icon"></i>
                        <span className="nav-text">Configuración</span>
                    </Link>
                </div>
            </nav>

            {/* Footer */}
            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="user-avatar">JD</div>
                    <div className="user-info">
                        <div className="user-name">Juan Pérez</div>
                        <div className="user-role">Administrador</div>
                    </div>
                </div>
            </div>

            {/* Botón de autenticación */}
            {isAuthenticated ? (
                <button onClick={logout} className="logout-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    Cerrar Sesión
                </button>
            ) : (
                <Link to="/login" className="navbar-btn navbar-btn-primary">
                    Iniciar sesión
                </Link>
            )}

        </aside>
    );
};
