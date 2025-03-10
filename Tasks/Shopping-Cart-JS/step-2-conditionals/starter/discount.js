
//# Task 2: Using Conditional Statements to Apply Discounts
// Objective: Learn to use switch statements to handle different cases.

// Task Description: Modify the existing script to apply different discounts based on the value of discountCode. 
// For now, manually change the discountCode in the script to see different results.

// Implement a switch statement that changes the value of totalAmount based on the discountCode.
// Handle two cases: "SAVE10" for a 10% discount and "SAVE20" for a 20% discount.

let totalAmount = 100;
let discountCode = "SAVE10"; // Try changing this to "SAVE20" or any other value
// SAVE10DOLLARS
// TENOFF
// Implement your switch statement below

// HOMEWORK

if (discountCode === "SAVE10" || discountCode === "SAVE10DOLLARS" || discountCode === "TENOFF") {
    totalAmount = totalAmount * 0.1;
} else if (discountCode === "SAVE20" || discountCode === "SAVE20DOLLARS") {
    totalAmount = totalAmount * 0.2;
}

console.log(`Total after discount: ${totalAmount}`);