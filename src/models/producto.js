import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema(
  {
    nombre: {
      type: String,
      minLength: 3,
      maxLength: 100,
      unique: true,
    },
    categoria: {
      type: String,
      required: true,
      enum: {
        values: [
          "Juegos de PC",
          "Juegos de PlayStation",
          "Juegos de Xbox",
          "Juegos de Nintendo",
          "Accesorios",
          "Consolas",
        ],
      },
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    descripcion: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 250,
    },
    ultimoControl: {
      type: Date,
      default: Date.now,
    },
    precio: {
      type: Number,
      required: true,
      min: 100,
      max: 1000000,
    },
    imagenUrl: {
      type: String,
      required: true,
      validate: {
        validator: (valor) => {
          return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(
            valor
          );
        },
      },
    },
    estado: {
      type: String,
      required: true,
      enum: ["Activo", "Inactivo"],
      default: "Activo",
    },
  },
  {
    timestamps: true,
  }
);

const Producto = mongoose.model("producto", productoSchema);

export default Producto;