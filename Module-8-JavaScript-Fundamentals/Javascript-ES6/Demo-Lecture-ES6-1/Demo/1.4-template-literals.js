

// using the + operator\
const message1 = 'This is a long message\n' + 
'that spans across multiple lines\n' + 
'in the code.'

console.log(message1)


// This can be replaced by template literals..
const message2 = `This is a long message
that spans across multiple lines
in the code.`

console.log(message2)


//Expression Interpolation
//Before JavaScript ES6, you would use the + operator to concatenate variables and expressions in a string.

const name = 'Jack';
console.log('Hello ' + name); // Hello Jack

//With template literals, it's a bit easier to include variables and expressions inside a string. For that, we use the ${...} syntax.
const name2 = 'Jack';
console.log(`Hello ${name2}`);



// template literals used with expressions
const result = `The sum of  4 + 5 is ${4 + 5}`;
console.log(result); 


// elvis operator ?
console.log(`${result < 10 ? 'Too low' : 'Very high'}`)






var total = 50
// vanilla js
console.log("The total:" + total + "The tax is:" + 0.13 + "%")
// es6 + template literal
console.log(`The total:   ${total} The tax is 0.13 %`)


