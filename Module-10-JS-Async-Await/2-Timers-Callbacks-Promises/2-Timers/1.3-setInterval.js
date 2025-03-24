
var timer;

const interval = () => {
  timer = setInterval(every2sec, 2000);
}

const every2sec = () => { 
  console.log("Alert Text!"); 
}

interval();

