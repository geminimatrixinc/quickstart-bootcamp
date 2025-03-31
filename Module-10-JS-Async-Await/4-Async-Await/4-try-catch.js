function safeDivide(num1, num2) {
    try {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        const result = num1 / num2;
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

safeDivide(10, 0); // Will trigger the error
safeDivide(10, 2); // Will show the result
