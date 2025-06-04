import React, { useEffect, useState } from 'react';
import ProjectDetail from './ProjectDetail';
import '../styles/Dashboard.css';

function ProjectControl() {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [detalleProyecto, setDetalleProyecto] = useState(null);
  const [detalleCargando, setDetalleCargando] = useState(false);

  const cargarProyectos = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://localhost:3001/olap/proyectos');
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

  const cargarDetalleProyecto = async (proyecto) => {
    setDetalleCargando(true);
    try {
      const res = await fetch(`http://localhost:3001/olap/proyectos/${proyecto.CodProyecto}`);
      if (!res.ok) throw new Error('Error al obtener detalle del proyecto');
      const data = await res.json();
      setDetalleProyecto(data);
    } catch (err) {
      console.error(err);
      alert('No se pudo cargar el detalle del proyecto.');
    } finally {
      setDetalleCargando(false);
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

  if (detalleCargando) {
    return <p>Cargando detalle del proyecto...</p>;
  }

  if (detalleProyecto) {
    return (
      <ProjectDetail
        proyecto={detalleProyecto}
        onBack={() => setDetalleProyecto(null)}
      />
    );
  }

  return (
    <div className="section-card">
      <h2 className="page-title">Proyectos</h2>
      <div className="section-actions">
        <button className="btn btn-lg" onClick={cargarProyectos}>🔁 Recargar</button>
      </div>
      {loading && <p>Cargando proyectos...</p>}
      {error && <p className="error-message">⚠️ {error}</p>}
      {!loading && !error && (
        <table className="table-default">
          <thead>
            <tr><th>Nombre</th><th>Inicio</th><th>Fin</th></tr>
          </thead>
          <tbody>
            {proyectos.map((p, i) => (
              <tr key={i} onClick={() => cargarDetalleProyecto(p)}>
                <td>{p.Proyecto}</td>
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
