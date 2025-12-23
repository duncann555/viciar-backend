import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionLogin = [
  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Email inválido")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres")
    .matches(/[A-Z]/)
    .withMessage("Debe contener al menos una mayúscula")
    .matches(/[a-z]/)
    .withMessage("Debe contener al menos una minúscula")
    .matches(/\d/)
    .withMessage("Debe contener al menos un número")
    .matches(/[@$!%*?&]/)
    .withMessage("Debe contener al menos un carácter especial"),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionLogin;
