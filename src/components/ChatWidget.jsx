import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "System initialized. I am Jagapathi's AI assistant. Ask me about his skills, projects, or experience.", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.trim().toLowerCase();
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');
    setIsTyping(true);

    // Simulated AI Logic
    setTimeout(() => {
      let response = "I don't have that information loaded. But you can email him directly at jagapathinaidu07122006@gmail.com!";
      
      if (userMsg.includes('skill') || userMsg.includes('tech') || userMsg.includes('stack')) {
        response = "Jagapathi specializes in Full Stack Development and AI. His core stack includes React.js, Node.js, Express.js, MongoDB, and Python, along with integration of Generative AI like the Gemini API.";
      } else if (userMsg.includes('project') || userMsg.includes('work') || userMsg.includes('built')) {
        response = "He has built several impressive projects including 'Smart Study Assistant' (an AI platform), 'HARMONICA' (music visualization), and an AI-Based Age Verification System. Check out the Featured Work section!";
      } else if (userMsg.includes('education') || userMsg.includes('study') || userMsg.includes('cgpa')) {
        response = "He is currently a B.Tech student with a consistent CGPA of 7.02.";
      } else if (userMsg.includes('contact') || userMsg.includes('hire') || userMsg.includes('email') || userMsg.includes('reach')) {
        response = "You can reach him at jagapathinaidu07122006@gmail.com or via his GitHub @Jaggu-cpu-afk.";
      } else if (userMsg.includes('hello') || userMsg.includes('hi') || userMsg.includes('hey')) {
        response = "Hello! How can I help you learn more about Jagapathi?";
      } else if (userMsg.includes('who are you') || userMsg.includes('what are you')) {
        response = "I am a local simulation running in your browser to demonstrate Jagapathi's interest in AI and interactive UI design!";
      }

      setMessages(prev => [...prev, { text: response, sender: 'ai' }]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--accent-cyan)',
          color: 'var(--bg-color)',
          display: isOpen ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
          zIndex: 999,
          transition: 'transform 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageSquare size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              width: '350px',
              height: '500px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 1000,
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{ background: 'var(--bg-color)', padding: '1rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)' }} />
                <h3 style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--text-color)' }}>Ask Jagapathi AI</h3>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {messages.map((m, i) => (
                <div key={i} style={{ alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
                  <div style={{
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    background: m.sender === 'user' ? 'var(--accent-cyan)' : 'var(--bg-color)',
                    color: m.sender === 'user' ? 'var(--bg-color)' : 'var(--text-color)',
                    border: m.sender === 'ai' ? '1px solid var(--border-color)' : 'none',
                    fontSize: '0.95rem',
                    lineHeight: 1.4
                  }}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div style={{ alignSelf: 'flex-start', padding: '0.8rem 1rem', borderRadius: '8px', background: 'var(--bg-color)', border: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2 }}>●</motion.span>
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}>●</motion.span>
                  <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}>●</motion.span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '0.5rem', background: 'var(--bg-color)' }}>
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                style={{
                  flex: 1,
                  padding: '0.8rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-color)',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-main)'
                }}
              />
              <button
                onClick={handleSend}
                style={{
                  padding: '0 1rem',
                  background: 'var(--accent-cyan)',
                  border: 'none',
                  borderRadius: '4px',
                  color: 'var(--bg-color)',
                  cursor: 'pointer'
                }}
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
