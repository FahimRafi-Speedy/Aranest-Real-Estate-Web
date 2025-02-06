'use client';

import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import './styles.css';

const socket = io('http://localhost:4000'); // Update with your backend URL

interface Message {
    text: string;
    sender: 'user' | 'authority';
}

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [thankYouSent, setThankYouSent] = useState(false);
    const [typing, setTyping] = useState<string | null>(null);
    const [user] = useState('User' + Math.floor(Math.random() * 1000));

    useEffect(() => {
        socket.on('message', (message: Message) => {
            setMessages((prev) => [...prev, message]);
        });

        socket.on('typing', (username: string) => {
            setTyping(username);
            setTimeout(() => setTyping(null), 2000);
        });

        return () => {
            socket.off('message');
            socket.off('typing');
        };
    }, []);

    const sendMessage = () => {
        if (newMessage.trim()) {
            socket.emit('message', {text: newMessage, sender: 'user'});
            setMessages([...messages, {text: newMessage, sender: 'user'}]);
            setNewMessage('');

            if (!thankYouSent) {
                setTimeout(() => {
                    setMessages((prevMessages) => [
                        ...prevMessages,
                        {text: 'Thank you for your message. We will get back to you shortly.', sender: 'authority'},
                    ]);
                    setThankYouSent(true);
                }, 1000);
            }
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-window flex flex-col">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`chat-message ${message.sender === 'user' ? 'user-message' : 'authority-message'}`}
                        style={{textAlign: message.sender === 'user' ? 'right' : 'left'}}
                    >
                        {message.text}
                    </div>
                ))}
                {typing && <p className="text-sm text-gray-500">{typing} is typing...</p>}
            </div>

            <div className="chat-input-container">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => {
                        setNewMessage(e.target.value);
                        socket.emit('typing', user);
                    }}
                    onKeyDown={handleKeyPress}
                    className="chat-input"
                />
                <button onClick={sendMessage} className="send-button">
                    Send
                </button>
            </div>
        </div>
    );
}