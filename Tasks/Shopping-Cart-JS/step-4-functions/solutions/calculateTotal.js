
let products = [
    { id: 1, name: "Apple", price: 0.99 },
    { id: 2, name: "Bread", price: 1.99 }
];

//const totalPrice = 5000; // global total price


// function declaration
function calculateTotal(products) {
    // Calculate the total price of all products
    let totalPrice = 0; // defining in local scope...

    for (let i = 0; i < products.length; i++) {
        totalPrice += products[i].price;
    }
    console.log(totalPrice);
    return totalPrice;
}

// function expression
var calculateTotal2 = function() { console.log("Calculating total price...") }; // annoymous function

calculateTotal(products); // calculate

console.log(calculateTotal2)