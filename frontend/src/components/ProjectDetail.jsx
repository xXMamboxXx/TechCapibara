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
      <button onClick={onBack}>🔙 Volver a la lista</button>
      <h2>Detalles del Proyecto</h2>

      <p><strong>Nombre:</strong> {proyecto.Proyecto}</p>
      <p><strong>Estado:</strong> {proyecto.Estado}</p>

      <h3>Cliente</h3>
      <p><strong>Nombre:</strong> {proyecto.Cliente}</p>
      <p><strong>Sector:</strong> {proyecto.Sector}</p>

      <h3>Responsable</h3>
      <p><strong>Nombre:</strong> {proyecto.EmpleadoResponsable}</p>
      <p><strong>Cargo:</strong> {proyecto.Cargo}</p>
      <p><strong>Certificaciones:</strong> {proyecto.NumCertificaciones}</p>

      <h3>Servicio Principal</h3>
      <p><strong>Nombre:</strong> {proyecto.Servicio}</p>
      <p><strong>Tipo:</strong> {proyecto.TipoServicio}</p>

      <h3>Fechas</h3>
      <p><strong>Inicio:</strong> {formatearFecha(proyecto.FechaInicio)}</p>
      <p><strong>Fin:</strong> {formatearFecha(proyecto.FechaFin)}</p>
      <p><strong>Duración:</strong> {proyecto.DuracionDias} días</p>
      <p><strong>Entregado a tiempo:</strong> {proyecto.EntregadoATiempo ? '✅ Sí' : '❌ No'}</p>

      <h3>Herramientas</h3>
      <p><strong>Principal:</strong> {proyecto.HerramientaPrincipal}</p>
      <p><strong>Total usadas:</strong> {proyecto.HerramientasUsadas}</p>

      <h3>Calificación</h3>
      <p><strong>Nivel de satisfacción:</strong> {proyecto.NivelSatisfaccion}/5</p>
    </div>
  );
}

export default ProjectDetail;
