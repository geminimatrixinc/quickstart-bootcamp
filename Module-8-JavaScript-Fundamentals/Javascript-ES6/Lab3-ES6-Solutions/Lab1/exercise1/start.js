
// TASK - ES6+
// 1. rewrite this vanilla code using ES6+ syntax..

function gretter(myArray) {

    var greetText = 'Hello     ';

    for (var index = 0; index < myArray.length; index++) {
        console.log(greetText + myArray[index]);
      }

}


gretter([1, 2, 3, 4])


// Hello 1
// Hello 2
// Hello 3
// Hello 4
