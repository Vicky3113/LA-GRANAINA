import React from "react";

const ProductCardLoading = () => {
  return (
    <div className="flex flex-col bg-gray-100 rounded-lg h-64">
      {/* Placeholder para la imagen */}
      <div className="h-48 w-full bg-gray-200 rounded-t-md animate-pulse"></div>

      {/* Placeholder para el texto y botón */}
      <div className="flex flex-col gap-2 p-2 animate-pulse">
        <h2 className="h-7 flex items-center gap-1">
          <span className="rounded-full bg-gray-200 w-10 h-4"></span>
          <span className="rounded-full bg-gray-200 w-8 h-4"></span>
          <span className="rounded-full bg-gray-200 w-16 h-4"></span>
        </h2>
        <div className="bg-blue-200 text-white rounded transition duration-300 text-center h-8"></div>
      </div>
    </div>
  );
};

export default ProductCardLoading;

