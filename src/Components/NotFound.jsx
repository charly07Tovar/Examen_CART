import './../styles/NotFound.css';

export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe o ha cambiado de sitio.</p>
        <a href="/" className="back-home">Volver al inicio</a>
      </div>
    </div>
  );
};
