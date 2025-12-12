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
import verificarJWT from "../middlewares/verificarToken.js";

const router = Router();

router
  .route("/")
  .post(
    verificarJWT,
    upload.single("imagenUrl"),
    errorMulter,
    validacionProducto,
    crearProducto
  )
  .get(listarProductos);
router.route("/buscar").get(filtrarProductoNombre);
router
  .route("/:id")
  .delete(verificarJWT, validacionID, eliminarProducto)
  .get(validacionID, obtenerProductoID)
  .put(
    verificarJWT,
    validacionID,
    upload.single("imagenUrl"),
    errorMulter,
    validacionProducto,
    editarProducto
  );

export default router;
