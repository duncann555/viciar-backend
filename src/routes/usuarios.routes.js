import { Router } from "express";
import {
  crearUsuario,
  listarUsuarios,
  login,
} from "../controllers/usuarios.controllers.js";
import validacionUsuarios from "../middlewares/validacionUsuarios.js";

const router = Router();

router.route("/").post(validacionUsuarios, crearUsuario).get(listarUsuarios);
router.route("/login").post(login);

export default router;
