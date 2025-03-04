

function addNumbers(firstNumber, secondNumber) {
    // check for number..
    if (!Number.isInteger(firstNumber) || typeof secondNumber !== 'number') {
        //console.error("Error: Params are not a number")
        return 0;
    }
    
    return firstNumber + secondNumber;
}


var result = addNumbers(5, 10)

console.log("The result is " + result)

console.log("The result is " + addNumbers(true, "empty string"))
