# 💬 Real-Time Disposable Chat Application

A modern, real-time **disposable chat room** built with Flask and Socket.IO featuring a beautiful glassmorphism UI design. Perfect for temporary conversations without any registration or data persistence.

![Chat App Preview](https://img.shields.io/badge/Status-Active-brightgreen) ![Python](https://img.shields.io/badge/Python-3.7+-blue) ![Flask](https://img.shields.io/badge/Flask-2.0+-red) ![Socket.IO](https://img.shields.io/badge/Socket.IO-4.7+-orange)

## ✨ Features

- **Real-time messaging** - Instant message delivery using WebSocket connections
- **Disposable chat rooms** - No registration required, messages don't persist after session ends
- **Anonymous chatting** - Simple username-based entry system, no personal data required
- **Session-based** - All messages are temporary and disappear when users leave
- **Modern UI** - Beautiful glassmorphism design with gradient backgrounds
- **Responsive design** - Works seamlessly on desktop and mobile devices
- **Message timestamps** - All messages include time stamps
- **User notifications** - See when users join or leave the chat
- **Message distinction** - Visual difference between your messages and others
- **Full-screen experience** - Immersive chat interface
- **Privacy-focused** - No message history stored, completely ephemeral

## 🚀 Quick Start

### Prerequisites

- Python 3.12 or higher
- pip (Python package installer)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/uselessbruh/minimal-chat.git
   cd Chat-app
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**
   ```bash
   python app.py
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

## 📋 Requirements

The application requires the following Python packages:

```
Flask==2.3.3
Flask-SocketIO==5.3.6
python-socketio==5.8.0
python-engineio==4.7.1
```

## 🏗️ Project Structure

```
Chat-app/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── README.md             # Project documentation
├── templates/
│   └── index.html        # Main HTML template
└── static/
    ├── style.css         # CSS styles and animations
    └── chat.js           # Client-side JavaScript
```

## 🛠️ Technical Details

### Backend (Flask + Socket.IO)

- **Flask**: Web framework for serving the application
- **Flask-SocketIO**: Enables real-time bidirectional communication
- **Event handling**: Manages user connections, messages, and notifications

### Frontend

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with glassmorphism effects
- **JavaScript**: Client-side Socket.IO integration and DOM manipulation
- **Responsive design**: Adapts to different screen sizes

### Real-time Communication

The application uses WebSocket protocol through Socket.IO for:
- Instant message delivery
- User join/leave notifications
- Connection status management

## 🎨 UI/UX Features

### Glassmorphism Design
- Semi-transparent backgrounds
- Backdrop blur effects
- Gradient overlays
- Modern button designs

### Interactive Elements
- Hover animations
- Smooth transitions
- Message animations
- Responsive feedback

### Color Scheme
- Primary gradient: Purple to blue (`#667eea` to `#764ba2`)
- Accent color: Green for buttons (`#4caf50`)
- Text: White with various opacity levels

## 🔧 Configuration

### Environment Variables

You can customize the application by modifying `app.py`:

```python
app.config['SECRET_KEY'] = 'your-secret-key-here'
socketio.run(app, debug=True, allow_unsafe_werkzeug=True, host='0.0.0.0', port=5000)
```

### Customization Options

- **Port**: Change the port in `socketio.run()`
- **Host**: Modify host parameter for network access
- **Debug mode**: Set `debug=False` for production
- **CORS**: Adjust `cors_allowed_origins` in SocketIO initialization

## 🌐 Deployment

### Local Development
```bash
python app.py
```

### Production Deployment

For production, consider using:
- **Gunicorn** with eventlet worker
- **Nginx** as reverse proxy
- **SSL/TLS** certificates for HTTPS

Example Gunicorn command:
```bash
gunicorn --worker-class eventlet -w 1 --bind 0.0.0.0:5000 app:app
```

## 📱 Usage

1. **Enter the chat**
   - Open the application in your browser
   - Enter your desired username
   - Click "Join Chat"

2. **Send messages**
   - Type your message in the input field
   - Press Enter or click "Send"
   - Messages appear instantly for all users

3. **Leave the chat**
   - Click the "Leave" button
   - You'll return to the username entry screen

## 🔒 Security Considerations

- **Input sanitization**: Messages are escaped to prevent XSS attacks
- **Rate limiting**: Consider implementing message rate limits
- **Authentication**: Current implementation uses simple usernames
- **HTTPS**: Use SSL/TLS in production environments

## 🐛 Troubleshooting

### Common Issues

**Server won't start:**
```
RuntimeError: The Werkzeug web server is not designed to run in production
```
**Solution**: The code includes `allow_unsafe_werkzeug=True` parameter

**Messages not appearing:**
- Check browser console for JavaScript errors
- Ensure Socket.IO CDN is accessible
- Verify Flask-SocketIO is installed correctly

**Styling issues:**
- Clear browser cache
- Check CSS file is loading correctly
- Verify static files are served properly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Abhijith Krishna G**
- GitHub: [@uselessbruh](https://github.com/uselessbruh)

## 🙏 Acknowledgments

- Flask and Socket.IO communities for excellent documentation
- Modern CSS techniques and glassmorphism design inspiration
- Socket.IO for real-time communication capabilities

## 📈 Future Enhancements

- [ ] User authentication with login/register
- [ ] Private messaging between users
- [ ] File sharing capabilities
- [ ] Emoji support
- [ ] Message history persistence
- [ ] Multiple chat rooms
- [ ] User avatars
- [ ] Typing indicators
- [ ] Message reactions
- [ ] Dark/light theme toggle

---

## 🚀 Getting Started Video

*Want to see it in action? Here's how to get started:*

1. Clone the repo
2. Install dependencies
3. Run `python app.py`
4. Open `http://localhost:5000`
5. Start chatting! 🎉

---

**Made with using Flask and Socket.IO**
