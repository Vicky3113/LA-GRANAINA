import React from "react";

const Banner = () => {
  return (
    <section className="px-0 py-12 mx-auto max-w-7xl sm:px-4">
      <div className="grid items-center grid-cols-1 gap-10 px-4 py-6 overflow-hidden text-verde-oliva bg-beige-claro border-beige-claro rounded-none card card-body sm:rounded-lg md:px-20 md:grid-cols-5 lg:gap-0">
        <div className="col-span-1 md:col-span-3">
          <h2 className="mb-3 font-serif text-2xl font-semibold leading-tight lg:text-3xl">
            Trabaja con tranquilidad sabiendo que tu tienda online está optimizada al máximo.
          </h2>
          <p className="mb-6 text-sm lg:text-base text-gray-700">
            Suscríbete a nuestro newsletter para recibir las últimas novedades y usa nuestras herramientas de ventas para convertir a los visitantes en clientes de pago.
          </p>
          <a
            href="contacto.php"
            className="w-full text-white shadow-lg bg-verde-oliva hover:bg-rojo-granate focus:outline-none focus:ring-2 focus:ring-verde-oliva focus:ring-opacity-50 rounded-lg px-4 py-2 text-center font-bold text-lg transition duration-300 ease-in-out sm:w-auto"
          >
            Empezar
          </a>
        </div>
        <div className="col-span-1 md:col-span-2 flex justify-center md:justify-end">
          <img
            src="/images/Escritorio-removebg.png" // Asegúrate de que la ruta sea correcta en tu proyecto
            className="w-full max-w-[300px] lg:max-w-[450px] select-none"
            alt="Optimización de tienda online"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

