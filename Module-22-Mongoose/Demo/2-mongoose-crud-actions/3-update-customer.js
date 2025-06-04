const Customer = require('./Models/Customer');

const updateCustomerStatus = async (name, newStatus) => {
    try {
        const updatedCustomer = await Customer.findOneAndUpdate(
            { name },
            { status: newStatus },
            { new: true }
        );
        console.log('Customer updated:', updatedCustomer);
    } catch (error) {
        console.error('Error updating customer:', error.message);
    } finally {
        process.exit();
    }
};

// Example usage: node updateCustomer.js
updateCustomerStatus('John Doe', 'Inactive');
