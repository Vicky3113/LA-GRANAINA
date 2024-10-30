import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Promociones from './routes/Promociones.jsx';


const Promociones = () => {
  const cards = [
    { id: 1, title: 'Oferta 1', content: 'Producto destacado 1', description: 'Descuento especial', imageUrl: '/images/productos/producto1.jpeg' },
    { id: 2, title: 'Oferta 2', content: 'Producto destacado 2', description: 'Descuento especial', imageUrl: '/images/productos/producto2.jpeg' },
    // Añadir más tarjetas según sea necesario
  ];

  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledCards = shuffleCards(cards);
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
      const targetScroll = scrollContainer.scrollLeft - 200;
      const duration = 500;
      animateScroll(scrollContainer, targetScroll, duration);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const targetScroll = scrollContainer.scrollLeft + 200;
      const duration = 500;
      animateScroll(scrollContainer, targetScroll, duration);
    }
  };

  return (
    <div className="relative my-8 p-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-700 relative">Promociones</h2>
      <div className="flex overflow-hidden" ref={scrollRef}>
        {shuffledCards.map(card => (
          <div key={card.id} className="flex-none w-60 bg-white shadow-md mx-6 my-2 rounded-lg p-4">
            <img src={card.imageUrl} alt={card.title} className="w-full h-auto rounded-lg mb-2" />
            <h2 className="text-lg font-semibold mb-2 text-verde-oliva">{card.title}</h2>
            <p className="text-gray-600">{card.content}</p>
            <p className="text-sm text-gray-500 mt-2">{card.description}</p>
            <button className="bg-rojo-granate text-white py-1 px-4 rounded mt-2 hover:bg-verde-oliva transition duration-300">
              Ver detalle
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
};

export default Promociones;
