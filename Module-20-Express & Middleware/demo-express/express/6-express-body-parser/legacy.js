var express = require('express')

//(Legacy Express) ===> 
var bodyParser = require('body-parser')

var app = express()

app.use(express.json());

//(Legacy Express) ===> 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))



app.post('/test', (req, res) => {
    console.log(`test request is callled`)

    res.send('OK!!!')
})

app.listen(5003, () => {
    console.log(`running on port 5003`)
})