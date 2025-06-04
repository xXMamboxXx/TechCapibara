import React from 'react';
import '../styles/Dashboard.css';

function ProjectDetail({ proyecto, onBack }) {
  const formatearFecha = (fechaISO) => {
    if (!fechaISO) return 'Sin fecha';
    const fecha = new Date(fechaISO);
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(fecha);
  };

  return (
    <div className="project-detail">
      <button className="btn btn-sm" onClick={onBack}>🔙 Volver a la lista</button>
      <section className="project-header">
        <div className="project-badge">
          <h2 className="project-title">📁 {proyecto.Proyecto}</h2>
          <span className={`estado-badge ${proyecto.Estado.toLowerCase()}`}>
            {proyecto.Estado}
          </span>
        </div>
        <p className="project-subtitle">Resumen del proyecto actual. Consulta los detalles a continuación.</p>
      </section>

      <div className="project-dual-row">
        <section className="project-card cliente">
          <h3>👤 Cliente</h3>
          <p><strong>Nombre:</strong> {proyecto.Cliente}</p>
          <p><strong>Sector:</strong> {proyecto.Sector}</p>
        </section>

        <section className="project-card empleado">
          <h3>🧑‍💼 Empleado Responsable</h3>
          <p><strong>Nombre:</strong> {proyecto.EmpleadoResponsable}</p>
          <p><strong>Cargo:</strong> {proyecto.Cargo}</p>
          <p><strong>Certificaciones:</strong> {proyecto.NumCertificaciones}</p>
        </section>
      </div>

      <section className="project-service-card">
        <div className="service-header">
          <h3>🛠️ Servicio Principal</h3>
          <span className="service-type">{proyecto.TipoServicio}</span>
        </div>
        <p className="service-name">{proyecto.Servicio}</p>
      </section>

      <section className="project-gantt">
        <h3>📅 Tiempos</h3>
        <div className="gantt-bar-container">
          <div className={`gantt-bar ${proyecto.EntregadoATiempo ? 'on-time' : 'late'}`}
              style={{ width: `${Math.min(proyecto.DuracionDias, 365) / 3.65}%` }}>
            <span className="gantt-label">{proyecto.DuracionDias} días</span>
          </div>
        </div>

        <div className="gantt-dates">
          <span><strong>Inicio:</strong> {formatearFecha(proyecto.FechaInicio)}</span>
          <span><strong>Fin:</strong> {formatearFecha(proyecto.FechaFin)}</span>
          <span><strong>Entregado a tiempo:</strong> {proyecto.EntregadoATiempo ? '✅ Sí' : '❌ No'}</span>
        </div>
      </section>

      <section className="project-tools">
        <h3>🧰 Herramientas Utilizadas</h3>
        <div className="tool-info">
          <div className="tool-primary">
            <p className="tool-label">Herramienta Principal</p>
            <div className="tool-badge">{proyecto.HerramientaPrincipal}</div>
          </div>

          <div className="tool-total">
            <p className="tool-label">Total Usadas</p>
            <div className="tool-counter">
              {proyecto.HerramientasUsadas}
            </div>
          </div>
        </div>
      </section>

      <section className="project-satisfaction">
        <h3>🌟 Nivel de Satisfacción</h3>

        <div className={`satisfaction-display nivel-${proyecto.NivelSatisfaccion}`}>
          <div className="satisfaction-score">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          <div className="satisfaction-level">
            <span className="satisfaction-icon">
              {proyecto.NivelSatisfaccion <= 2 && '😞'}
              {proyecto.NivelSatisfaccion === 3 && '😐'}
              {proyecto.NivelSatisfaccion >= 4 && '😄'}
            </span>
            <span className="satisfaction-text">
              {proyecto.NivelSatisfaccion === 1 && 'Muy baja'}
              {proyecto.NivelSatisfaccion === 2 && 'Baja'}
              {proyecto.NivelSatisfaccion === 3 && 'Aceptable'}
              {proyecto.NivelSatisfaccion === 4 && 'Alta'}
              {proyecto.NivelSatisfaccion === 5 && 'Excelente'}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
