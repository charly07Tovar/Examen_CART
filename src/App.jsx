import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './Components/Sidebar';
import { Formulario as FormularioAlumnos } from './pages/ModuloAlumnos/Formulario';
import { TablaRegistros as TablaAlumnos } from './pages/ModuloAlumnos/TablaRegistros';
import { FormularioCursos } from './pages/ModuloCursos/FormularioCursos';
import { TablaCursos } from './pages/ModuloCursos/TablaCursos';
import { Login } from './pages/Login/Login';
import { useAuth } from './context/AutenticacionContext';
import PropTypes from 'prop-types';

// Componente para proteger rutas
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Validación de props
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta pública de login */}
        <Route path="/login" element={<Login />} />
        
        {/* Rutas protegidas */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="app-layout">
                <Sidebar />
                <div className='contenedor-principal'>
                  <Routes>
                    {/* Página de alumnos */}
                    <Route
                      path="/alumnos"
                      element={
                        <>
                          <h1 className='titulo-gestion'>Gestión de alumnos</h1>
                          <FormularioAlumnos />
                          <TablaAlumnos />
                        </>
                      }
                    />

                    {/* Página de cursos */}
                    <Route
                      path="/cursos"
                      element={
                        <>
                          <h1 className='titulo-gestion'>Gestión de cursos</h1>
                          <FormularioCursos />
                          <TablaCursos />
                        </>
                      }
                    />

                    {/* Ruta por defecto */}
                    <Route
                      path="/"
                      element={
                        <div className="home-container">
                          <div className="home-card">
                            <div className="home-image-container">
                              <img
                                src="/src/assets/img/dev.png"
                                alt="Campus universitario"
                                className="home-image"
                              />
                            </div>

                            <div className="home-content">
                              <h1 className="titulo-inicio">
                                Bienvenido al Sistema Académico
                              </h1>

                              <p className="home-description">
                                Gestiona tu información académica de manera eficiente y centralizada.
                                Utiliza la barra lateral para acceder a las diferentes secciones del sistema.
                              </p>

                              <div className="features-grid">
                                <div className="feature-card blue">
                                  <div className="feature-icon">📚</div>
                                  <h3 className="feature-title">Gestión Completa</h3>
                                  <p className="feature-description">Administra estudiantes, profesores y materias</p>
                                </div>

                                <div className="feature-card green">
                                  <div className="feature-icon">📊</div>
                                  <h3 className="feature-title">Reportes Detallados</h3>
                                  <p className="feature-description">Visualiza estadísticas y genera informes</p>
                                </div>

                                <div className="feature-card purple">
                                  <div className="feature-icon">⚡</div>
                                  <h3 className="feature-title">Acceso Rápido</h3>
                                  <p className="feature-description">Interfaz intuitiva y fácil de usar</p>
                                </div>
                              </div>

                              <div className="home-footer">
                                <p className="home-tip">
                                  💡 <span className="tip-label">Consejo:</span> Utiliza el menú lateral para navegar entre las diferentes secciones
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                    />
                  </Routes>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;