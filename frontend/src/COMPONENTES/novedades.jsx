import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const CardCarousel = () => {
  const cards = [
    { id: 1, title: 'Sillones salón', content: 'Cómodos y elegantes', description: 'Elegancia y confort para transformar tu sala en un espacio único', imageUrl: 'https://plus.unsplash.com/premium_photo-1674815329488-c4fc6bf4ced8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNhbG9ufGVufDB8fDB8fHww' },
    { id: 2, title: 'Sillas de  jardín', content: 'material de  calidad', description: 'Estilo y durabilidad para disfrutar al aire libre con total comodidad.', imageUrl: 'https://images.unsplash.com/photo-1601654253194-260e0b6984f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNpbGxhcyUyMGRlJTIwamFyZCVDMyVBRG58ZW58MHx8MHx8fDA%3D' },
    { id: 3, title: 'Sombrilla', content: 'Para tardes refrescantes', description: 'Protección y diseño para tus días soleados en el jardín', imageUrl: 'https://images.unsplash.com/photo-1515722517894-80416e393995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29tYnJpbGxhJTIwamFyZCVDMyVBRG58ZW58MHx8MHx8fDA%3Dg' },
    { id: 4, title: 'Ordenador Portátil', content: 'DELL 16GB 1T', description: 'Rendimiento portátil para trabajar, estudiar o divertirte sin límites.', imageUrl: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JkZW5hZG9yJTIwZGVsbHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 5, title: 'Ollas  cocina', content: 'De acero inoxidable', description: 'Cocina con calidad y resistencia de nivel profesional.', imageUrl: 'https://images.unsplash.com/photo-1605433247501-698725862cea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2xsYXMlMjBhY2VybyUyMGlub3hpZGFibGUlMjBjb2NpbmF8ZW58MHx8MHx8fDA%3D' },
    { id: 6, title: 'Teléfono móvil', content: 'Xiami A7', description: 'Tecnología avanzada para mantenerte conectado siempre', imageUrl: 'https://images.unsplash.com/photo-1507955987999-df4864ee80d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVsJUMzJUE5Zm9ubyUyMHhpb21pfGVufDB8fDB8fHww' },
    { id: 7, title: 'Edredones nórdicos', content: 'Alta calidad', description: 'Calidez y suavidad para tus noches más acogedoras.', imageUrl: 'https://plus.unsplash.com/premium_photo-1702531819085-4815383bd175?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWRyZWRvbmVzJTIwJTIwbiVDMyVCM3JkaWNvc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 8, title: 'Sábanas de algodón puro', content: 'Colores  varios', description: 'Sueña en grande con la frescura y comodidad del algodón', imageUrl: 'https://plus.unsplash.com/premium_photo-1702910931866-2642eee270b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWRyZWRvbmVzJTIwJTIwbiVDMyVCM3JkaWNvc3xlbnwwfHwwfHx8MA%3D%3D' },
  ];

  // Función para barajar el array de tarjetas
  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledCards = shuffleCards(cards); // Barajar las tarjetas

  const scrollRef = useRef(null);

  const animateScroll = (scrollContainer, targetScroll, duration) => {
    const initialScroll = scrollContainer.scrollLeft;
    const startTime = performance.now();

    const scrollStep = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const scrollProgress = Math.min(1, elapsedTime / duration);
      const newScroll = initialScroll + (targetScroll - initialScroll) * scrollProgress;
      scrollContainer.scrollLeft = newScroll;

      if (scrollProgress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const targetScroll = scrollContainer.scrollLeft - 200; // Definir el desplazamiento deseado
      const duration = 500; // Duración de la animación en milisegundos
      animateScroll(scrollContainer, targetScroll, duration);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const targetScroll = scrollContainer.scrollLeft + 200; // Definir el desplazamiento deseado
      const duration = 500;                                        // Duración de la animación en milisegundos
      animateScroll(scrollContainer, targetScroll, duration);
    }
  };

  return (
    <div className="relative my-8 p-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-700 relative">NOVEDADES</h2>
      <div className="flex overflow-hidden" ref={scrollRef}>
        {shuffledCards.map(card => (
       <div key={card.id} className="flex-none w-60 bg-white shadow-md mx-6 my-2 rounded-lg p-4">
            <img src={card.imageUrl} alt={card.title} className="w-full h-auto rounded-lg mb-2" />
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.content}</p>
            <p className="text-sm text-gray-500 mt-2">{card.description}</p>
            <button className="bg-blue-500 text-white py-1 px-4 rounded mt-2 hover:bg-blue-600 transition duration-300">
              Ver detalle
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
};

export default CardCarousel;
