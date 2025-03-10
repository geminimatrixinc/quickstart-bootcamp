



// f=(a=5) => {console.log('f'); if (a ===0) return; return f (a-1);  
    



function f(a) { // default value{
    console.log(a)
    //console.log('f');
    // exit condition
    if (a === 0) return; // exit condition
    return f(a - 1); // recursive call
}
    
    
    f(undefined) // invoke function/calling


    // It is asking  how many times is the value 'f' console logged?