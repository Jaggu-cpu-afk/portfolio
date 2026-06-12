import { motion } from 'framer-motion';

const educationData = [
  {
    institution: "Amrita Viswa Vidyapeetham",
    degree: "Graduation (B.Tech)",
    score: "70%",
    color: "var(--accent-cyan)",
    year: "Present"
  },
  {
    institution: "Sri Chaitanya Vidyaniketan",
    degree: "Secondary School",
    score: "78%",
    color: "var(--accent-magenta)",
    year: "Completed"
  },
  {
    institution: "Abhyas School",
    degree: "Primary School",
    score: "97%",
    color: "var(--accent-yellow)",
    year: "Completed"
  }
];

export default function Education() {
  return (
    <section id="education" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Education Timeline
      </motion.h2>
      
      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* The Chain / Glowing Line */}
        <div style={{
          position: 'absolute',
          left: '50px',
          top: '20px',
          bottom: '20px',
          width: '2px',
          background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-magenta), var(--accent-yellow))',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
          zIndex: 0
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '2rem', zIndex: 1 }}
            >
              {/* Glowing Node */}
              <div style={{
                minWidth: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--bg-color)',
                border: `4px solid ${item.color}`,
                boxShadow: `0 0 15px ${item.color}`,
                marginLeft: '41px' // Align with the line
              }} />
              
              {/* Content Card */}
              <div className="cyber-card" style={{ 
                flex: 1, 
                padding: '2rem', 
                borderLeft: `4px solid ${item.color}`,
                background: 'var(--bg-card)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 style={{ color: 'var(--text-color)', fontFamily: 'var(--font-mono)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                      {item.institution}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{item.degree}</p>
                  </div>
                  <div style={{ 
                    padding: '0.5rem 1rem', 
                    background: 'rgba(255,255,255,0.05)', 
                    border: `1px solid ${item.color}`, 
                    borderRadius: '4px',
                    color: item.color,
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    boxShadow: `inset 0 0 10px rgba(255,255,255,0.02)`
                  }}>
                    {item.score}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
