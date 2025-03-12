

var message = "Global Message" // Global variable

function displayMessage(message) {
    console.log(message) // Local variable
}


displayMessage("Hello")
displayMessage("Goodbye")
displayMessage("Is it the weekend yet?")

console.log(message) // Global variable
