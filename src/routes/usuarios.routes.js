import { Router } from "express";
import {
  crearUsuario,
  listarUsuarios,
  login,
} from "../controllers/usuarios.controllers.js";
import validacionUsuarios from "../middlewares/validacionUsuarios.js";
import validacionLogin from "../middlewares/validacionLogin.js";
import verificarJWT from "../middlewares/verificarToken.js";
import { EsAdmin } from "../middlewares/verificarRoles.js";

const router = Router();

router
  .route("/")
  .post(validacionUsuarios, crearUsuario)
  .get(verificarJWT, EsAdmin, listarUsuarios);
router.route("/login").post(validacionLogin, login);

export default router;
