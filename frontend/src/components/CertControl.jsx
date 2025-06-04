import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css';

function CertControl() {
  const [certs, setCerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cargarCerts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://localhost:3001/certificaciones');
      if (!res.ok) throw new Error('Error al obtener certificaciones');
      const data = await res.json();

      if (!Array.isArray(data)) throw new Error('Formato de datos incorrecto');

      setCerts(data);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarCerts();
  }, []);

  return (
    <div className="cert-control">
      <h2>Certificaciones</h2>
      <button onClick={cargarCerts}>🔁 Recargar</button>
      {loading && <p>Cargando certificaciones...</p>}
      {error && <p className="error-message">⚠️ {error}</p>}
      {!loading && !error && (
        <table className="employee-table">
          <thead>
            <tr><th>Nombre</th><th>Institución</th><th>Fecha</th></tr>
          </thead>
          <tbody>
            {certs.map((c, i) => (
              <tr key={i}>
                <td>{c.NombreCertificacion}</td>
                <td>{c.Institucion}</td>
                <td>{c.Fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CertControl;
