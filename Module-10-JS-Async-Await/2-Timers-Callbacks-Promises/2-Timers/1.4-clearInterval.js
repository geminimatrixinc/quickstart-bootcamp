
var interval = setInterval(() => { 
    timer() 
  }, 1000);
  
  let counter = 0
 const timer = () => {    
    const dateVar = new Date();    
    const time = dateVar.toLocaleTimeString();         
    console.log(`timer:${time}`);

    counter += 1

    if(counter > 5) {
      stopFunction();
    }
  }
   
  const stopFunction = () =>{
    clearInterval(interval);
  }

  interval; // not a function, a reference
  setTimeout(stopFunction, 5000);