// program to find the sum of positive numbers
// if the user enters a negative numbers, break ends the loop
// the negative number entered is not added to sum

let sum = 0, number;

var promptUserForNumber = () => {
    while(true) {
    
        // take input again if the number is positive
        number = parseInt(window.prompt('Enter a number: '));
    
        debugger

        // break condition
        if(number < 0) {
            break;
        }
    
        // add all positive numbers
        sum += number;
        window.alert('Sum is' + sum)


        // exit?
        var shouldExit = window.prompt('Do you want to exit? "(Yes | Y)')

        if (shouldExit === "Yes" || shouldExit === "Y") {
            break;
        }
    
    }
}

promptUserForNumber();
// display the sum
console.log(`The sum is ${sum}.`);