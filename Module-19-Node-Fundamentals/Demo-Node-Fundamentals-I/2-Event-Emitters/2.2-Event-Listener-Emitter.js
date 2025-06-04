
var emitter = require('events').EventEmitter;

var em = new emitter();

//Subscribe FirstEvent
em.on('firstevent', function (data) {
    console.log('First subscriber: ' + data);
});

//Subscribe SecondEvent
em.on('secondevent', function (data) {
    console.log('Second subscriber: ' + data);
});

// Raising FirstEvent
em.emit('firstevent', 'This is my first Node.js event emitter example.');

// Raising SecondEvent
em.emit('secondevent', 'This is my second Node.js event emitter example.');