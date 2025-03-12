// Setup
var myArray = [];
//var data = [1, 2, 3, 4];

// Only change code below this line.
var i = 0;
while (i <= 4){
    myArray.push(i);
    i++;
}

console.log(myArray)

// second loop will iterate through the array
var j = 0;

while(j < 100000000000) {
    console.log(j);


    if (j == 500) {
        console.log("Something went right and continue...")
        j++;
        continue; // continue to the next iteration of the loop
    }
    // safety check
    if (j > 1000) {
        console.log("Loop stopped due to excessive iterations.");
        break;
    }
    j++; // increment
}