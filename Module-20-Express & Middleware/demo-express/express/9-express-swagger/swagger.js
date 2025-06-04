// swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Basic Swagger definition
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "User API",
            description: "User API Information",
            version: "1.0.0",
            contact: {
                name: "Developer"
            },
            servers: [
                {
                    url: "http://localhost:3000"
                }
            ]
        },
    },
    apis: ["./server.js"], // Path to the API docs
};

// Initialize swagger-jsdoc
const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerDocs, swaggerUi };
