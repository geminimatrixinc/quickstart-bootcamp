
// GLOBAL SCOPE
var HST_TAX = 0.13;

function calculateTax (price) {
    // LOCAL SCOPE
    var subTotal = price * HST_TAX;

    return subTotal + price;
}

console.log(calculateTax(100))