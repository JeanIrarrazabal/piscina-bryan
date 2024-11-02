import React from 'react';
import './Gallery.css';

function Gallery() {
  // Array de URLs de imágenes. Puedes agregar más o cambiarlas.
  const images = [
    'https://i0.wp.com/www.piscineria.com/wp-content/uploads/2022/10/Tendencia-en-Piscinas.jpg?w=1000&ssl=1',
    'https://i0.wp.com/www.piscineria.com/wp-content/uploads/2022/10/Tendencia-en-Piscinas.jpg?w=1000&ssl=1',
    'https://i0.wp.com/www.piscineria.com/wp-content/uploads/2022/10/Tendencia-en-Piscinas.jpg?w=1000&ssl=1',
    'https://i0.wp.com/www.piscineria.com/wp-content/uploads/2022/10/Tendencia-en-Piscinas.jpg?w=1000&ssl=1',
  ];

  return (
    <section className="gallery">
      <h2>Nuestros Trabajos</h2>
      <div className="gallery-grid">
        {images.map((url, index) => (
          <div key={index} className="gallery-item">
            <img src={url} alt={`Trabajo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
