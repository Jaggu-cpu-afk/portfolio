import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { GitHubCalendar } from 'react-github-calendar';

const projects = [
  {
    title: 'Smart Study Assistant',
    description: 'AI-powered learning platform that generates notes, MCQs, flashcards, viva questions, and exam preparation content from uploaded PDFs using Generative AI.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Gemini AI'],
    links: { github: 'https://github.com/Jaggu-cpu-afk/smart-study-assistant' }
  },
  {
    title: 'HARMONICA – Music Visualization',
    description: 'An interactive web application that creates dynamic visual effects synchronized with music playback, providing an engaging audio-visual experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web Audio API'],
    links: { github: 'https://github.com/Jaggu-cpu-afk/HARMONICA_UID_PROJECT' }
  },
  {
    title: 'Music Composer',
    description: 'A dedicated application for composing and organizing music, featuring an intuitive interface and robust playback controls.',
    tech: ['JavaScript', 'React', 'Audio Processing'],
    links: { github: 'https://github.com/Jaggu-cpu-afk/music-composer' }
  },
  {
    title: 'AI-Based Age Verification System',
    description: 'An AI-driven solution that estimates user age through facial analysis and classifies users into age groups for implementing access restrictions.',
    tech: ['Python', 'Facial Analysis', 'Classification'],
    links: { github: 'https://github.com/Jaggu-cpu-afk' }
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Featured Work
      </motion.h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map((project, i) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="cyber-card"
            style={{ 
              padding: '2.5rem', 
              display: 'flex', 
              flexDirection: 'column'
            }}
          >
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '1rem', 
              color: 'var(--text-color)',
              fontFamily: 'var(--font-mono)'
            }}>{project.title}</h3>
            
            <p style={{ 
              color: 'var(--text-muted)', 
              marginBottom: '2rem', 
              flexGrow: 1, 
              fontSize: '1rem' 
            }}>
              {project.description}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
              {project.tech.map(t => (
                <span key={t} style={{ 
                  color: 'var(--accent-cyan)', 
                  fontSize: '0.85rem', 
                  fontFamily: 'var(--font-mono)',
                  border: '1px solid var(--border-color)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '3px'
                }}>
                  {t}
                </span>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                <FaGithub size={20} /> SOURCE
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Calendar Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ marginTop: '8rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-color)', letterSpacing: '2px' }}>
          <span style={{ color: 'var(--accent-cyan)' }}>//</span> CODE CONTRIBUTIONS
        </h3>
        <div className="cyber-card" style={{ padding: '2rem', width: '100%', overflowX: 'auto', display: 'flex', justifyContent: 'center', background: 'var(--bg-card)' }}>
          <GitHubCalendar 
            username="Jaggu-cpu-afk" 
            blockSize={16}
            blockMargin={6}
            colorScheme="dark"
            theme={{
              dark: ['#1e293b', '#0a3a40', '#0e5e66', '#12828c', '#00f0ff']
            }}
            fontSize={14}
            hideTotalCount={false}
            hideColorLegend={false}
          />
        </div>
      </motion.div>
    </section>
  );
}
