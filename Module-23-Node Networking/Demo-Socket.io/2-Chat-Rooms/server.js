const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Socket.IO Rooms Example');
});

const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Join a room
  socket.on('join room', (roomName) => {
    socket.join(roomName);
    console.log(`User joined room: ${roomName}`);
  });

  // Send message to specific room
  socket.on('chat message', (roomName, msg) => {
    io.to(roomName).emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
