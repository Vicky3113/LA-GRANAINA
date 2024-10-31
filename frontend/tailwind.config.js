/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-red-800': '#991b1b',      // Fondo principal en rojo oscuro
        'text-gray-300': '#d1d5db',   // Texto principal en gris claro
        'footer-bg-gray-100': '#f3f4f6', // Fondo del footer en gris claro
        'footer-text-gray-900': '#111827', // Texto del footer en gris oscuro
        'button-gray-900': '#1f2937', // Fondo de botones oscuros
        'button-text-white': '#ffffff' // Texto blanco para botones
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Fuente para texto normal
        serif: ['Lora', 'serif'], // Fuente para los títulos
      },
      boxShadow: {
        'soft': '0 4px 10px rgba(0, 0, 0, 0.1)', // Sombra suave para imágenes y botones
      },
      transitionTimingFunction: {
        'in-out-300': 'ease-in-out 0.3s', // Transición suave para hover
      },
      backgroundImage: {
        'degrade-beige': 'linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%)', // Fondo degradado para secciones
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
