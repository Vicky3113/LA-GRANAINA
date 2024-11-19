// Cargar las variables de entorno desde el archivo .env
require("dotenv").config();

// Importar módulos necesarios
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

// Crear una instancia de Express
const app = express();

// Definir el puerto en el que correrá el servidor
const port = process.env.PORT || 5000;

// Configurar middlewares
app.use(helmet()); // Seguridad HTTP
app.use(express.json()); // Parsear JSON
app.use(express.urlencoded({ extended: true })); // Parsear URL-encoded data
app.use(cors()); // Habilitar CORS
app.disable("x-powered-by"); // Ocultar información de Express

// Obtener las variables de entorno para la conexión a MongoDB
const mongoURI = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB;

// Construir la cadena de conexión completa
const connectionString = `${mongoURI}/${dbName}`;

// Opciones de conexión para Mongoose
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Conectar a MongoDB usando Mongoose
mongoose
  .connect(process.env.MONGO_URI, { dbName: process.env.MONGO_DB })
  .then(() => {
    console.log("Conectado a MongoDB exitosamente.");

    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1); // Salir del proceso si la conexión falla
  });

// Importar rutas
const productRoutes = require("./routes/product");
const storeProductsRoutes = require("./routes/storeProducts");
const storeAccountRoutes = require("./routes/storeAccount");
const storePurchasesRoutes = require("./routes/storePurchases");
const userRoutes = require("./routes/user");
const searchRoutes = require("./routes/search");
const paymentRoutes = require("./routes/payment");

// Usar las rutas importadas
app.use("/api/products", productRoutes);
app.use("/api/storepanel/products", storeProductsRoutes);
app.use("/api/storepanel/account", storeAccountRoutes);
app.use("/api/storepanel/purchases", storePurchasesRoutes);
app.use("/api/users", userRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/payment", paymentRoutes);


app.use((req, res, next) => {
  res.status(404).json({ error: "Página no encontrada" });
});

// Manejo de errores generales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});
