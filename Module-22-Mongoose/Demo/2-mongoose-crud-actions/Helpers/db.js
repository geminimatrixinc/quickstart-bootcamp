require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.MONGO_URI;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Mongoose connected successfully"))
    .catch((error) => console.log("Mongoose connection error: " + error));

module.exports = mongoose;
