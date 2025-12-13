import { Router } from "express";
import {
  cambiarEstadoUsuario,
  crearUsuario,
  listarUsuarios,
  login,
} from "../controllers/usuarios.controllers.js";
import validacionUsuarios from "../middlewares/validacionUsuarios.js";
import validacionLogin from "../middlewares/validacionLogin.js";
import verificarJWT from "../middlewares/verificarToken.js";
import { EsAdmin } from "../middlewares/verificarRoles.js";
import validarEstadoUsuario from "../middlewares/validarEstadoUsuario.js";

const router = Router();

router
  .route("/")
  .post(validacionUsuarios, crearUsuario)
  .get(verificarJWT, EsAdmin, listarUsuarios);
router
  .route("/:id")
  .patch(verificarJWT, EsAdmin, validarEstadoUsuario, cambiarEstadoUsuario);
router.route("/login").post(validacionLogin, login);

export default router;
