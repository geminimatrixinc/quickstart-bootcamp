// server.js
const express = require('express');
const { swaggerDocs, swaggerUi } = require('./swagger');
const app = express();

app.use(express.json());

// Swagger setup: Route to access API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of users
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
app.get('/api/v1/users', (req, res) => {
    res.json([{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }]);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
