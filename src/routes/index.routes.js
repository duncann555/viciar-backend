import { Router } from "express";
import productosRoutes from "./productos.routes.js";
import pedidosRoutes from "./pedidos.routes.js";


const router = Router();

router.use("/productos", productosRoutes);
router.use("/pedidos", pedidosRoutes);


export default router;
