import React, { useState } from 'react';

const Login = ({ onClose }) => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleToggleMode = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-50">
      <div className="bg-gray-100 rounded-lg p-8 max-w-md w-full relative shadow-lg"> {/* Fondo en beige claro */}
        {/* Botón de cerrar */}
        <button className="absolute top-4 right-4 text-red-800 font-bold" onClick={() => onClose()}>X</button>
        
        {/* Título del formulario */}
        <h2 className="text-sm text-gray-900 mb-8">{isRegistering ? 'Registrar' : 'Iniciar Sesión'}</h2>
        <h3 className="text-sm text-gray-600 mb-8">
          {isRegistering ? 'Ingresa tus datos para registrarte' : 'Ingresa tus credenciales'}
        </h3>

        {/* Formulario */}
        <form className="space-y-4">
          {isRegistering && (
            <div>
              <input
                className="appearance-none block w-full bg-white text-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:border-red-800"
                type="text"
                placeholder="Nombre Completo"
              />
            </div>
          )}
          <input
            className="appearance-none block w-full bg-white text-verde-oliva rounded py-3 px-4 leading-tight focus:outline-none focus:border-rojo-granate"
            type="text"
            placeholder="Usuario"
          />
          <input
            className="appearance-none block w-full bg-white text-verde-oliva rounded py-3 px-4 leading-tight focus:outline-none focus:border-rojo-granate"
            type="password"
            placeholder="Contraseña"
          />
          {isRegistering && (
            <div>
              <input
                className="appearance-none block w-full bg-white text-verde-oliva rounded py-3 px-4 leading-tight focus:outline-none focus:border-rojo-granate"
                type="password"
                placeholder="Confirmar Contraseña"
              />
            </div>
          )}

          {/* Enlace para recuperar contraseña */}
          {!isRegistering && (
            <a href="#" className="text-rojo-granate text-sm block text-right hover:text-verde-oliva transition-colors">
              ¿Olvidaste tu contraseña?
            </a>
          )}

          {/* Botón principal de acción */}
          <button
            className="w-full bg-verde-oliva hover:bg-rojo-granate text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
            type="submit"
          >
            {isRegistering ? 'Registrar' : 'Iniciar Sesión'}
          </button>

          {/* Botón para alternar entre iniciar sesión y registrar */}
          <button
            className="w-full bg-white hover:bg-verde-oliva hover:text-white text-verde-oliva font-bold py-2 px-4 rounded border-2 border-verde-oliva focus:outline-none focus:shadow-outline transition-colors"
            onClick={handleToggleMode}
            type="button"
          >
            {isRegistering ? '¿Ya tienes una cuenta? Inicia Sesión' : '¿No tienes cuenta? Regístrate'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

