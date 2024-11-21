import React from "react";
import Header from "../COMPONENTES/header.jsx";
import { useCart } from "../hooks/useCart.js";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  // Calcular el total del carrito
  const totalPrice = cart.reduce((total, product) => {
    // Asegúrate de que el precio es un número
    const price = parseFloat(product.price.replace("$", ""));
    return total + price * product.quantity;
  }, 0);

  return (
    <div className="App">
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Tu Carrito de Compras</h1>

        {cart.length > 0 ? (
          <>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-4">Producto</th>
                  <th className="border-b p-4">Cantidad</th>
                  <th className="border-b p-4">Precio Unitario</th>
                  <th className="border-b p-4">Total</th>
                  <th className="border-b p-4">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-100">
                    <td className="p-4">
                      <Link
                        to={`/product/${product._id}`}
                        className="text-blue-500 hover:underline"
                      >
                        {product.name}
                      </Link>
                    </td>
                    <td className="p-4">{product.quantity}</td>
                    <td className="p-4">${product.price}</td>
                    <td className="p-4">
                      $
                      {(
                        parseFloat(product.price.replace("$", "")) *
                        product.quantity
                      ).toFixed(2)}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => removeFromCart(product)}
                        className="text-red-500 hover:underline"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center mt-6">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Vaciar Carrito
              </button>
              <div className="text-xl font-semibold">
                Total: ${totalPrice.toFixed(2)}
              </div>
              <Link
                to="/processPayment"
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
              >
                Proceder al Pago
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-lg">No hay productos en el carrito de la compra.</p>
            <Link
              to="/promociones"
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              ¡Explora nuestros productos!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
