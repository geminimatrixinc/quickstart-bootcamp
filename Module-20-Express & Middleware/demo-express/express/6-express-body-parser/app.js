var express = require('express');

var app = express();

// Built-in middleware to parse JSON bodies
app.use(express.json());


// Built-in middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));


app.post('/test', (req, res) => {
    console.log(`test request is called`);
    console.log(req.body); // This will log the body of the request to the console
    res.send('OK!!!');
});

app.listen(5003, () => {
    console.log(`running on port 5003`);
});
