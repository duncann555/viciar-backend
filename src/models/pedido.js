import mongoose, { Schema } from "mongoose";

const pedidoSchema = new Schema(
  {
    detallePedido: {
      type: Schema.Types.ObjectId,
      ref: "detallePedido",
      required: true,
    },
    productos: [
      {
        producto: {
          type: Schema.Types.ObjectId,
          ref: "producto",
          required: true,
        },
        cantidad: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    estado: {
      type: String,
      required: true,
      enum: ["Pendiente", "Aprobado", "Rechazado", "Enviado"],
      default: "Pendiente"
    },
  },
  { timestamps: true }
);

const Pedido = mongoose.model("pedido", pedidoSchema);

export default Pedido;
