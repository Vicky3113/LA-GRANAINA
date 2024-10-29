import React from 'react';

const OtherCards = () => {
  return (
    <div className="container mx-auto mt-8" id="other-cards">
      <div className="row flex flex-wrap justify-center">
        <div className="col-md-4 py-3 m-4 w-11/12 md:w-1/4">
          <a href="#" className="group relative block bg-black">
            <img
              alt=""
              src="./public/images/productos/C3.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Hogar</p>
              <p className="text-xl font-bold text-white sm:text-2xl">Rebajas del 50%</p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                    Descubre todo lo necesario para tu hogar. Contamos con una amplia variedad de productos para ti y el cuidado de tu familia. ¡No te lo pierdas!
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 py-3 m-4 w-11/12 md:w-1/4">
          <a href="#" className="group relative block bg-black">
            <img
              alt=""
              src="./public/images/productos/C1.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Indumentaria</p>
              <p className="text-xl font-bold text-white sm:text-2xl">Rebajas del 50%</p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                  Renueva tu guardarropa con estilo y ahorra un 50% en nuestra última colección de indumentaria. Desde prendas clásicas hasta las últimas tendencias, encuentra el look perfecto para cada ocasión. No pierdas esta oportunidad única de llevarte tus favoritos a mitad de precio. ¡Vístete mejor por menos!
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4 py-3 m-4 w-11/12 md:w-1/4">
          <a href="#" className="group relative block bg-black">
            <img
              alt=""
              src="./public/images/productos/C2.png"
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Electrónica</p>
              <p className="text-xl font-bold text-white sm:text-2xl">Rebajas del 50%</p>
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">
                  Potencia tu vida con las mejores ofertas en tecnología. Aprovecha hasta un 50% de descuento en una amplia selección de productos electrónicos, desde smartphones hasta dispositivos inteligentes para el hogar. Calidad garantizada, innovación al mejor precio. ¡Es el momento perfecto para actualizar tus gadgets y disfrutar de lo último en tecnología!
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OtherCards;
