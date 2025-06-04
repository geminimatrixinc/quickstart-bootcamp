const Customer = require('./Models/Customer');

const addCustomer = async (name, address, status, age) => {
    try {
        const customer = new Customer({ name, address, status, age });
        // CREATE
        const savedCustomer = await customer.save();

        console.log('Customer added:', savedCustomer);
    } catch (error) {
        console.error('Error adding customer:', error.message);
    } finally {
        // node process..current and will terminiate
        process.exit();
    }
};

// Example usage: node addCustomer.js
addCustomer('John Doe', '123 Elm Street', 'Active', 25);
