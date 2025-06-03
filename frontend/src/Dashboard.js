import React from 'react';
import Sidebar from './Sidebar';
import './styles/Dashboard.css';

function Dashboard({ user }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <h1>Bienvenido, {user}</h1>
        <p>Este es tu panel de control. Selecciona una opción en el menú lateral.</p>

        <div className="dashboard-widgets">
          <div className="widget-box">Proyectos activos: 12</div>
          <div className="widget-box">Empleados certificados: 34</div>
          <div className="widget-box">Herramientas en uso: 8</div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
