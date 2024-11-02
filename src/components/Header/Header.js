import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Limpieza de Piscinas</h1>
      <div className="header-content">
        <h2>Mantenimiento y limpieza profesional para tu piscina</h2>
        <p>Confía en nosotros para el cuidado de tu piscina, brindamos servicios de alta calidad.</p>
      </div>
      <div className="button-section">
        <Link to="/" className="interactive-button">Inicio</Link>
        <Link to="/services" className="interactive-button">Servicios</Link>
        <Link to="/gallery" className="interactive-button">Galería</Link>
      </div>
    </header>
  );
}

export default Header;
