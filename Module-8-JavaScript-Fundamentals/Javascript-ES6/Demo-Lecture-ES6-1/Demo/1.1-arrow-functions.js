
/////// ARROW FUNCTIONS /////////

var sayHello = function () {
    console.log('Hello');
  }
  
  // shorthand way to write function!!
  const sayHello2 = (name) => {
    console.log(`Hello ${name}`);
  };
  
  const greet = (name, message) => console.log(`Hello ${name}, ${message}`);





// ARROW FUNCTION - NO PARAMS
let greet2 = () => console.log('Hello');
greet2(); // Hello

// ARROW FUNCTION - ONE PARAM
let greet3 = (x) => console.log(x);
greet3('Hello'); // Hello 

// ARROW FUNCTION = MULTIPLE PARMS
let greet4 = (x, y) => {
    let z = 0;
    console.log(`x: ${x}, y: ${y}, z: ${z}`);
}
greet4(2, 5);
 


const handleOutput = function (fn, x, y) {
    // do an action...
    var result = 0;

    // call the function
    result = fn(x, y);

    // output result
    console.log(`result is ${result}`)
}

const multiplyNumber = (a, b) => {
    return a * b;
}

handleOutput((a, b) => a + b , 4, 4)
handleOutput(multiplyNumber, 4, 4)



