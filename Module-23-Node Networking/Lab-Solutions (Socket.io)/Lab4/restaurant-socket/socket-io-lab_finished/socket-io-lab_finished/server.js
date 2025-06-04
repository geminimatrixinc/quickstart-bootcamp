const { Socket } = require('dgram');

var http = require('http')
  , url = require('url')
  , fs = require('fs')
  , io = require('socket.io')
  , server;


server = http.createServer(function(req, res){
  
  var path = url.parse(req.url).pathname;
  switch (path){
    case '/':
      fs.readFile(__dirname + '/index.html', function(err, data){
          if (err) return send404(res);
          res.writeHead(200, {'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html'})
          res.write(data, 'utf8');
          res.end();
      });
      break;

    default: send404(res);
  }
}),

send404 = function(res){
  res.writeHead(404);
  res.write('404');
  res.end();
};

//  web server launch ===>
server.listen(8080);

// socket.io, I choose you
var io = io.listen(server);

io.on('connection', function(client){

    // now we have a client object!
    console.log("Connection accepted.");
  
  client.on('message', function(message){
      console.log(`Recieved message: ${message} - from client`);
  });

  client.on('disconnect', function(){
      console.log("Disconnected...");
    
  });
 
});