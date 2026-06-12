import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--card-border)' : 'none'
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '45px',
          height: '45px',
          border: '2px solid var(--accent-cyan)',
          borderRadius: '8px',
          background: 'rgba(0, 240, 255, 0.05)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 800,
          fontSize: '1.3rem',
          color: 'var(--text-color)',
          textDecoration: 'none',
          boxShadow: '0 0 15px rgba(0, 240, 255, 0.15)',
          transition: 'all 0.3s ease',
          letterSpacing: '-1px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 240, 255, 0.4)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.15)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
        >
          J<span style={{ color: 'var(--accent-magenta)' }}>N</span>
        </a>
        <div style={{ display: 'flex', gap: '2rem', fontWeight: 600 }}>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
