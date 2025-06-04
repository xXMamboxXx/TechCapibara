import React from 'react';
import './styles/Dashboard.css';

function Sidebar({ onSelect }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">SIG</h2>
      <nav className="sidebar-nav">
        <ul>
          <li onClick={() => onSelect('dashboard')}>Dashboard</li>
          <li onClick={() => onSelect('empleados')}>Empleados</li>
          <li onClick={() => onSelect('proyectos')}>Proyectos</li>
          <li onClick={() => onSelect('herramientas')}>Herramientas</li>
          <li onClick={() => onSelect('certificaciones')}>Certificaciones</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
