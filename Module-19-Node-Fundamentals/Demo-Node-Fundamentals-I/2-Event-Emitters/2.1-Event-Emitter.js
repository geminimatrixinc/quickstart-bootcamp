
// get the reference of EventEmitter class of events module
const events = require('events');

//create an object of EventEmitter class by using above reference
const em = new events.EventEmitter();

const userLogOut = function(data) {
    debugger
    console.log('User logged out.: ' + data);
}


//Subscribe for FirstEvent (Listener)
em.on('logout',  userLogOut);


// Raising FirstEvent
em.emit('logout')

em.emit('logout', 'LOGOUT!!!!!!!!!.')


// event listers and handling..
// mongo.on('disconnect', () => console.log(`I am disconnect`))
// mongo.on('connect', () => console.log(`I am connect`))
// mongo.on('error', () => console.log(`I have error`))

