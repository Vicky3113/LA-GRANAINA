import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel() {
  // Array de 17 imágenes en la carpeta public/images
  const slides = [
    "/images/imagen 01.jpg",
    "/images/imagen 02.jpg",
    "/images/imagen 03.jpg",
    "/images/imagen 04.jpg",
    "/images/imagen 05.jpg",
    "/images/imagen 06.jpg",
    "/images/imagen 07.jpg",
    "/images/imagen 08.jpg",
    "/images/imagen 09.jpg",
    "/images/imagen 10.jpg",
    "/images/imagen 11.jpg",
    "/images/imagen 12.jpg",
    "/images/imagen 13.jpg",
    "/images/imagen 14.jpg",
    "/images/imagen 15.jpg",
    "/images/imagen 16.jpg",
    "/images/imagen 17.jpg"
  ];

  const [curr, setCurr] = useState(0);
  const autoSlide = true; // Habilita el desplazamiento automático
  const autoSlideInterval = 3000; // Intervalo de 3 segundos

  // Función para mover al slide anterior
  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  // Función para mover al siguiente slide
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  // Desplazamiento automático entre slides
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative w-full px-10">
      {/* Contenedor de slides */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>

      {/* Botones de navegación */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-3 rounded-full shadow bg-verde-oliva text-white hover:bg-rojo-granate transition-colors"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-3 rounded-full shadow bg-verde-oliva text-white hover:bg-rojo-granate transition-colors"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      {/* Indicadores de posición */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${curr === i ? "bg-verde-oliva" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
