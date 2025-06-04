
const SHA256 = require('crypto-js/sha256')

const getAddress = function() {
    const address = SHA256(JSON.stringify(new Date())).toString()
    console.log(`Wallet Address is ${address}`)
}

const depositAmount = function(amount) {
    console.log(`Amount: ${amount} deposited.`)
}

module.exports = {
    getAddress,
    depositAmount
}



