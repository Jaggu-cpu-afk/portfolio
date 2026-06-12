export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '3rem 2rem',
      borderTop: '1px solid var(--border-color)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.9rem',
      color: 'var(--text-muted)',
      background: 'var(--bg-color)',
    }}>
      <p style={{ color: 'var(--text-color)', marginBottom: '0.5rem' }}>
        © {new Date().getFullYear()} Jagapathi Naidu M.
      </p>
      <p style={{ fontSize: '0.8rem' }}>
        Designed & Built from scratch.
      </p>
    </footer>
  );
}
