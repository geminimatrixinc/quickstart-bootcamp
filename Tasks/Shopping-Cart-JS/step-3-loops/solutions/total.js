// Task 1: Iterating Over an Array to Calculate Total
// Objective: Learn to iterate over an array and sum values using a loop.

// Task Description: Given an array of product objects, each with a price property, write a script to calculate the total price of all products.

// Use a for loop to iterate through the products array.
// Accumulate the total price of all the items and store it in a variable.
// Print the calculated total to the console.

// Initialize products
let products = [
    { id: 1, name: "Apple", price: 0.99 }, // 0
    { id: 2, name: "Bread", price: 1.99 }, // 1
    { id: 2, name: "Beer", price: 3.99 } // 2
];

// Calculate the total price of all products

let totalPrice = 0;

for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
}

console.log("Total price:", totalPrice); // Output: Total price: 6.97