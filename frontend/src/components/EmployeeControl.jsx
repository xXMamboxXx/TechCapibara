import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css';

function EmployeeControl() {
  const [empleados, setEmpleados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cargarEmpleados = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('http://localhost:3001/empleados-certificados');
      if (!res.ok) throw new Error('Error al obtener empleados');
      const data = await res.json();

      if (!Array.isArray(data)) throw new Error('Formato de datos incorrecto');

      const agrupados = data.reduce((acc, emp) => {
        const clave = `${emp.Nombre}|${emp.Cargo}`;
        if (!acc[clave]) {
          acc[clave] = { Nombre: emp.Nombre, Cargo: emp.Cargo, Certificaciones: [] };
        }
        if (emp.NombreCertificacion) {
          acc[clave].Certificaciones.push(emp.NombreCertificacion);
        }
        return acc;
      }, {});

      setEmpleados(Object.values(agrupados));
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarEmpleados();
  }, []);

  return (
    <div className="employee-control">
      <h2>Control de Empleados</h2>
      <div className="employee-actions">
        <button onClick={cargarEmpleados}>🔁 Recargar</button>
        <button>➕ Añadir empleado</button>
      </div>

      {loading && <p>Cargando empleados...</p>}
      {error && <p className="error-message">⚠️ {error}</p>}
      {!loading && !error && (
        <table className="employee-table">
          <thead>
            <tr><th>Nombre</th><th>Cargo</th><th>Certificaciones</th></tr>
          </thead>
          <tbody>
            {empleados.map((emp, index) => (
              <tr key={index}>
                <td>{emp.Nombre}</td>
                <td>{emp.Cargo}</td>
                <td>{emp.Certificaciones.length > 0 ? emp.Certificaciones.join(', ') : 'Sin certificación'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeControl;
