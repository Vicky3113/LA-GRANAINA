const express = require("express");
const { ensureAuth } = require("../middleware/auth"); // Middleware de autenticación

const router = express.Router();

const productController = require("../controller/product.controller");

// Ruta para obtener todos los productos
router.get("/", productController.getAll);

// Ruta para obtener un producto específico por su identificador
router.get("/:product", productController.get);

// Ruta para crear un nuevo producto (opcionalmente protegida con autenticación)
router.post("/", ensureAuth, productController.create);

module.exports = router;
