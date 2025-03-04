
// Vanilla - ES5

var provinceCode = "ON";

var total = 0;
if (provinceCode == "ON") {
    total = 100;
}
else {
    total = 50;
}

// ES6+ - ternary operator (elivis.)
var total = provinceCode == "ON" ? 100 : 50;