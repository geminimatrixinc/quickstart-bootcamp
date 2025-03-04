

const HST_TAX = 0.13

function addNumber(a, b) {
    return a + b;
}

// const addNumber = (a = 0, b = 5) => {
//     return a + b;
// }

console.log(addNumber(10, 15))
console.log(addNumber(20, 100))
console.log(addNumber())



var price = 100;
var subTotal = price * HST_TAX;
var total = price + subTotal;

//console.log("The total is: " + total + "the subTotal" + " " + subTotal)

console.log(`The total is ${total} the subTotal is ${subTotal}`)