import { body } from "express-validator";
import Usuario from "../models/usuario.js";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionEdicionUsuario = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es un dato obligatorio")
    .isLength({ min: 3, max: 50 })
    .withMessage("El nombre debe contener entre 3 y 50 caracteres"),
  body("apellido")
    .notEmpty()
    .withMessage("El apellido es un dato obligatorio")
    .isLength({ min: 3, max: 50 })
    .withMessage("El apellido debe contener entre 3 y 50 caracteres"),
  body("email")
    .notEmpty()
    .withMessage("El email es un dato obligatorio")
    .isEmail()
    .withMessage("El email ingresado no es valido")
    .normalizeEmail()
    .custom(async (valor, { req }) => {
      const id_Usuario = req.params.id;

      const correoExistente = await Usuario.findOne({
        email: valor,
        _id: { $ne: id_Usuario },
      });

      if (correoExistente) {
        throw new Error("El correo ingresado ya existe");
      }
      return true;
    }),
  body("rol")
    .optional()
    .isIn(["Administrador", "Usuario"])
    .withMessage("El rol debe ser 'Administrador' o 'Usuario'"),
  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionEdicionUsuario;
