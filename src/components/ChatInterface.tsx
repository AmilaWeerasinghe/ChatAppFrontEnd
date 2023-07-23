import React, { useState, useEffect } from 'react';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    // TODO: Implement the API call to send the message
  };

  useEffect(() => {
    // TODO: Fetch chat messages from the backend and set them in the "messages" state
  }, []);

  return (
    <div>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatInterface;
