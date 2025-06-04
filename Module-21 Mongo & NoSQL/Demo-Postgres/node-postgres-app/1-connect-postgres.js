// index.js
const { Client } = require('pg');

// Database connection configuration
const client = new Client({
    user: 'postgres', // PostgreSQL username
    host: 'localhost',
    database: 'TestDb',
    password: 'admin', 
    port: 5432, // PostgreSQL default port
});

// Connect to the database
client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));

// Close the connection when the app is terminated
process.on('exit', () => {
    client.end();
});
