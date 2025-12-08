import { Router } from "express";
import {
  crearProducto,
  listarProductos,
} from "../controllers/productos.controllers.js";

const router = Router();

router.route("/").post(crearProducto).get(listarProductos);

export default router;
