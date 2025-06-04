
var fs = require('fs');

var out_data = 'Autobots, transform and roll out!';

// Asynchronous write

fs.writeFile('./output_async.txt', out_data, function (err, data) {
   if(err)
     console.log(err);

    console.log(`Output Async file content:  ${out_data}`);
})

// Synchronous write
fs.writeFileSync('/output_sync.txt');
console.log(`Output Sync file content:   ${out_data}`);

console.log('Program Ended');

