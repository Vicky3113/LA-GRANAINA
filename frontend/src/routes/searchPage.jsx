import React, { useState, useEffect } from "react";
import Header from "../COMPONENTES/header.jsx";
import Footer from "../COMPONENTES/footer.jsx";
import ProductCard from "../COMPONENTES/tarjeta.jsx";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState(""); // Para seleccionar la categoría
  const [sortOrder, setSortOrder] = useState(""); // Para ordenar productos (por precio, popularidad, etc.)

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/search/?query=${searchTerm}&category=${category}&sort=${sortOrder}`
      );
      const json = await response.json();
      if (response.ok) {
        setProducts(json);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm, category, sortOrder]); // Dependencias para actualizar la búsqueda cuando cambien

  const handleFetch = async (e) => {
    e.preventDefault();
    await fetchData();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App font-sans bg-white text-text-gray-300">
      <Header />
      <div className="container mx-auto p-6 flex flex-col md:flex-row">
        {/* Filtros y Ordenación */}
        <div className="sidebar bg-white text-text-gray-300 p-6 w-full md:w-1/4 shadow-lg rounded-lg mb-6 md:mb-0">
          <h2 className="text-xl font-semibold text-footer-text-gray-900 mb-6">Filtros y Ordenación</h2>
          
          <form className="searchbar mb-4 relative" onSubmit={handleFetch}>
            <input
              className="w-full p-3 pr-12 text-text-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bg-red-800 transition duration-200"
              placeholder="Buscar productos..."
              id="searchBar"
              name="searchBar"
              type="text"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center px-4 bg-button-gray-900 text-button-text-white rounded-r-lg hover:bg-bg-red-800 transition duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l-5-5m5 0l-5 5m5-5V3a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2z"
                ></path>
              </svg>
            </button>
          </form>

          {/* Filtros */}
          <div className="space-y-4">
            <div>
              <label className="block text-footer-text-gray-900 mb-2">Categoría</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bg-red-800 transition duration-200"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="">Seleccionar categoría</option>
                <option value="indumentaria">Indumentaria</option>
                <option value="hogar">Hogar</option>
                <option value="electronica">Electrónica</option>
              </select>
            </div>

            <div>
              <label className="block text-footer-text-gray-900 mb-2">Ordenar por</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bg-red-800 transition duration-200"
                onChange={(e) => setSortOrder(e.target.value)}
                value={sortOrder}
              >
                <option value="">Seleccionar orden</option>
                <option value="price_asc">Precio: Bajo a Alto</option>
                <option value="price_desc">Precio: Alto a Bajo</option>
                <option value="popularity">Popularidad</option>
              </select>
            </div>
          </div>
        </div>

        {/* Resultados de la búsqueda */}
        <div className="w-full md:w-3/4 p-6">
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-footer-text-gray-900">
              Resultados de búsqueda para: <span className="text-bg-red-800">"{searchTerm}"</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
              {products ? (
                products.map((product) => (
                  <ProductCard key={product._id} productInfo={product} />
                ))
              ) : (
                <div className="text-center text-footer-text-gray-900">No se encontraron resultados.</div>
              )}
            </div>
          </div>

      {/* Productos Destacados */}
<div className="mt-12">
  <h2 className="text-2xl font-semibold text-footer-text-gray-900 mb-4">Productos Destacados</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* Producto 1 */}
    <ProductCard 
      key="1" 
      productInfo={{
        name: "Producto 1", 
        price: "20€", 
        image: "https://images.unsplash.com/photo-1523289619259-44358ba02ba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3JkZW5hZG9yZXN8ZW58MHx8MHx8fDA%3D"
      }} 
    />
    {/* Producto 2 */}
    <ProductCard 
      key="2" 
      productInfo={{
        name: "Producto 2", 
        price: "30€", 
        image: "https://plus.unsplash.com/premium_photo-1681302547882-e26efde7f7b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVsZWZvbm9zfGVufDB8fDB8fHww"
      }} 
    />
    {/* Producto 3 */}
    <ProductCard 
      key="3" 
      productInfo={{
        name: "Producto 3", 
        price: "15€", 
        image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kdW1lbnRhcmlhfGVufDB8fDB8fHww"
      }} 
    />
    {/* Producto 4 */}
    <ProductCard 
      key="4" 
      productInfo={{
        name: "Producto 4", 
        price: "50€", 
        image: "https://images.unsplash.com/photo-1575277340591-849c346c4542?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9nYXIlMjBwcm9kdWN0b3N8ZW58MHx8MHx8fDA%3D"
      }} 
    />
  </div>
</div>

  


          {/* Testimonios de Clientes */}
          <div className="testimonials mt-12 mb-16">
            <h2 className="text-2xl font-semibold text-footer-text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="testimonial bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-lg">"Excelente calidad, estoy muy feliz con mi compra!"</p>
                <p className="text-sm text-footer-text-gray-900 mt-2">- Juan Pérez</p>
              </div>
              <div className="testimonial bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-lg">"Servicio rápido y productos de alta calidad. ¡Muy recomendable!"</p>
                <p className="text-sm text-footer-text-gray-900 mt-2">- María López</p>
              </div>
              <div className="testimonial bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-lg">"Me encanta la tienda, siempre encuentro lo que necesito!"</p>
                <p className="text-sm text-footer-text-gray-900 mt-2">- Pablo Sánchez</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Imagen de separación con el footer */}
      <div className="bg-cover bg-center h-40 mb-8" style={{ backgroundImage: 'url("/path/to/granada-image.jpg")' }}></div>

      <Footer />
    </div>
  );
};

export default SearchPage;

