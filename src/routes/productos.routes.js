import { Router } from "express";
import {
  crearProducto,
  editarProducto,
  eliminarProducto,
  listarProductos,
  obtenerProductoID,
} from "../controllers/productos.controllers.js";

const router = Router();

router.route("/").post(crearProducto).get(listarProductos);
router
  .route("/:id")
  .delete(eliminarProducto)
  .get(obtenerProductoID)
  .put(editarProducto);

export default router;
