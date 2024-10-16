import dotenv from "dotenv";

dotenv.config();

export default {
    MONGO_URL: process.env.MONGO_URL,
    PORT: process.env.PORT,
    ERROR500: "Internal Server Error",
    ERROR500ESP: "Ha ocurrido un error interno del servidor.",
    
};