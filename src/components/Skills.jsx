import { motion } from 'framer-motion';
import { Code2, Globe, Database, Bot, Wrench } from 'lucide-react';

const skillCategories = [
  { 
    title: 'LANGUAGES', 
    desc: 'Python is my go-to. Java and C are where I started.', 
    skills: ['Java', 'JavaScript', 'Python', 'C'],
    color: '#00f0ff', // var(--accent-cyan)
    icon: <Code2 size={32} strokeWidth={1.5} />
  },
  { 
    title: 'WEB DEV', 
    desc: 'Full-stack capable. I build things people use.', 
    skills: ['HTML', 'CSS', 'React.js', 'Vite', 'Node.js', 'Express.js'],
    color: '#ff0055', // var(--accent-magenta)
    icon: <Globe size={32} strokeWidth={1.5} />
  },
  { 
    title: 'DATABASES', 
    desc: 'I write queries that work on the first try. Sometimes.', 
    skills: ['MongoDB', 'MongoDB Atlas'],
    color: '#ffc107', // var(--accent-yellow)
    icon: <Database size={32} strokeWidth={1.5} />
  },
  { 
    title: 'AI & GEN AI', 
    desc: 'I prompt models. They occasionally prompt me back.', 
    skills: ['Gemini API', 'Prompt Engineering'],
    color: '#00ffaa', 
    icon: <Bot size={32} strokeWidth={1.5} />
  },
  { 
    title: 'DEV TOOLS', 
    desc: 'Git commit messages are my diary.', 
    skills: ['Git', 'GitHub', 'JWT', 'Vercel', 'Render', 'REST APIs'],
    color: '#b000ff',
    icon: <Wrench size={32} strokeWidth={1.5} />
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Technical Arsenal
      </motion.h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
        {skillCategories.map((cat, i) => (
          <motion.div 
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="cyber-card"
            style={{ 
              padding: '2.5rem 2rem', 
              display: 'flex', 
              flexDirection: 'column',
              background: 'linear-gradient(180deg, var(--bg-card) 0%, rgba(10,10,15,0.9) 100%)',
              borderTop: `4px solid ${cat.color}`,
              boxShadow: `inset 0 15px 30px -15px ${cat.color}40, 0 10px 30px rgba(0,0,0,0.5)`,
              borderRadius: '12px'
            }}
          >
            {/* The Icon Block */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: `rgba(255,255,255,0.03)`,
              border: `1px solid ${cat.color}30`,
              color: cat.color,
              marginBottom: '2rem',
              boxShadow: `0 0 20px ${cat.color}20`
            }}>
              {cat.icon}
            </div>

            <h3 style={{ 
              marginBottom: '1rem', 
              fontFamily: 'var(--font-mono)', 
              fontSize: '1.3rem',
              color: '#fff',
              letterSpacing: '1px'
            }}>
              {cat.title}
            </h3>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: '1rem', 
              marginBottom: '2rem',
              minHeight: '50px',
              lineHeight: 1.6
            }}>
              {cat.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: 'auto' }}>
              {cat.skills.map(skill => (
                <span key={skill} style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-color)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-color)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = cat.color;
                  e.currentTarget.style.color = cat.color;
                  e.currentTarget.style.boxShadow = `0 0 10px ${cat.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-color)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
