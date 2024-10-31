// src/COMPONENTES/SectionLink.jsx
import React from 'react';

function SectionLink({ id, title, content, imageURL, className }) {
  return (
    <section id={id} className={`my-8 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      
      {/* Muestra la imagen si se proporciona una URL */}
      {imageURL && (
        <img 
          src={imageURL} 
          alt={title} 
          className="w-full h-auto rounded-lg my-4" 
        />
      )}
      
      <p className="mt-4 text-gray-700">{content}</p>
    </section>
  );
}

export default SectionLink;
