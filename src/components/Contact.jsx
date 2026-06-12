import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" style={{ textAlign: 'center', minHeight: '80vh' }}>
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Get In Touch
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem' }}
      >
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </motion.p>
      
      <motion.a 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        href="mailto:jagapathinaidu07122006@gmail.com" 
        className="btn btn-primary"
        style={{ fontSize: '1.2rem', padding: '1rem 2.5rem', marginBottom: '4rem' }}
      >
        Say Hello <Mail size={24} style={{ marginLeft: '0.5rem' }} />
      </motion.a>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '4rem' }}
      >
        <a href="https://github.com/Jaggu-cpu-afk" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
          <FaGithub size={32} />
        </a>
        <a href="https://instagram.com/jagg.u071206" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
          <FaInstagram size={32} />
        </a>
        <a href="mailto:jagapathinaidu07122006@gmail.com" className="social-link" title="Email">
          <Mail size={32} />
        </a>
      </motion.div>
      
    </section>
  );
}
