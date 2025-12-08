import mongoose, { Schema } from "mongoose";

const detallePedidoSchema = new Schema(
  {
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "usuario",
      required: true,
    },

    dni: {
      type: Number,
      required: true,
    },
    Provincia: {
      type: String,
      required: true,
      enum: ["Buenos Aires", "Cordoba", "Salta", "Tucuman", "Neuquen"],
    },
    Ciudad: {
      type: String,
      minLength: 3,
      maxLength: 50,
      required: true,
    },
    Domicilio: {
      type: String,
      minLength: 3,
      maxLength: 100,
      required: true,
    },
    CodigoPostal: {
      type: Number,
      required: true,
    },
    Cuotas:{
      type: String,
      required: true,
      enum: ["Pago unico", "3 cuotas sin interes", "6 cuotas sin interes", "12 cuotas sin interes"]
    }
  },

  { timestamps: true }
);

const DetallePedido = mongoose.model("detallePedido", detallePedidoSchema);

export default DetallePedido;
