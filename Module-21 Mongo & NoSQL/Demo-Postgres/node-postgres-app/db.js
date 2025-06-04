
const { Client } = require('pg');

// Database connection configuration
const client = new Client({
    user: 'postgres', // PostgreSQL username
    host: 'localhost',
    database: 'TestDb',
    password: 'admin',
    port: 5432, // PostgreSQL default port
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));

module.exports = client;
