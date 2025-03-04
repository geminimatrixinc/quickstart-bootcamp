function calculator(actionStr, num1Str, num2Str) {

    var num1 = parseInt(num1Str);
    var num2 = parseInt(num2Str);

    var action = actionStr.trim();
    switch (action) {
        case 'add':
        case '+':
            return add(num1, num2);
        case 'subtract':
        case '-':
            return subtract(num1, num2);
        case 'multiply':
        case '*':
            return multiply(num1, num2);
        case 'divide':
        case '/':
            return divide(num1, num2);
        default:
            throw new Error('Invalid action');
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero!');
    }
    return a / b;
}

// Example usage
try {
    // console.log(calculator('add', 5, 3));       // Output: 8
    // console.log(calculator('+', 5, 3));       // Output: 8
    // console.log(calculator('subtract', 8, 2));  // Output: 6
    // console.log(calculator('-', 8, 2));  // Output: 6
    // console.log(calculator('multiply', 4, 5));  // Output: 20
    // console.log(calculator('*', 4, 5));  // Output: 20
    // console.log(calculator('divide', 10, 2));   // Output: 5
    // console.log(calculator('/', 10, 2));   // Output: 5
    // console.log(calculator('divide', 10, 0));   // Throws an Error
} catch (error) {
    console.error(error.message);
}

