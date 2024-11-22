import React from 'react';

const GoodHero = () => {
  return (
    <section className="relative px-4 py-24 mx-auto max-w-7xl">

      {/* Contenedor de la imagen de fondo */}
      <div className="relative h-screen">
        <img
          alt="Un salón"
          src="https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHNhbG9ufGVufDB8fDB8fHww" 
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Texto sobre la imagen */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-6xl font-bold bg-black p-4 rounded-md">
          Granada Edición Limitada
        </h2>
      </div>

      {/* Botón de acción */}
      <div className="absolute inset-0 flex items-center justify-center mt-60">
        <a href="https://www.ejemplo.com" className="text-black hover:text-gray-500">
          <h2 className="text-6xl font-bold bg-white p-4 rounded-md">
            Haz tu pedido
          </h2>
        </a>
      </div>

    </section>
  );
};

export default GoodHero;



