import React from 'react';
import { FiDroplet, FiSettings, FiTool, FiShield } from 'react-icons/fi'; // Importa los íconos que prefieras
import './Services.css'; // Importa estilos personalizados

const Services = () => {
  const services = [
    { 
      name: 'Limpieza y mantenimiento regular', 
      icon: <FiDroplet />, 
      description: 'Nuestro servicio de Limpieza y Mantenimiento Regular de Piscinas está diseñado para mantener tu piscina en óptimas condiciones durante todo el año. Nos encargamos de todas las tareas necesarias para garantizar un agua limpia, clara y segura para nadar.',
      includes: [
        'Limpieza del fondo y paredes de la piscina.',
        'Control y ajuste de niveles químicos de pH y cloro.',
        'Mantenimiento de filtros y sistema de circulación.',
        'Revisión y mantenimiento de equipos como bombas y calentadores.',
      ],
    },
    { 
      name: 'Control de calidad del agua (pH, cloro)', 
      icon: <FiShield />, 
      description: 'Nos aseguramos de que los niveles de pH y cloro estén equilibrados para mantener el agua de la piscina limpia y segura.',
      includes: [
        'Medición de niveles de pH y cloro.',
        'Ajuste de químicos según sea necesario.',
        'Verificación de otros parámetros como alcalinidad y dureza.',
        'Uso de productos seguros y aprobados para el equilibrio químico.',
      ],
    },
    { 
      name: 'Reparación de equipos de filtración', 
      icon: <FiTool />, 
      description: 'Realizamos reparaciones y ajustes en equipos de filtración para que funcionen de manera eficiente y prolonguen su vida útil.',
      includes: [
        'Diagnóstico de problemas en filtros y bombas.',
        'Reparación y reemplazo de piezas defectuosas.',
        'Mantenimiento preventivo para evitar futuros fallos.',
        'Optimización del sistema de filtración para mayor eficiencia.',
      ],
    },
    { 
      name: 'Tratamientos especiales (algas, manchas difíciles)', 
      icon: <FiSettings />, 
      description: 'Tratamos y eliminamos algas y manchas difíciles para mantener tu piscina en óptimas condiciones.',
      includes: [
        'Tratamiento de choque contra algas.',
        'Eliminación de manchas en paredes y fondo de la piscina.',
        'Aplicación de productos específicos para problemas complejos.',
        'Prevención de futuras infestaciones de algas.',
      ],
    },
  ];

  return (
    <section>
      <h2>Servicios</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            {service.includes && (
              <ul className="service-includes">
                {service.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

