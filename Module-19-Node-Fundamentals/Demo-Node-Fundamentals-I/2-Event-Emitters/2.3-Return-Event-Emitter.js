
const emitter = require('events').EventEmitter;

const MyEmitter = () => {
    var e = new emitter();
    return e;
}

const myEmitter = MyEmitter();

myEmitter.on('event', () => {
    console.log('an event occurred!');
  });
  
  myEmitter.emit('event');
  
  