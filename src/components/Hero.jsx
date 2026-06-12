import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
      
      {/* Huge Background Watermark */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(8rem, 20vw, 25rem)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 900,
        color: 'rgba(255, 255, 255, 0.02)',
        whiteSpace: 'nowrap',
        zIndex: -1,
        userSelect: 'none',
        pointerEvents: 'none'
      }}>
        JAGAPATHI
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '4rem' }}>
        
        {/* Left Side: Modern Abstract Text */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ zIndex: 1, flex: '1 1 400px', maxWidth: '650px' }}
        >

          
          <h1 style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: 0.9, marginBottom: '2rem', fontFamily: 'var(--font-main)', fontWeight: 800 }}>
            <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '2px var(--text-color)' }}>AI</span>
            <span style={{ display: 'block', color: 'var(--text-color)' }}>ENGINEER.</span>
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '550px', borderLeft: '2px solid var(--border-color)', paddingLeft: '1.5rem' }}>
            I am Jagapathi Naidu M. I craft intelligent solutions using Full-Stack architectures and Generative AI to bridge the gap between design and deep technology.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
              Explore Work <ArrowRight size={20} />
            </a>
            <a href="/resume.pdf" download="Jagapathi_Naidu_Resume.pdf" className="btn btn-secondary" style={{ padding: '1rem 2rem', boxShadow: '0 0 15px rgba(255, 0, 85, 0.2)' }}>
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side: Unique Image Layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          style={{ display: 'flex', justifyContent: 'flex-end', zIndex: 1, flex: '1 1 350px' }}
        >
          <div style={{ 
            position: 'relative', 
            width: '100%', 
            maxWidth: '350px', 
            aspectRatio: '3/4',
            transform: 'rotate(3deg)'
          }}>
            {/* Offset abstract shadow box */}
            <div style={{
              position: 'absolute', top: '30px', left: '-30px',
              width: '100%', height: '100%',
              border: '2px solid var(--accent-magenta)',
              zIndex: 0,
              transition: 'all 0.3s ease'
            }} className="hero-shadow-box"></div>
            
            <div style={{
              position: 'absolute', bottom: '-20px', right: '-20px',
              width: '50%', height: '50%',
              background: 'repeating-linear-gradient(45deg, var(--border-color), var(--border-color) 2px, transparent 2px, transparent 10px)',
              zIndex: 0
            }}></div>
            
            {/* Image Container */}
            <div style={{ 
              width: '100%', 
              height: '100%', 
              overflow: 'hidden', 
              position: 'relative',
              zIndex: 1,
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)'
            }}>
              <img 
                src="/profile.png" 
                alt="Jagapathi Naidu M" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  filter: 'contrast(1.1) grayscale(0.2)'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="display: flex; height: 100%; align-items: center; justify-content: center; text-align: center; color: var(--accent-magenta); font-family: var(--font-mono);">[PROFILE.PNG NOT FOUND]</div>';
                }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
