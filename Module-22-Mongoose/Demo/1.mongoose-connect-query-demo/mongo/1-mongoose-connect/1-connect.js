
var mongoose = require('mongoose');

// this should be in your .env file
const connectionString = process.env.CONNECTIONG_STRING || "mongodb://localhost:27017/gbc-w2025-fsii";

mongoose.connect(connectionString)
.then(
       () => console.log("mongoose started...")
  );

// get instance of the connection..
  const dbConnection = mongoose.connection;

  // event listeners...
  dbConnection.on('open', () => {
    console.log(`mongoose connection open`)
  })
  
  dbConnection.on('disconnect', () => {
      console.log(`mongoose connection closed`)
  })
  dbConnection.on('error', () => {
      console.log(`mongoose connection error`)
  })

  dbConnection.on('close', () => {
      console.log(`mongoose connection closed`)
  })



const handleDisconnect = () => {
    mongoose.disconnect((err) => console.log(`disconnecting..`))
}
  setTimeout(handleDisconnect, 5000)
   ///asdfsdf