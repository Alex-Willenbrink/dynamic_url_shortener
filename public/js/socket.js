var socket = io.connect('http://localhost:3000');

// socket.on('greeting', function(data) {
//   console.log("acknowledged?")
// })

socket.emit('event');


