
var express = require('express');
var app = express();
 
app.get('/', function (request, response) {
    response.send('this would be some HTML');
});

app.get('/api', function (req, res) {
	res.json({ firstname: 'John', lastname: 'Smith' });
});

app.post('/', function (req, res) {
    console.log('post recieved....');
    res.send('respond to post');    
});

app.delete('/', (req, res) => {
    console.log('respond to a delete');
    res.send('delete endpoint received!')
})


var port = process.env.port || 4001;
app.listen(port);