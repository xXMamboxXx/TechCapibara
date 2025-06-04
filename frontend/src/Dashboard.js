import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import EmployeeControl from './components/EmployeeControl'; // otros módulos pueden ir igual
import CertControl from './components/CertControl';
import ProjectControl from './components/ProjectControl';
import ToolControl from './components/ToolControl';
import DashboardMatrix from './components/DashboardMatrix';
import './styles/Dashboard.css';

function Dashboard({ user }) {
  const [activeView, setActiveView] = useState('dashboard');

  useEffect(() => {
    document.title = `Panel de ${user}`;
  }, [user]);

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <>
            <h1>Bienvenido, {user}</h1>
            <p>Este es tu panel de control. Selecciona una opción en el menú lateral.</p>
            <div className="dashboard-widgets">
              <DashboardMatrix />
            </div>
          </>
        );
      case 'empleados':
        return <EmployeeControl />;
      case 'proyectos':
        return <ProjectControl />;
      case 'herramientas':
        return <ToolControl />;
      case 'certificaciones':
        return <CertControl />
      default:
        return <p>Sección no encontrada.</p>;
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar onSelect={setActiveView} />
      <main className="dashboard-main">{renderContent()}</main>
    </div>
  );
}

export default Dashboard;
