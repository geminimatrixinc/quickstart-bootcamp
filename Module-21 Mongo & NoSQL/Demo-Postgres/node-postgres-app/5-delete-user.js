// deleteUser.js
const client = require('./db');

const deleteUser = async (id) => {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
    try {
        const res = await client.query(query, [id]);
        console.log('User deleted:', res.rows[0]);
    } catch (err) {
        console.error('Error deleting user:', err);
    } finally {
        client.end();
    }
};

// Call the function with example data
deleteUser(1);
