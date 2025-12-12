import { Router } from "express";
import {
  crearPedido,
  listarPedidos,
  obtenerPedidoID,
  actualizarEstadoPedido,
  eliminarPedido,
} from "../controllers/pedidos.controllers.js";
import validacionPedido from "../middlewares/validacionPedido.js";
import validacionCambioEstado from "../middlewares/validacionCambioEstado.js";
import verificarJWT from "../middlewares/verificarToken.js";
import { EsAdmin } from "../middlewares/verificarRoles.js";

const router = Router();

router
  .route("/")
  .post(verificarJWT, validacionPedido, crearPedido)
  .get(listarPedidos);

router
  .route("/:id")
  .get(verificarJWT, EsAdmin, obtenerPedidoID)
  .put(verificarJWT, EsAdmin, validacionCambioEstado, actualizarEstadoPedido)
  .delete(verificarJWT, EsAdmin, eliminarPedido);

export default router;
