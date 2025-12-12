import { Router } from "express";
import {
  crearPedido,
  listarPedidos,
  obtenerPedidoID,
  actualizarEstadoPedido,
  eliminarPedido,
} from "../controllers/pedidos.controllers.js";
import validacionPedido from "../middlewares/validacionPedido.js";

const router = Router();

router.route("/").post(validacionPedido, crearPedido).get(listarPedidos);

router
  .route("/:id")
  .get(obtenerPedidoID)
  .put(actualizarEstadoPedido)
  .delete(eliminarPedido);

export default router;
