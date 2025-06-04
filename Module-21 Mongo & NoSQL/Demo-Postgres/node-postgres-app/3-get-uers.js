// getUsers.js
const client = require('./db');

const getUsers = async () => {
    const query = 'SELECT * FROM users';
    try {
        const res = await client.query(query);
        console.log('Users:', res.rows);
    } catch (err) {
        console.error('Error fetching users:', err);
    } finally {
        client.end();
    }
};

// Call the function
getUsers();
