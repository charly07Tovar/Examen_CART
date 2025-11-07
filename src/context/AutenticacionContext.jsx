import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Creamos el contexto de autenticacion
const AuthContext = createContext();

// Hook de useContext para usar el contexto fácilmente
export const useAuth = () => useContext(AuthContext);

// Provider que envolverá toda la app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  // Sincronizar isAuthenticated cuando cambie el token
  useEffect(() => {
    setIsAuthenticated(!!token);
  }, [token]);

  // Función para iniciar sesión y fetch al backend
  const login = async (email, password) => {
    try {
      const res = await fetch("https://localhost:7253/api/Auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("Credenciales inválidas");
      const data = await res.json();
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setUser({ email });
      setIsAuthenticated(true);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Validación de props
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};