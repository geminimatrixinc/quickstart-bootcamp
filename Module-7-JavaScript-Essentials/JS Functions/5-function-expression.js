const HST_TAX = 0.13;


const calculateTax = function(price = 100) {
    // LOCAL SCOPE
    var subTotal = price * HST_TAX;

    return subTotal + price;
}



console.log(calculateTax())