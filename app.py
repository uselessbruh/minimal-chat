from flask import Flask, render_template
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('message')
def handleMessage(data):
    print(f'Message from {data["username"]}: {data["message"]}')
    emit('message', data, broadcast=True)

@socketio.on('user_joined')
def handleUserJoined(data):
    username = data['username']
    print(f'{username} joined the chat')
    emit('user_notification', {
        'message': f'{username} joined the chat'
    }, broadcast=True)

@socketio.on('user_left')
def handleUserLeft(data):
    username = data['username']
    print(f'{username} left the chat')
    emit('user_notification', {
        'message': f'{username} left the chat'
    }, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, debug=True, allow_unsafe_werkzeug=True)
