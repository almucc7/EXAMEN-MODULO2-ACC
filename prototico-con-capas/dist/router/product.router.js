import { Router } from "express";
const router = Router();
// Endpoint de prueba
router.get("/", (req, res) => {
    res.send("API de Productos");
});
export default router;
