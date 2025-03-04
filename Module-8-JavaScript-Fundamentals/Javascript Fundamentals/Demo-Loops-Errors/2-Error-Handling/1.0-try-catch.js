// program to show try...catch in a program

const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);

    // forgot to define variable a      
    console.log(a);
}
catch(error) {
    console.error('An error caught'); 
    console.error('Error message: ' + error);  
}