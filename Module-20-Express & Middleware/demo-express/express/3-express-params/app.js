
var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded())

app.post('/payload', (req, res) => {
    console.log(`body ${JSON.stringify(req.body)}`)

    res.send(JSON.stringify(req.body));
})
 
app.get('/', (req, res) => {
    res.send(`hello from the server!!`)
})
// matching routes
app.get('/person', function (req, res) {
    // really messy!
	res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

// http://localhost:3005/person/3000/books/1000


app.get('/person/:personId/books/:bookId', function (req, res, next) {
    const { personId, bookId } = req.params;

	console.log(req.params)
 
	res.send('<html><head></head><body><h1>Person ID: ' + req.params.personId + '</h1><h1>Books ID: ' + req.params.bookId + '</h1></body></html>');
});




var port = process.env.port || 3005;
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});



