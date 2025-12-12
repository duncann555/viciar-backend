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
import { EsAdmin } from "../middlewares/verificarRoles.js";

const router = Router();

router
  .route("/")
  .post(
    verificarJWT,
    EsAdmin,
    upload.single("imagenUrl"),
    errorMulter,
    validacionProducto,
    crearProducto
  )
  .get(listarProductos);
router.route("/buscar").get(filtrarProductoNombre);
router
  .route("/:id")
  .delete(verificarJWT, EsAdmin, validacionID, eliminarProducto)
  .get(validacionID, obtenerProductoID)
  .put(
    verificarJWT,
    EsAdmin,
    validacionID,
    upload.single("imagenUrl"),
    errorMulter,
    validacionProducto,
    editarProducto
  );

export default router;
