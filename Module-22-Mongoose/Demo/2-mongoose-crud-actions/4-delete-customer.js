const Customer = require('./Models/Customer');

const deleteCustomer = async (name) => {
    try {
        const result = await Customer.findOneAndDelete({ name });
        
        console.log('Customer deleted:', result);
    } catch (error) {
        console.error('Error deleting customer:', error.message);
    } finally {
        process.exit();
    }
};

// Example usage: node deleteCustomer.js
deleteCustomer('John Doe');
