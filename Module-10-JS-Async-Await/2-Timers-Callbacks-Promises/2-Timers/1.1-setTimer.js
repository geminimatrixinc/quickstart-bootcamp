
var timer;

const timeOut= () => {    
  timer = setTimeout(alertFunc, 2000);
}

const alertFunc = () =>{    
  console.log(`Two seconds have passed!`);
}

timeOut();