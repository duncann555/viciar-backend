import { Router } from "express";
import {
  crearProducto,
  editarProducto,
  eliminarProducto,
  filtrarProductoNombre,
  listarProductos,
  obtenerProductoID,
} from "../controllers/productos.controllers.js";
import upload from "../helpers/upload.js";
import errorMulter from "../middlewares/ErrorMulter.js";
import validacionProducto from "../middlewares/validacionProducto.js";
import validacionID from "../middlewares/validacionID.js";

const router = Router();

router
  .route("/")
  .post(
    upload.single("imagenUrl"),
    errorMulter,
    validacionProducto,
    crearProducto
  )
  .get(listarProductos);
router.route("/buscar").get(filtrarProductoNombre);
router
  .route("/:id")
  .delete(validacionID, eliminarProducto)
  .get(validacionID, obtenerProductoID)
  .put(
    validacionID,
    upload.single("imagenUrl"),
    errorMulter,
    validacionProducto,
    editarProducto
  );

export default router;
