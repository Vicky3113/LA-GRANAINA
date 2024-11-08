import React, { useState } from "react";
import { useCart } from "../hooks/useCart";
import DetailsProduct from "../routes/detailsproduct.jsx";

const ProductCard = ({ productInfo }) => {
  const { cart, addToCart, removeOneItemFromCart, removeFromCart } = useCart();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const cartProduct = cart.find((product) => {
    return product._id === productInfo._id;
  });

  const handleAddToCart = () => {
    addToCart(productInfo);
  };

  const handleRemoveOneItemFromCart = () => {
    removeOneItemFromCart(productInfo);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(productInfo);
  };

  const handleOpenDetails = () => {
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg">
      {productInfo.imageUrl ? (
        <img
          src={productInfo.imageUrl}
          alt={productInfo.title}
          className="w-full h-auto max-h-48 rounded-lg mb-2 rounded-t-md"
        />
      ) : (
        <div className="h-48 w-full bg-gray-300 rounded-t-md">
          {productInfo.title}
        </div>
      )}
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-lg font-semibold">{productInfo.name}</h2>
        {cartProduct ? (
          <>
            <div className="flex gap-4 items-center mb-4">
              <button
                className="bg-button-gray-900 text-button-text-white py-1 px-4 rounded hover:bg-gray-700 hover:text-button-text-white transition-colors duration-300 text-center mb-2"
                onClick={handleAddToCart}
              >
                +
              </button>
              {cartProduct.quantity}
              <button
                className="bg-button-gray-900 text-button-text-white py-1 px-4 rounded hover:bg-gray-700 hover:text-button-text-white transition-colors duration-300 text-center disabled:bg-gray-300 mb-2"
                onClick={handleRemoveOneItemFromCart}
                disabled={cartProduct.quantity <= 1}
              >
                -
              </button>
            </div>
            <button
              type="button"
              className="group inline-block rounded-full bg-button-gray-900 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 mb-2"
              onClick={handleRemoveFromCart}
            >
              <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                Eliminar del carrito
              </span>
            </button>
          </>
        ) : (
          <button
            type="button"
            className="group inline-block rounded-full bg-button-gray-900 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 mb-2"
            onClick={handleAddToCart}
          >
            <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
              Añadir al carrito
            </span>
          </button>
        )}
        <a
          className="flex items-center justify-center py-2.5 px-5 me-2 mb-4 text-sm font-medium text-footer-text-gray-900 focus:outline-none bg-white rounded-full border-2 border-button-gray-900 hover:bg-gray-100 hover:text-button-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-100"
          onClick={handleOpenDetails}
          style={{ textDecoration: "none" }}
        >
          Ver detalle
        </a>
      </div>
      <DetailsProduct isOpen={isDetailsOpen} onClose={handleCloseDetails} />
    </div>
  );
};

export default ProductCard;

