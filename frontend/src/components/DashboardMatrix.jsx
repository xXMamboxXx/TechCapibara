import React from 'react';
import '../styles/Dashboard.css';

const matriz = [
  {
    perspectiva: 'Aumentar la rentabilidad',
    objetivos: [
      {
        objetivo: 'Aumentar la rentabilidad',
        indicadores: [
          {
            indicador: 'Utilidad neta',
            valor: 85,
            palanca: 'reducir costos variables',
            accion: 'Implementar programa de reducción de costos',
          },
          {
            indicador: 'Margen de beneficio',
            valor: 40,
            palanca: 'mejorar la gestión de precios',
            accion: 'Realizar análisis de precios de mercado y competitividad',
          },
          {
            indicador: 'Retorno sobre la inversión',
            valor: 75,
            palanca: 'optimizar la gestión de recursos',
            accion: 'Evaluar proyectos y reinvertir en los más rentables',
          },
        ],
      },
    ],
  },
  {
    perspectiva: 'Diversificar fuentes de ingreso',
    objetivos: [
      {
        objetivo: 'Diversificar fuentes de ingreso',
        indicadores: [
          {
            indicador: 'Porcentaje de ingresos de nuevos mercados',
            valor: 84,
            palanca: 'investigar y desarrollar nuevos mercados',
            accion: 'Establecer alianzas estratégicas con empresas emergentes',
          },
          {
            indicador: 'Porcentaje de ingresos de nuevos productos/servicios',
            valor: 70,
            palanca: 'ampliar la línea de productos/servicios',
            accion: 'Estudios de mercado para oportunidades de expansión',
          },
          {
            indicador: 'Índice de concentración de clientes',
            valor: 49,
            palanca: 'diversificar la base de clientes',
            accion: 'Marketing dirigido a segmentos no explotados',
          },
        ],
      },
    ],
  },
  {
    perspectiva: 'Mejorar la eficiencia operativa',
    objetivos: [
      {
        objetivo: 'Mejorar la eficiencia operativa',
        indicadores: [
          {
            indicador: 'Costo de producción por unidad',
            valor: 79,
            palanca: 'optimizar procesos de producción',
            accion: 'Implementar sistema de gestión de la cadena de suministro',
          },
          {
            indicador: 'Índice de rotación de inventario',
            valor: 45,
            palanca: 'mejorar la gestión de inventario',
            accion: 'Técnicas de pronóstico de demanda e inventario',
          },
          {
            indicador: 'Tiempo promedio de ciclo de producción',
            valor: 90,
            palanca: 'reducir el tiempo de ciclo de producción',
            accion: 'Lean Manufacturing para eliminar desperdicios',
          },
        ],
      },
    ],
  },
];

function DashboardMatrix() {
  const getSemaforoColor = (valor) => {
    if (valor < 51) return 'rojo';
    if (valor < 81) return 'amarillo';
    return 'verde';
  };

  return (
    <div className="section-card">
      <h2 className="page-title">Tablero de Control</h2>
      <table className="table-default table-centered">
        <thead>
          <tr>
            <th>Perspectiva</th>
            <th>Objetivo Estratégico</th>
            <th>Indicador</th>
            <th>Valor</th>
            <th>Semáforo</th>
            <th>Palanca</th>
            <th>Acción Estratégica</th>
          </tr>
        </thead>
        <tbody>
          {matriz.map((p, pIndex) =>
            p.objetivos.map((o, oIndex) =>
              o.indicadores.map((i, iIndex) => (
                <tr key={`${pIndex}-${oIndex}-${iIndex}`}>
                  <td>{iIndex === 0 && oIndex === 0 ? p.perspectiva : ''}</td>
                  <td>{iIndex === 0 ? o.objetivo : ''}</td>
                  <td>{i.indicador}</td>
                  <td>{i.valor}%</td>
                  <td>
                    <span className={`semaforo ${getSemaforoColor(i.valor)}`}></span>
                  </td>
                  <td>{i.palanca}</td>
                  <td>{i.accion}</td>
                </tr>
              ))
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardMatrix;
