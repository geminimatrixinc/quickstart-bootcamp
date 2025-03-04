            
let dailyActivities = [ 'eat', 'sleep'];  // length 2

// this will add the new element 'exercise' at the 2 index
dailyActivities[2] = 'exercise';

console.log(dailyActivities); // ['eat', 'sleep', 'exercise']

// this will add the new element 'exercise' at the 3 index
dailyActivities[3] = 'exercise';


dailyActivities.push('pushed ups')

console.log(dailyActivities)

dailyActivities.pop()
console.log(dailyActivities)

var temp = [];
var lastElement = temp.pop();
console.log('last elemented :' + lastElement);