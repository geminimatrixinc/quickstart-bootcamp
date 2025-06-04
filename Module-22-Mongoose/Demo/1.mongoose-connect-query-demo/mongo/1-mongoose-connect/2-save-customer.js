
var mongoose = require('mongoose');

const connectionString ="mongodb://localhost:27017/mongoose-w-2024-fs-ii";


const handleSuccess = () => console.log("Mongoose connected successfully "); // resolve()
const handleError =  (error) => console.log("Mongoose could not connected to database : " + error); // reject()


mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
.then(
        handleSuccess,    // () => console.log("mongoose connected")
        handleError      // (err) => console.log(err)
  );


////////////////////////////////

var Schema = mongoose.Schema;

/// SCHEMA 
var customerSchema = new Schema({
    name: String,
    address: String,
    status: String
});

/// MIDDLE WARE HOOK
customerSchema.pre('save', () => console.log('****** Pre -- customer saved ******'));
customerSchema.post('save', () => console.log('****** Post -- customer saved ******'));

// MODEL 
var Customer = mongoose.model('Customer', customerSchema);


// data ====> in

var model = Customer({ name: 'Rob Ford', address: 'Missing in Action.', status: true});

// // // SAVE USER TO MONGO DB
model.save(function(err) {

  if (err) throw err;

  console.log('**** After -- Customer was saved to the db! *****');
});



// // SAVE SECOND USER TO MONGO DB
var jane = Customer({name: 'jane', address:'Test', status: 'OK'})

// // // SAVE USER TO MONGO DB
jane.save(function() {
  console.log('**** jane saved ***')
})


/// REUSABLE FUNCTION FOR SAVING!!!
// const addCustomer = (name, address, status) => {
//   // SAVE SECOND USER TO MONGO DB
//   var customer = Customer({name: name, address: address, status: status})
//   customer.save(function() {
//     console.log(`**** ${name} saved ***`)
//     })
//   }


//  addCustomer('joe biden', 'white house', 1);
//  addCustomer('chuck norris', 'white house', 1);

//  Customer.find({}).then((doc) => console.log(doc))

// var firstNames = customers.map(doc => doc.name);
//console.log(firstNames)

