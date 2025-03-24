
let bfr = new Buffer("Hi");

// convert buffer => to string
console.log(bfr.toString());

// convert buffer => base64 encoded string
console.log(bfr.toString('base64'));

// chaining the buffer 
let greet = new Buffer("There!").toString('base64');

// convert => utf first 2 characters
console.log(greet.toString('utf-8', 0, 2));