import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-overlay">
        <div className="home-content">
          <h1>Bienvenidos a Limpieza de Piscinas</h1>
          <p className="intro-text">
            Somos expertos en el mantenimiento y limpieza de piscinas. Ofrecemos servicios completos para mantener tu piscina limpia, segura y en óptimas condiciones.
          </p>
          <Link to="/services" className="cta-button">Descubre nuestros servicios</Link>
        </div>
      </div>

      <div className="benefits-section">
        <div className="benefit">
          <h2>Calidad de Agua Garantizada</h2>
          <p>Realizamos pruebas periódicas para mantener los niveles de pH y cloro adecuados, asegurando agua cristalina y segura.</p>
        </div>
        <div className="benefit">
          <h2>Reparación de Equipos</h2>
          <p>Nos encargamos de la reparación y mantenimiento de todos los equipos esenciales para tu piscina, prolongando su vida útil.</p>
        </div>
        <div className="benefit">
          <h2>Tratamientos Especiales</h2>
          <p>Eliminamos algas y tratamos manchas difíciles con métodos seguros y efectivos para mantener tu piscina en condiciones óptimas.</p>
        </div>
      </div>

      <div className="testimonial-section">
        <h2>¿Por qué elegirnos?</h2>
        <p>Con años de experiencia y un equipo altamente calificado, brindamos servicios de alta calidad que garantizan la satisfacción de nuestros clientes. Permítenos cuidar de tu piscina para que solo te preocupes de disfrutarla.</p>
        <a
              href="https://wa.me/56972559801?text=Hola,%20quiero%20saber%20más%20sobre%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Contáctanos hoy
            </a>
      </div>
    </section>
  );
};

export default Home;
