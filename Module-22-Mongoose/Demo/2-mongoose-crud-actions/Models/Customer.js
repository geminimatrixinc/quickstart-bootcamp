const mongoose = require('../Helpers/db');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, default: 'Active' },
    age: { type: Number, min: 18, max: 100 }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
