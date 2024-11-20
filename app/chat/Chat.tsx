// /app/chat/Chat.tsx
"use client";

import { useState } from "react";
import "./styles.css";

interface Message {
  text: string;
  sender: "user" | "authority";
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add user message to chat
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");

      // Simulate an authority response for demo purposes
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Thank you for your message. We will get back to you shortly.", sender: "authority" },
        ]);
      }, 1000); // Delay to mimic authority response
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.sender === "user" ? "user-message" : "authority-message"}`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="chat-input"
        />
        <button onClick={handleSendMessage} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
}
