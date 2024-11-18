const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  URLName: {
    type: String,
    required: [true, "URLName is required"],
    unique: true, // Hacer que sea único para evitar duplicados
  },
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Price cannot be negative"], // Validación adicional
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Relación con la colección de usuarios
    required: [true, "Seller ID is required"],
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = { Product };
