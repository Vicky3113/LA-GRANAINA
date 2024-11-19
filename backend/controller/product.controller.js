const { Product } = require("../model/product.model");

async function getAll(req, res) {
  try {
    const { page = 1, limit = 10 } = req.query; // Soporte para paginación
    const productInfo = await Product.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .populate("sellerId", "name username"); // Obtén la información básica del vendedor
    res.status(200).json(productInfo);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function get(req, res) {
  try {
    const { product } = req.params;

    if (!product) {
      res.status(400).json({ error: "Product identifier is required" });
      return;
    }

    const productInfo = await Product.findOne({ URLName: product }).populate(
      "sellerId",
      "name username"
    );

    if (!productInfo) {
      res.status(404).json({ error: "Product not found" });
      return;
    }

    const response = {
      ...productInfo._doc,
      sellerInfo: productInfo.sellerId, // Ya viene poblado con `name` y `username`
    };

    res.status(200).json(response);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Nuevo endpoint: Crear productos
async function create(req, res) {
  try {
    const { name, description, price, sellerId, URLName } = req.body;

    // Validar los datos obligatorios
    if (!name || !description || !price || !sellerId || !URLName) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    // Crear un nuevo producto en la base de datos
    const newProduct = new Product({
      name,
      description,
      price,
      sellerId,
      URLName,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { getAll, get, create };

