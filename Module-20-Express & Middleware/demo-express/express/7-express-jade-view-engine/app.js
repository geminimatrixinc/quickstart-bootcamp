var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

// ====> Built-in middleware to parse URL-encoded bodies
var urlencodedParser = express.urlencoded({ extended: false });

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('request url: ' + req.url);
    next();
});

// =====> ROUTES (after middleware is defined...)
app.post('/person', urlencodedParser, function (req, res) {
    console.log('form submitted!');
    res.send('Thank you!!');
    console.log(req.body); // Log the body to see the submitted form data
});

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/api', function (req, res) {
    res.json({ firstname: 'Mike', lastname: 'Denton' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
