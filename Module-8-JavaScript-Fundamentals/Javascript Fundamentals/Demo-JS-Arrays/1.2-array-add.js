

let dailyActivities = ['eat', 'sleep'];

var occurrencesNum = function() {

        var result = [];

        for(var i=0; i < dailyActivities.length; i++) {
            
            var currentItem = dailyActivities[i];
            if(currentItem === 'sleep') {
                result.push(currentItem);
            }
        }

        console.log('number of occurrences..' + result.length)
 
}

occurrencesNum();



// add an element at the end of the array
dailyActivities.push('exercise');

console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']


//add an element at the end of the array
dailyActivities.unshift('work'); 

console.log(dailyActivities); // ['work', 'eat', 'sleep', 'exercise'']