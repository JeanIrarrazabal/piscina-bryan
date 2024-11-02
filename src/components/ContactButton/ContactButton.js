import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 
import './ContactButton.css';

const ContactButton = () => {
  const whatsappNumber = '56972559801'; 

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20saber%20más%20sobre%20sus%20servicios.`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={30} />
      <span className="whatsapp-text">Contáctanos por WhatsApp</span>
    </a>
  );
};

export default ContactButton;
