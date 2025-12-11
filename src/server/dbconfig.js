import mongoose from "mongoose";
import { inicioAdmin } from "../helpers/inicioAdmin.js";

try {
  mongoose.connect(process.env.MONGODB).then(() => {
    console.info("BD CONECTADA CORRECTAMENTE");

    //llamamos a la funcion una vez conectados
    inicioAdmin();
  });
} catch (error) {
  console.error(error);
}

export default mongoose;
