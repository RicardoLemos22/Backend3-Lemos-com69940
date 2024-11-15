import express from "express";
import rutas from "./routes/index.routes.js";
//import __dirname from "./dirname.js"
import cookieParser from "cookie-parser";
import { conectarMongoDB } from "./config/mongoDB.config.js";
import envs from "./config/envs.config.js";

const app = express();

conectarMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

//mis Rutas
app.use("/api", rutas);

const httpServer = app.listen(envs.PORT, () => {
    console.log(`El servidor ahora esta escuchando en el puerto ${envs.PORT}`);
});
