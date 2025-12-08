import { json } from "express";
import Producto from "../models/producto.js";

export const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();

    res.status(201).json({ mensaje: "Producto creado exitosamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: "Ocurrio un error al crear el producto" });
  }
};

export const listarProductos = async (req, res) => {
  try {
    const respuesta = await Producto.find();

    if (!respuesta) {
      res.status(404).json({ json: "No hay productos para listar" });
    }
    res.status(200).json(respuesta);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al listar los productos" });
  }
};
