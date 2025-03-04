// function gretter(myArray) {

//     var greetText = 'Hello     ';

//     for (var index = 0; index < myArray.length; index++) {
//         console.log(greetText + myArray[index]);
//     }

// }

const greeter =  (myArray) => {
    for (let myValue of myArray) {
        console.log(`Hello  ${myValue}`)
    }
}


greeter([1, 2, 3, 4])