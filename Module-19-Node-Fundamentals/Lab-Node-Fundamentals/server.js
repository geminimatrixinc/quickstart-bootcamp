const http = require('http');
// const wallet = require('./modules/wallet-emitter')
const wallet = require('./modules/wallet');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  console.log(`request url: ${req.url}`)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if(req.url === '/deposit') {
      wallet.depositAmount(100)
      res.end('Deposit request recieved')
  }
  else if(req.url === '/address') {
      wallet.getAddress()
      res.end('Address request received')
  }
  else {
    res.end('Beta-Mask');
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});