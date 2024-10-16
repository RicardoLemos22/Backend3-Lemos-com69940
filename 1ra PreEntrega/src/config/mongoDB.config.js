import mongoose from "mongoose"
import envs from "./envs.config.js";

// Configuración del string de conexión a mi BD llamada: pflemos
export const conectarMongoDB = async() => {
    try {
        //DeprecationWarning
        mongoose.set('strictQuery', true);
        
        mongoose.connect(envs.MONGO_URL);
        console.log("Servidor local conectado al servicio MongoDB remoto");

    } catch (error) {
        // muestro el objeto Error completo para entender que puede fallar
        console.log(`Error: ${error}`);

    }
}