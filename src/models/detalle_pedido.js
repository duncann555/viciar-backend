import mongoose, { Schema } from "mongoose";

const detallePedidoSchema = new Schema(
  {
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "usuario",
      required: true,
    },
    provincia: {
      type: String,
      required: true,
      enum: ["Buenos Aires", "Cordoba", "Salta", "Tucuman", "Neuquen"],
    },
    ciudad: {
      type: String,
      minLength: 3,
      maxLength: 50,
      required: true,
    },
    domicilio: {
      type: String,
      minLength: 3,
      maxLength: 100,
      required: true,
    },
    codigoPostal: {
      type: Number,
      required: true,
    },
    cuotas: {
      type: String,
      required: true,
      enum: [
        "Pago unico",
        "3 cuotas sin interes",
        "6 cuotas sin interes",
        "12 cuotas sin interes",
      ],
    },
  },

  { timestamps: true }
);

const DetallePedido = mongoose.model("detallePedido", detallePedidoSchema);

export default DetallePedido;
