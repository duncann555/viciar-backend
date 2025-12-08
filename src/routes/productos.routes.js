import { Router } from "express";
import {
  crearProducto,
  editarProducto,
  eliminarProducto,
  listarProductos,
  obtenerProductoID,
} from "../controllers/productos.controllers.js";
import upload from "../helpers/upload.js";
import errorMulter from "../middlewares/ErrorMulter.js";

const router = Router();

router
  .route("/")
  .post(upload.single("imagenUrl"), errorMulter, crearProducto)
  .get(listarProductos);
router
  .route("/:id")
  .delete(eliminarProducto)
  .get(obtenerProductoID)
  .put(editarProducto);

export default router;
