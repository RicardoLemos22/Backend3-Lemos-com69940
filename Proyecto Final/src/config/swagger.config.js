import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.1",
        info: {
            title: "Documentación de API del curso de backend 3, gestiona usuarios, mascotas y adopciones.",
            version: "1.0.0",
            description: "API para adopciones, mascotas y sus usuarios."
        }
    },
    apis:["./src/docs/**/*.yaml"]
}

export const specs = swaggerJSDoc(swaggerOptions);
