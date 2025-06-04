// updateUser.js
const client = require('./db');

const updateUser = async (id, newName, newEmail) => {
    const query = 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *';
    try {
        const res = await client.query(query, [newName, newEmail, id]);
        console.log('User updated:', res.rows[0]);
    } catch (err) {
        console.error('Error updating user:', err);
    } finally {
        client.end();
    }
};

// Call the function with example data
updateUser(1, 'Jane Doe', 'jane.doe@example.com');
