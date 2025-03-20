import express from "express";
import productRoutes from "./router/product.router";
import "./server/server.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
