let socket;
let currentUsername = '';

// Join chat function
function joinChat() {
    const usernameInput = document.getElementById('usernameInput');
    const username = usernameInput.value.trim();

    if (username === '') {
        alert('Please enter your name!');
        return;
    }

    currentUsername = username;

    // Hide username screen and show chat
    document.getElementById('usernameScreen').style.display = 'none';
    document.getElementById('chatScreen').style.display = 'block';
    document.getElementById('currentUser').textContent = `Logged in as: ${username}`;

    // Initialize socket connection
    socket = io();

    // Send join notification
    socket.emit('user_joined', { username: username });

    // Listen for messages
    socket.on('message', function (data) {
        displayMessage(data);
    });

    // Listen for user join/leave notifications
    socket.on('user_notification', function (data) {
        displaySystemMessage(data.message);
    });

    // Focus on message input
    document.getElementById('messageInput').focus();

    // Add enter key listener for message input
    document.getElementById('messageInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Leave chat function
function leaveChat() {
    if (socket) {
        socket.emit('user_left', { username: currentUsername });
        socket.disconnect();
    }

    // Show username screen and hide chat
    document.getElementById('usernameScreen').style.display = 'block';
    document.getElementById('chatScreen').style.display = 'none';

    // Clear messages and reset
    document.getElementById('messages').innerHTML = '';
    document.getElementById('usernameInput').value = '';
    document.getElementById('messageInput').value = '';
    currentUsername = '';
}

// Send message function
function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();

    if (message === '' || !socket) {
        return;
    }

    const messageData = {
        username: currentUsername,
        message: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    socket.emit('message', messageData);
    input.value = '';
}

// Display message function
function displayMessage(data) {
    const messages = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${data.username === currentUsername ? 'own' : 'other'}`;

    messageDiv.innerHTML = `
        <div class="message-header">${data.username}</div>
        <div class="message-content">${escapeHtml(data.message)}</div>
        <div class="message-time">${data.timestamp}</div>
    `;

    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

// Display system message function
function displaySystemMessage(message) {
    const messages = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'system-message';
    messageDiv.textContent = message;

    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Add enter key listener for username input
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('usernameInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            joinChat();
        }
    });
});
