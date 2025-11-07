import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from "../../context/AutenticacionContext";
import '../Login/Login.css'

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const success = await login(email, password);
        if (success) {
            navigate("/");
        } else {
            setError("Correo o contraseña incorrectos");
        }
    };

    return (
        <>
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <h2 className="login-title">Iniciar Sesión</h2>
                        <p className="login-subtitle">Ingresa tus credenciales para continuar</p>
                    </div>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="login-input-group">
                            <label htmlFor="email" className="login-label">
                                Correo electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="tu@ejemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="login-input"
                                required
                            />
                        </div>

                        <div className="login-input-group">
                            <label htmlFor="password" className="login-label">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="login-input"
                                required
                            />
                        </div>

                        <button type="submit" className="login-button">
                            Iniciar sesión
                        </button>
                    </form>

                    {error && (
                        <div className="login-error">
                            <p className="login-error-text">{error}</p>
                        </div>
                    )}

                    <div className="login-footer">
                        <p className="login-footer-text">
                            ¿No tienes una cuenta?{" "}
                            <Link to="/register" className="login-footer-link">
                                Regístrate
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

