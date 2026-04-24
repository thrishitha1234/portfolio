import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function Hero() {
  return (
    <section
      className="section"
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '900px' }}
      >
        <h1
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            lineHeight: '0.95',
            marginBottom: '1.2rem',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            background: 'linear-gradient(90deg, #ffffff, var(--accent-glow))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            width: 'fit-content',
          }}
        >
          Thrishitha Kalvakota
        </h1>

        <h2
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            color: 'rgba(255,255,255,0.78)',
            marginBottom: '1.5rem',
            fontWeight: 650,
          }}
        >
          Software Engineer | Data & AI Systems
        </h2>

        <p
          style={{
            maxWidth: '720px',
            fontSize: '1.1rem',
            lineHeight: '1.9',
            marginBottom: '2.4rem',
            color: 'rgba(255,255,255,0.74)',
          }}
        >
          I build machine learning solutions, scalable data pipelines, backend systems,
          and full-stack applications.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <a href="mailto:laxmithrishitha.kalvakota@sjsu.edu" className="btn">
            <Mail size={20} /> Contact Me
          </a>

          <a
            href="#experience"
            className="btn-outline"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 18px',
              borderRadius: '10px',
              border: '1px solid var(--accent-glow)',
              color: 'var(--accent-glow)',
              textDecoration: 'none',
            }}
          >
            <FileText size={18} /> Experience
          </a>

          <a
            href="#projects"
            className="btn-outline"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 18px',
              borderRadius: '10px',
              border: '1px solid var(--accent-glow)',
              color: 'var(--accent-glow)',
              textDecoration: 'none',
            }}
          >
            <FileText size={18} /> Projects
          </a>

          <a
            href="https://linkedin.com/in/thrishitha"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
              borderRadius: '10px',
              border: '1px solid var(--accent-glow)',
              color: 'var(--accent-glow)',
              textDecoration: 'none',
            }}
          >
            <LinkedinIcon />
          </a>

          <a
            href="https://github.com/thrishitha"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
              borderRadius: '10px',
              border: '1px solid var(--accent-glow)',
              color: 'var(--accent-glow)',
              textDecoration: 'none',
            }}
          >
            <GithubIcon />
          </a>
        </div>
      </motion.div>
    </section>
  );
}