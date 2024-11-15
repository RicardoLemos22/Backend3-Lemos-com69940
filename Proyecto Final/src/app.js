import express from "express";
import rutas from "./routes/index.routes.js";
//import __dirname from "./dirname.js"
import cookieParser from "cookie-parser";
import { conectarMongoDB } from "./config/mongoDB.config.js";
import envs from "./config/envs.config.js";

import { errorHandle } from "./errors/errHandle.js";
import { logger } from "./utils/logger.js";
import swaggerUiExpress from "swagger-ui-express";
import { specs } from "./config/swagger.config.js";

const app = express();

conectarMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api-docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs))


//mis Rutas
app.use("/api", rutas);

// Middleware de manejo de errores
app.use(errorHandle);

const httpServer = app.listen(envs.PORT, () => {
    //console.log(`El servidor ahora esta escuchando en el puerto ${envs.PORT}`);
    logger.info(`El servidor ahora esta escuchando en el puerto ${envs.PORT}`);
});
