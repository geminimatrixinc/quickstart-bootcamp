const HST_TAX = 0.13;

const calculateTax = function (price = 100) {
    // LOCAL SCOPE
    var subTotal = price * HST_TAX;
    return subTotal + price;
}

// Memory = position 5540193 ===> function

const checkOut = function(callbackFn) {
    debugger
    var result = callbackFn(); // invoke the callback function...
    console.log("Checkout with total:" + result);
}

checkOut(calculateTax)