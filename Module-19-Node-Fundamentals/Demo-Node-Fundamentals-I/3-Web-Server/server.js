const { debug } = require('console');
const http = require('http');

const hostname = '127.0.0.1';
const port = 5002;

const handleServerInstance = (request, response) => {
    debugger;
   console.log('request received');
   //console.log(req);
   console.log(request.url);
 
   if(request.url === '/about') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('About Us');
   }
   else if(request.url === '/contact') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Contact Us');
   }
   else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Page not found');
   }

  // response.statusCode = 200;
  // response.setHeader('Content-Type', 'text/plain');
  // response.end('Hello World');
}

const server = http.createServer(handleServerInstance);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


server.on('close', () => {
    console.log('closing ports')
})
