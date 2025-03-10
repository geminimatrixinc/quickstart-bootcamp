// Task: Creating a Function to Calculate Total Price

// Objective: Learn to define and use functions to perform specific tasks.

// Task Description: Refactor the previous script by creating a function called calculateTotal that:

// Define a function called calculateTotal to calculate total price
// should return the total price of all products
// should take an array of product objects as a parameter
// should be invoked with the products array ie. calculateTotal(products)
// should print the result

// Initialize products
let products = [
    { id: 1, name: "Apple", price: 0.99 },
    { id: 2, name: "Bread", price: 1.99 }
];

// Calculate the total price of all products
let totalPrice = 0;

for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
}

console.log("Total price:", totalPrice); // Output: Total price: 6.97



