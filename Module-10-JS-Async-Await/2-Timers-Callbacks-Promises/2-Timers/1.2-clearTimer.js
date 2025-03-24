
var timer;

const timeOut = () => {
  timer = setTimeout(() => { 
    console.log("This timer will be stopped") 
  }, 3000);
}

const stopTimer = () => {
     console.log(`clear timer..`)
    clearTimeout(timer);
}



timeOut();
stopTimer();