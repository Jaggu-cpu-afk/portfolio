import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glitch-wrapper"
      >
        <h1 className="glitch" data-text="404: ERROR">
          404: ERROR
        </h1>
        <h2 style={{ color: 'var(--accent-magenta)', fontFamily: 'var(--font-mono)', fontSize: '1.5rem', marginTop: '1rem', marginBottom: '2rem' }}>
          AI FAILED TO GENERATE THIS PAGE.
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem auto' }}>
          The requested module or routing pathway does not exist in the current neural network. Please return to the primary hub.
        </p>
        
        <Link to="/" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
          Initialize Reboot (Return Home)
        </Link>
      </motion.div>
    </section>
  );
}
