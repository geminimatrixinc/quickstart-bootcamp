
var express = require('express');
var morgan = require('morgan')

var app = express();
 
// middleware
app.use('/assets', express.static(__dirname + '/public') )
app.use('/', express.static(__dirname + '/public') )

app.use(morgan(':method :url :status :res[content-length] - :response-time ms')) //morgan('tiny || combined'))


app.get('/', function (req, res) {
    console.log('get receieved!');
    //res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>');
    res.render("index.html");
});



var port = process.env.port || 3055;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});