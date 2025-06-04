// createUser.js
const client = require('./db');

const createUser = async (name, email) => {
    const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
    try {
        const res = await client.query(query, [name, email]);
        console.log('User created:', res.rows[0]);
    } catch (err) {
        console.error('Error creating user:', err);
    } finally {
        client.end();
    }
};

// Call the function with example data
createUser('Test User', 'test.user@example.com');
