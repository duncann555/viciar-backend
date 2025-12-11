import Pedido from "../models/pedido.js";
import DetallePedido from "../models/detalle_pedido.js";
import Producto from "../models/producto.js";

export const crearPedido = async (req, res) => {
  try {
    const { detallePedido, productos } = req.body;

    if (!detallePedido) {
      return res.status(400).json({ mensaje: "Falta el detalle del pedido" });
    }

    if (!productos || productos.length === 0) {
      return res.status(400).json({ mensaje: "No hay productos en el pedido" });
    }

    const nuevoDetalle = new DetallePedido(detallePedido);
    await nuevoDetalle.save();

    let total = 0;

    for (const item of productos) {
      const prod = await Producto.findById(item.producto);

      if (!prod) {
        return res.status(400).json({ mensaje: "Producto no encontrado" });
      }

      total += prod.precio * item.cantidad;
    }

    const nuevoPedido = new Pedido({
      detallePedido: nuevoDetalle._id,
      productos,
      total,
    });

    await nuevoPedido.save();

    res.status(201).json({
      mensaje: "Pedido creado correctamente",
      pedido: nuevoPedido,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el pedido" });
  }
};

export const listarPedidos = async (_req, res) => {
  try {
    const pedidos = await Pedido.find()
      .populate("detallePedido")
      .populate("productos.producto");

    res.status(200).json(pedidos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al listar pedidos" });
  }
};

export const obtenerPedidoID = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id)
      .populate("detallePedido")
      .populate("productos.producto");

    if (!pedido) {
      return res.status(404).json({ mensaje: "Pedido no encontrado" });
    }

    res.status(200).json(pedido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener pedido" });
  }
};

export const actualizarEstadoPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id);

    if (!pedido) {
      return res.status(404).json({ mensaje: "Pedido no encontrado" });
    }

    pedido.estado = req.body.estado || pedido.estado;
    await pedido.save();

    res.status(200).json({
      mensaje: "Estado actualizado correctamente",
      pedido,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al actualizar el pedido" });
  }
};

export const eliminarPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findByIdAndDelete(req.params.id);

    if (!pedido) {
      return res.status(404).json({ mensaje: "Pedido no encontrado" });
    }

    res.status(200).json({ mensaje: "Pedido eliminado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar el pedido" });
  }
};
