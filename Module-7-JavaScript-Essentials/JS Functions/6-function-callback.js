const HST_TAX = 0.13;

const calculateTax = function (price = 100) {
    // LOCAL SCOPE
    var subTotal = price * HST_TAX;
    return subTotal + price;
}

// Memory = position 5540193 ===> function

const checkOut = function(callbackFn) {
    var result = callbackFn(); // invoke the callback function...
    console.log("Checkout with total:" + result);
}

checkOut(calculateTax)


// Pascal Case: CalculateTax
// Camel Case: calculateTax
// Snake Case: calculate_tax
// Screaming Snake Case: CALCULATE_TAX
// Kebab Case: calculate-tax

