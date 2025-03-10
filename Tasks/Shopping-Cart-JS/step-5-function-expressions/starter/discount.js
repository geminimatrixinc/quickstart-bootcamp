// Task: Creating a Function Expression to Calculate Discount

// Objective: Learn to define and use function expressions to perform specific tasks.

// Task Description: Refactor the previous script by creating a function called calculateDiscount that:

// Defines the function expression calculateDiscount
// Returns the total price after applying a discount
// Takes the total amount and discount code as parameters
// Should be invoked with the total amount and discount code ie. calculateDiscount(totalAmount, discountCode)
// Should print the result


// Initialize products
let totalAmount = 100;
//let discountCode = "SAVE10";
let discountCode = 'RANDOM'

switch (discountCode) {
    case 'SAVE10':
    case 'SAVE10DOLLARS': 
    case 'TENOFF':
        totalAmount -= totalAmount * 0.1;
        break;
    case 'SAVE20':
        totalAmount -= totalAmount * 0.2;
        break;
    default:
        totalAmount = 0;
        break;
}

console.log(`Total after discount: ${totalAmount}`);

