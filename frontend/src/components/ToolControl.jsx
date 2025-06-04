import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css';

function ToolControl() {
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cargarHerramientas = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://localhost:3001/herramientas');
      if (!res.ok) throw new Error('Error al obtener herramientas');
      const data = await res.json();

      if (!Array.isArray(data)) throw new Error('Formato de datos incorrecto');

      setTools(data);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarHerramientas();
  }, []);

  return (
    <div className="tool-control">
      <h2>Herramientas</h2>
      <button onClick={cargarHerramientas}>🔁 Recargar</button>
      {loading && <p>Cargando herramientas...</p>}
      {error && <p className="error-message">⚠️ {error}</p>}
      {!loading && !error && (
        <table className="employee-table">
          <thead>
            <tr><th>Nombre</th><th>Tipo</th><th>Estado</th></tr>
          </thead>
          <tbody>
            {tools.map((tool, i) => (
              <tr key={i}>
                <td>{tool.Nombre}</td>
                <td>{tool.Tipo}</td>
                <td>{tool.Estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ToolControl;
