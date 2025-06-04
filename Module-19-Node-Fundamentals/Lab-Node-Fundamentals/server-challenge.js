const http = require('http');

const Wallet = require('./modules/walletObj')

const hostname = '127.0.0.1';
const port = 3002;

let wallet = new Wallet();

const server = http.createServer((req, res) => {
  console.log(`request url: ${req.url}`)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // parse query string params
  const myURL = new URL(`http://localhost${req.url}`);


  if(req.url.includes('/deposit')) {
    const amount = myURL.searchParams.get('amount');

      wallet.depositAmount(amount)
      res.end(`Deposit request recieved: ${amount}`)
  }
  else if(req.url.includes('/balance')) {
      const balance = wallet.getBalance();
      res.end(`Wallet balance is: $${balance}`)
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