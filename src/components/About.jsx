import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Side: Bio */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title" style={{ fontSize: '4.5rem', marginBottom: '2rem', borderBottom: 'none' }}>
            WHO<br/>AM I?
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
            Hey! I'm <span style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>Jagapathi Naidu M</span> — a B.Tech student who genuinely enjoys making applications smarter and systems faster.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            I am deeply passionate about Artificial Intelligence, Full-Stack Development, and Generative AI. I aim to create technology that makes a meaningful impact, solving real-world problems.
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            Through continuous learning and hands-on projects, I write code that brings innovative ideas to life. Based in India — shipping from the desk.
          </p>
        </motion.div>

        {/* Right Side: Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center' }}
        >
          <div className="stat-card" style={{ borderLeft: '4px solid var(--accent-cyan)' }}>
            <h2 style={{ color: 'var(--text-color)' }}>7.02</h2>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--accent-cyan)' }}>
              CGPA — Consistent and growing.
            </p>
          </div>
          
          <div className="stat-card" style={{ borderLeft: '4px solid var(--accent-magenta)' }}>
            <h2 style={{ color: 'var(--text-color)' }}>4+</h2>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--accent-magenta)' }}>
              Real Projects. Shipped. Working.
            </p>
          </div>
          
          <div className="stat-card" style={{ borderLeft: '4px solid var(--accent-yellow)' }}>
            <h2 style={{ color: 'var(--text-color)' }}>100%</h2>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', textTransform: 'uppercase', color: 'var(--accent-yellow)' }}>
              Dedication to writing clean code.
            </p>
          </div>
        </motion.div>
        
      </div>

    </section>
  );
}
