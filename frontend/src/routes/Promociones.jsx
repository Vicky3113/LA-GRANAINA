import React from "react";
import Header from "../COMPONENTES/header.jsx";
import Footer from "../COMPONENTES/footer.jsx";
import ProductCard from "../COMPONENTES/tarjeta.jsx";

const promocionesProductos = [
  { _id: 1, name: "Ordenador HP", description: "Ordenador de alta gama", price: "$1200", imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60" },
  { _id: 2, name: "Ordenador Dell", description: "Ordenador para el trabajo", price: "$900", imageUrl: "https://plus.unsplash.com/premium_photo-1681666713680-fb39c13070f3?w=500&auto=format&fit=crop&q=60" },
  { _id: 3, name: "Ordenador MacBook Pro", description: "Potente para diseño y desarrollo", price: "$2000", imageUrl: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60" },
  { _id: 4, name: "Samsung Galaxy S21", description: "Teléfono Samsung de última generación", price: "$800", imageUrl: "https://images.unsplash.com/1/macbook-air-all-faded-and-stuff.jpg?w=500&auto=format&fit=crop&q=60" },
  { _id: 5, name: "iPhone 12", description: "Teléfono de Apple con cámara avanzada", price: "$950", imageUrl: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?w=500&auto=format&fit=crop&q=60" },
  { _id: 6, name: "Estantería de Madera", description: "Estantería resistente para el hogar", price: "$150", imageUrl: "https://plus.unsplash.com/premium_photo-1677533380414-9748bd10e27b?w=500&auto=format&fit=crop&q=60" },
  { _id: 7, name: "Estantería Metálica", description: "Ideal para el almacenamiento", price: "$200", imageUrl: "https://images.unsplash.com/photo-1484788032193-83c907055f21?w=500&auto=format&fit=crop&q=60" },
  { _id: 8, name: "Estantería Flotante", description: "Estilo moderno y funcional", price: "$100", imageUrl: "https://images.unsplash.com/photo-1515474002695-ba8d27c5c704?w=500&auto=format&fit=crop&q=60" },
  { _id: 9, name: "Vestido de Fiesta Rojo", description: "Elegante vestido de mujer", price: "$300", imageUrl: "https://plus.unsplash.com/premium_photo-1675186049530-33e9479f0298?w=500&auto=format&fit=crop&q=60" },
  { _id: 10, name: "Vestido de Fiesta Azul", description: "Vestido ideal para eventos", price: "$350", imageUrl: "https://plus.unsplash.com/premium_photo-1724419129324-e196867b4d6d?w=500&auto=format&fit=crop&q=60" },
  { _id: 11, name: "Smoking Hombre", description: "Elegante smoking hombre", price: "$300", imageUrl: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?w=500&auto=format&fit=crop&q=60" },
  { _id: 12, name: "Guantes de cuero", description: "Guantes de cuero auténtico", price: "$350", imageUrl: "https://images.unsplash.com/photo-1483118714900-540cf339fd46?w=500&auto=format&fit=crop&q=60" },
];

const productosGenerales = [
  { _id: 13, name: "Tablet Samsung", description: "Tablet ligera y potente", price: "$400", imageUrl: "https://images.unsplash.com/photo-1522204553393-1f71c9d4296d?w=500&auto=format&fit=crop&q=60" },
  { _id: 14, name: "Monitor LG", description: "Monitor Full HD", price: "$200", imageUrl: "https://images.unsplash.com/photo-1664454217818-11e5baf60205?w=500&auto=format&fit=crop&q=60" },
  { _id: 15, name: "Aspiradora Dyson", description: "Aspiradora de alta potencia", price: "$600", imageUrl: "https://images.unsplash.com/photo-1569698134101-f15cde5cd66c?w=500&auto=format&fit=crop&q=60" },
  { _id: 16, name: "Reloj Inteligente", description: "Reloj inteligente con múltiples funciones", price: "$150", imageUrl: "https://plus.unsplash.com/premium_photo-1712764121254-d9867c694b81?w=500&auto=format&fit=crop&q=60" },
  { _id: 17, name: "Cámara Canon", description: "Cámara profesional para fotografía", price: "$800", imageUrl: "https://images.unsplash.com/photo-1687150509030-754aa9b72d40?w=500&auto=format&fit=crop&q=60" },
  { _id: 18, name: "Silla de Oficina", description: "Silla ergonómica para oficina", price: "$250", imageUrl: "https://images.unsplash.com/photo-1688578735972-b61ec274df7b?w=500&auto=format&fit=crop&q=60" },
  { _id: 19, name: "Zapatos de Hombre", description: "Zapatos formales para hombre", price: "$120", imageUrl: "https://plus.unsplash.com/premium_photo-1670984281009-863453504c52?w=500&auto=format&fit=crop&q=60" },
  { _id: 20, name: "Lámpara LED", description: "Lámpara de escritorio con luz LED", price: "$50", imageUrl: "https://plus.unsplash.com/premium_photo-1677234147181-2510b2c1ea75?w=500&auto=format&fit=crop&q=60" },
];

const Promociones = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Promociones</h1>

        {/* Sección de productos promocionales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-8">
          {promocionesProductos.map((product) => (
            <div className="flex flex-col h-full" key={product._id}>
              <ProductCard
                productInfo={product} // Pasar el objeto completo como prop productInfo
              />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-10 mt-15">Otros Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productosGenerales.map((product) => (
            <div className="flex flex-col h-full" key={product._id}>
              <ProductCard
                productInfo={product} // Pasar el objeto completo como prop productInfo
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Promociones;






