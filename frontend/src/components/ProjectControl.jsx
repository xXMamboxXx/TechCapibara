import React, { useEffect, useState } from 'react';
import ProjectDetail from './ProjectDetail'; // ⬅️ Nuevo componente
import '../styles/Dashboard.css';

function ProjectControl() {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const cargarProyectos = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://localhost:3001/proyectos');
      if (!res.ok) throw new Error('Error al obtener proyectos');
      const data = await res.json();
      if (!Array.isArray(data)) throw new Error('Formato de datos incorrecto');
      setProyectos(data);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const formatearFecha = (fechaISO) => {
    if (!fechaISO) return 'Sin fecha';
    const fecha = new Date(fechaISO);
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(fecha);
  };

  useEffect(() => {
    cargarProyectos();
  }, []);

  if (proyectoSeleccionado) {
    return (
      <ProjectDetail
        proyecto={proyectoSeleccionado}
        onBack={() => setProyectoSeleccionado(null)}
      />
    );
  }

  return (
    <div className="project-control">
      <h2>Proyectos</h2>
      <button onClick={cargarProyectos}>🔁 Recargar</button>
      {loading && <p>Cargando proyectos...</p>}
      {error && <p className="error-message">⚠️ {error}</p>}
      {!loading && !error && (
        <table className="employee-table">
          <thead>
            <tr><th>Nombre</th><th>Inicio</th><th>Fin</th></tr>
          </thead>
          <tbody>
            {proyectos.map((p, i) => (
              <tr key={i} onClick={() => setProyectoSeleccionado(p)}>
                <td>{p.Nombre}</td>
                <td>{formatearFecha(p.FechaInicio)}</td>
                <td>{formatearFecha(p.FechaFin)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProjectControl;
