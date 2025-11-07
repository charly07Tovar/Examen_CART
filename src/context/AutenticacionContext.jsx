import { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Reducer para manejar el estado de autenticación
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: !!action.payload.token,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const initialState = {
    user: null,
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!localStorage.getItem("token"),
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (state.token) {
      const userInfo = decodeToken(state.token);
      dispatch({ type: "SET_TOKEN", payload: { token: state.token, user: userInfo } });
    }
  }, [state.token]);

  const login = async (email, password) => {
    try {
      const res = await fetch("https://localhost:7253/api/Auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("Credenciales inválidas");
      const data = await res.json();
      const userInfo = { email };
      dispatch({ type: "LOGIN", payload: { token: data.token, user: userInfo } });
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      return {
        email: decoded.email || decoded.unique_name || decoded.sub || "No definido",
        role: decoded.role || decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || "Usuario",
      };
    } catch (err) {
      console.error("Error al decodificar token:", err);
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
