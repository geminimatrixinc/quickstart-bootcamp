var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

// You should provide a secret key to enable cookie signing
app.use(cookieParser('yourSecretKey'));

app.get('/', function (req, res) {
    // Cookies that have not been signed
    console.log('Cookies: ', JSON.stringify(req.cookies));

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies);

    res.send('Check your console!');
});

var port = process.env.PORT || 3022;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}).on('error', (error) => {
    console.error('Error starting server:', error);
});
