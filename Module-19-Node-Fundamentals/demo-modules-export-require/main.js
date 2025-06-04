
const greeter = require('./modules/greeter')
const { unlink } = require('node:fs');

console.log(`Hello CLI World`)

greeter.helloOutput()
greeter.goodbyeWorld()