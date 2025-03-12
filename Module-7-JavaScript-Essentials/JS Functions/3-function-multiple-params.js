

function addNumbers(firstNumber = 0, secondNumber = 0) { // default parameter
    // check for number..(validations)
    if (!Number.isInteger(firstNumber) || typeof secondNumber !== 'number') {
        //console.error("Error: Params are not a number")
        return 0;
    }
    
    return firstNumber + secondNumber; // add those two numbers
}

var result = addNumbers(200, 40)

console.log("The result is " + result)

//console.log("The result is " + addNumbers(true, "empty string"))
