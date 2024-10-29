import React from 'react';

const GoodHero = () => {
  return (
    <section className="px-4 py-24 mx-auto max-w-7xl bg-degrade-beige"> {/* Fondo beige claro agregado */}
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        {/* Título principal con toques de verde oliva */}
        <h1 className="mb-6 text-4xl font-bold leading-none tracking-tight text-gray-700 md:text-6xl">
          Descubre la <span className="block w-full text-rojo-granate lg:inline">tecnología y cultura</span> de Granada en un solo lugar
        </h1>

        {/* Texto descriptivo */}
        <p className="mb-6 text-lg text-text-gray-325 md:text-xl lg:px-24">
          Encuentra productos de tecnología, hogar y mucho más con un toque local y auténtico desde nuestra tierra.
        </p>

        {/* Botones principales */}
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
          {/* Primer botón: CTA principal en verde oliva */}
          <a
            className="inline-flex items-center justify-center w-full mb-2 border-2 border-gray-900 rounded-lg bg-gray-900 text-gray-300 hover:bg-red-700 hover:border-red-700 transition-colors px-6 py-3 text-lg sm:w-auto sm:mb-0"
            href="#"
          >
            Explorar Ahora
            <svg
              className="w-5 h-5 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* Segundo botón: CTA secundaria en blanco y verde oliva */}
          <a
            className="inline-flex items-center justify-center w-full mb-2 border-2 border-gray-900 rounded-lg bg-gray-900 text-gray-300 hover:bg-red-700 hover:border-red-700 transition-colors px-6 py-3 text-lg sm:w-auto sm:mb-0"
            href="#"
          >
            Conocer Más
            <svg
              className="w-5 h-5 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoodHero;


