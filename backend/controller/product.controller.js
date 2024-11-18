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

    // Busca el producto y usa `populate` para obtener la información del vendedor
    const productInfo = await Product.findOne({ URLName: product }).populate(
      "sellerId",
      "name username"
    );

    if (!productInfo) {
      res.status(404).json({ error: "Product not found" });
      return;
    }

    // Construcción del objeto de respuesta con los datos del producto y vendedor
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

module.exports = { getAll, get };

