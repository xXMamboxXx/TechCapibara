import React from 'react';
import './styles/Dashboard.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">SIG</h2>
      <nav className="sidebar-nav">
        <ul>
          <li>Dashboard</li>
          <li>Empleados</li>
          <li>Proyectos</li>
          <li>Herramientas</li>
          <li>Certificaciones</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
