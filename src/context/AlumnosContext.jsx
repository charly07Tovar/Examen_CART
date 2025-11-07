import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AlumnosContext = createContext();

export const useAlumnos = () => useContext(AlumnosContext);

export const AlumnosProvider = ({ children }) => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  const triggerRefresh = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <AlumnosContext.Provider value={{ refreshTrigger, triggerRefresh, alumnoSeleccionado, setAlumnoSeleccionado }}>
      {children}
    </AlumnosContext.Provider>
  );
};

AlumnosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};