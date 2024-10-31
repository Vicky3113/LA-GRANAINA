import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Header = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [showCategories, setShowCategories] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const categories = [
    "Tecnología",
    "Hogar",
    "Indumentaria",
    
  ];

  return (
    <header className="bg-red-800 text-gray-300 flex py-3 justify-center px-4 shadow-md">
      <div className="max-w-7xl w-full flex justify-between gap-5 items-center h-10">
        
        <div className="flex gap-5">
          {/* Logo con imagen */}
          <Link to="/">
            <img
              src="public/images/imagenes/logo.png"  // Ruta del logo en la carpeta public
              alt="Logo"
              className="h-10 w-auto"  // Tamaño del logo ajustado
            />
          </Link>

          {/* Menú de navegación */}
          <nav className="flex items-center space-x-9">
            <ul className="flex gap-5">
              <li>
              <Link to="/" className="text-white hover:text-yellow-300 transition-colors"
              >
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-yellow-300 transition-colors">Sobre Nosotros </Link>
              </li>
              <li>
                <Link to="/search" className="text-white hover:text-yellow-300 transition-colors">Buscador</Link>
              </li>
              <li>
                <Link to="/promociones" className="text-white hover:text-yellow-300 transition-colors">Promociones</Link>
              </li>
            </ul>
            
            {/* Categorías */}
            <div className="relative">
              <a
                href="#"
                className="text-white hover:text-yellow-300 transition-colors"

                onClick={toggleCategories}
              >
                Categorías
              </a>
              {showCategories && (
                <ul className="absolute mt-2 bg-white text-verde-oliva p-2 rounded-lg shadow-md z-50">
                  {categories.map((category, index) => (
                    <li key={index} className="hover:text-rojo-granate transition-colors">
                      {category}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>
        </div>

        {/* Sección del usuario y carrito */}
        <div className="flex items-center space-x-5 text-nowrap">
          {user ? (
            <div className="flex gap-4 items-center">
              <p>{user.email}</p>
              {user.store ? (
                <Link
                  to="/storepanel"
                  className="bg-verde-oliva text-white px-4 py-2 rounded hover:bg-rojo-granate transition-colors"
                >
                  Mi tienda
                </Link>
              ) : (
                <Link
                  to="/account"
                  className="bg-verde-oliva text-white px-4 py-2 rounded hover:bg-rojo-granate transition-colors"
                >
                  Cuenta
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <>
              {/* Icono de usuario */}
              <Link to="/login">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-white text-lg cursor-pointer hover:text-yellow-300 transition-colors" 
                />
              </Link>
            </>
          )}
          {/* Icono de carrito */}
          <Link to="/cart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-white text-lg cursor-pointer hover:text-yellow-300 transition-colors" 
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

