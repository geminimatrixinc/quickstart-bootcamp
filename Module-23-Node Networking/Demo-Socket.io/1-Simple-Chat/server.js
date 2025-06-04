// Import http and socket.io
const http = require('http');
const socketIo = require('socket.io');

// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Socket.IO Server Running');
});

// Setup Socket.IO
const io = socketIo(server);

// Listen for connection events
io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Listen for "chat message" event and log it
  socket.on('chat message', (msg) => {
    console.log('Message received: ' + msg);
  });

  // Emit a message to the client
  socket.emit('chat message', 'Welcome to the chat!');

  // Handle disconnect event
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start server
server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
