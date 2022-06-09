const socket = io('http://localhost:8000');

// GET DOM ELEMENTS IN RESPECTIVE JS VARIABLES
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

// AUDIO THAT WILL PLAY ON RECEIVING MESSAGES
var audio = new Audio('Tone.mp3');

// FUNCTION WHICH WILL APPEND EVENT INFO TO THE CONTAINER
const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if (position == 'left'){
        audio.play();
    };
};

// ASK NEW USER FOR NAME AND LET THE SERVER KNOW
const name = prompt("Enter Your Name To Join: ");
socket.emit('new-user-joined', name);

// IF A NEW USER JOINS, RECEIVE NAME FROM THE SERVER
socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'right')
})

// IF SERVER SENDS A MESSAGE, RECEIVE IT
socket.on('receive', data => {
    append(`${data.name}: ${data.message}`, 'left')
})

// IF A USER LEAVES THE CHAT, APPEND THE INFO TO THE CONTAINER
socket.on('left', name => {
    append(`${name} left the chat`, 'right')
})

// IF THE FORM GETS SUBMITTED, SEND SERVER THE MESSAGE
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = ''
})