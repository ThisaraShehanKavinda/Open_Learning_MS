import React, { useState } from 'react';
import { FaPaperPlane, FaRobot, FaTimes } from 'react-icons/fa';
import './AIChatbot.css';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    setIsTyping(true);
    setTimeout(() => {
      const aiResponse = {
        sender: 'ai',
        text: `Thank you for your question! Here's some advice: If you're looking to improve your ${input}, I recommend starting with hands-on practice and exploring advanced courses.`,
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className='ai-chatbot'>
      <div
        className='chatbot-toggle'
        role='button'
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(!isOpen);
          }
        }}
        tabIndex={0}
      >
        {isOpen ? <FaTimes size={20} /> : <FaRobot size={20} />}
      </div>

      {isOpen && (
        <div className='chatbot-container'>
          <div className='chatbot-header'>
            <h3>
              <FaRobot /> AI Learning Assistant
            </h3>
          </div>

          <div className='chatbot-messages'>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${
                  message.sender === 'ai' ? 'ai' : 'user'
                }`}
              >
                <p>{message.text}</p>
              </div>
            ))}
            {isTyping && (
              <div className='chatbot-message ai'>
                <p className='typing'>...</p>
              </div>
            )}
          </div>

          <div className='chatbot-input'>
            <input
              type='text'
              placeholder='Ask me anything...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
            />
            <button onClick={handleSend}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;
