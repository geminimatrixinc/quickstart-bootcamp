const Customer = require('./Models/Customer');

const getAllCustomers = async () => {
    try {
        // READ
        const customers = await Customer.find({});  // SELECT * FROM customers

        console.log('All Customers:', customers);
    } catch (error) {
        console.error('Error fetching customers:', error.message);
    } finally {
        process.exit();
    }
};

// Example usage: node getAllCustomers.js
getAllCustomers();
