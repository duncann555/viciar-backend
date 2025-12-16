import mongoose from "mongoose";
import { inicioAdmin } from "../helpers/inicioAdmin.js";

const conectarDB = async () => {
  try {
    // Intentamos conectar
    await mongoose.connect(process.env.MONGODB);
    
    console.info("BD CONECTADA CORRECTAMENTE");

    // Ejecutamos el helper una vez conectados
    await inicioAdmin();

  } catch (error) {
    // Si falla, mostramos el error y detenemos el servidor para no dejarlo inestable
    console.error("Error al conectar la BD:", error);
    process.exit(1); // 1 significa termina con error
  }
};

// Ejecutamos la función
conectarDB();

export default mongoose;