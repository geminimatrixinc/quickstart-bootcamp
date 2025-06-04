
const events = require('events')
const eventEmitter = new events.EventEmitter;
//const SHA256 = require('crypto-js/sha256')

eventEmitter.on('deposited', () => console.log(`main received...`))

const wallet = require("./modules/wallet-emitter")

console.log('\n')
wallet.getAddress()
wallet.depositAmount(100)

// const wallet = require('./modules/walletObj')

// const walletObj = new wallet();
// walletObj.getBalance();
// walletObj.depositAmount(100);
// walletObj.getBalance();