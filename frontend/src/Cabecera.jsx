import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() { 
  return (
    <div className="bg-red-800 py-4 shadow-soft">

      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo con color rojo */}
        <h1 className="text-red-800 text-2xl font-bold">La Granaina</h1>

        <nav>
        <ul className="flex text-gray-300">
        <li className="mr-4 hover:text-red-800 transition-colors">
              <Link to="/">Inicio</Link>
            </li>
            <li className="mr-4 hover:text-rojo-granate transition-colors">
              <a href="#">Acerca de</a>
            </li>
            <li className="mr-4 hover:text-rojo-granate transition-colors">
              <a href="#">Productos</a>
            </li>
            <li className="mr-4 hover:text-rojo-granate transition-colors">
              <a href="#">Contacto</a>
            </li>

            {/* Icono de usuario para iniciar sesión */}
            <li className="mr-4 hover:text-rojo-granate transition-colors">
              <Link to="/login">
              <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-gray-900" />
              </Link>
            </li>

            {/* Icono de carrito */}
            <li className="hover:text-rojo-granate transition-colors">
              <a href="#">
                <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6 text-verde-oliva" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
