import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      minLength: 3,
      maxLength: 50,
    },
    apellido: {
      type: String,
      minLength: 3,
      maxLength: 50,
    },
    dni: {
      type: Number,
      required: true,
    },
    telefono: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (valor) => {
          return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
            valor
          );
        },
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (valor) => {
          return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,64}$/.test(
            valor
          );
        },
      },
    },
    rol: {
      type: String,
      required: true,
      enum: ["Administrador", "Usuario"],
      default: "Usuario",
    },
    estado: {
      type: String,
      required: true,
      enum: ["Activo", "Pendiente", "Suspendido"],
      default: "Activo",
    },
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Producto;
