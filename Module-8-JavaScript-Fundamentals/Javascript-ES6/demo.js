

var names = ["mike", "jim", "john", "tim"];

// Vanilla..
for(var count = 0; count < names.length; count++) {
    var currentName = names[count];
    //console.log(currentName);
}

// ES6

for (let currentName of names) {
   //  console.log(`es6 ${currentName}`)
}

var mixedArray = ["something", false, null, { name: "mike " }]



var original = [1, 2, 3, 4]
var letters = ["a", "b", "c"]

// how to do this with vanilla js???
// 1, 2, a, b, c, 3, 4
// [1, 2, [a, b, c], 3, 4]

var combinedArray = [];

for(var i = 0; i < original.length; i++) {
    if(i == 2) {
        // expand letters.. 
        for (var j =0; j < letters.length; j++) {
            var currentLetter =letters[j];
            combinedArray.push(currentLetter)
        }
    }
    // add item
    combinedArray.push(original[i])
}

console.log(combinedArray)

console.log([1, 2, ...letters, 3, 4])



var number = [1, 2, 3]
