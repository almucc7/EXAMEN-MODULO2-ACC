import express from "express"; // Importamos Express 
import { products } from "./mock.js"; // Importamos los productos del mock
import { v4 as uuidv4 } from "uuid"; // Importamos la función que genera UUIDs
const app = express(); // Instanciamos Express
const PORT = 3000; // Definimos el puerto 3000, donde correrá el servidor
app.use(express.json()); // Middleware que permite leer JSON en las peticiones (en el body)
//Obtenemos todos los productos
app.get("/products", (req, res) => {
    res.json(products); // Enviamos los productos como respuesta
});
//Obtenemos un producto por su ID
app.get("/products/:id", (req, res) => {
    const product = products.find((p) => p.id === req.params.id); // Buscamos el producto por su ID
    // Si el producto no existe, mostramos error 404
    if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(product); // Si encontramos el producto, lo devolvemos como respuesta
});
//Creamos un nuevo producto
app.post("/products", (req, res) => {
    const { name, price, stock, is_active } = req.body; // Extraemos los datos del cuerpo de la petición
    // Comprobamos que se envían todos los campos
    if (!name || price === undefined || stock === undefined || is_active === undefined) {
        return res.status(400).json({ message: "Faltan campos requeridos" }); //Si falta algún campo, mostramos error 400
    }
    // Creamos el nuevo producto (la estructura)
    const newProduct = {
        id: uuidv4(),
        name,
        price,
        stock,
        is_active,
        created_at: new Date(),
        updated_at: new Date(),
    };
    products.push(newProduct); // Añadimos el nuevo producto 
    res.status(201).json(newProduct); // Devolvemos el producto creado con código 201 (creado)
});
//Actualizamos un producto a través de su ID
app.patch("/products/:id", (req, res) => {
    const product = products.find((p) => p.id === req.params.id); // Buscamos el producto
    // Si no lo encontramos, mostramos error 404
    if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }
    const { name, price, stock, is_active } = req.body; // Extraemos los campos a actualizar
    // Si los campos existen en la petición, los actualizamos en el producto
    if (name !== undefined)
        product.name = name;
    if (price !== undefined)
        product.price = price;
    if (stock !== undefined)
        product.stock = stock;
    if (is_active !== undefined)
        product.is_active = is_active;
    product.updated_at = new Date(); // Actualizamos la fecha de modificación
    res.json(product); // Devolvemos el producto actualizado
});
// Eliminamos un producto a través de su ID
app.delete("/products/:id", (req, res) => {
    const index = products.findIndex((p) => p.id === req.params.id); // Buscamos la posición del producto en el array
    // Si no existe, mostramos error 404
    if (index === -1) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }
    products.splice(index, 1); // Eliminamos el producto del array
    res.json({ message: "Producto eliminado con éxito" }); // Confirmamos la eliminación
});
// Iniciamos el servidor en el puerto especificado anteriormente(3000)
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
