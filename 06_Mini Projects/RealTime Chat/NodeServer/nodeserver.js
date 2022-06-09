// IMPORTING SOCKET.IO PACKAGE WITH CORS POLICY
const io = require('socket.io')(8000, {
    cors: {
        origin: "*"
    }
});

// EMPTY OBJECT
const users = {};

// HANDLING EVENT WHEN USER IS CONNECTED SUCCESSFULLY
io.on('connection', socket => {
    // If any new user joins, let other users connected to the server know!
    socket.on('new-user-joined', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    // HANDLING EVENT WHEN USER SEND THE MESSAGE
    // If someone sends a message, broadcast it to other people
    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] })
    });
    
    // HANDLING EVENT WHEN USER LEFT THE CHAT
    // If someone leaves the chat, let other know
    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
});
