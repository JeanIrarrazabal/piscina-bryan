import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Asegúrate de que App está en la ruta correcta
import './index.css'; // Opcional: Estilos globales

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
