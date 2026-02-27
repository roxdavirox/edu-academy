import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Cursos', href: '#cursos' },
  { label: 'Recursos', href: '#como-funciona' },
  { label: 'Preços', href: '#precos' },
  { label: 'Blog', href: '#' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        background: scrolled ? 'rgba(0, 0, 0, 0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      }}
    >
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '32px',
      }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #0071e3, #764ba2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <GraduationCap size={18} color="#fff" />
          </div>
          <span style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #f5f5f7, #86868b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.5px',
          }}>
            AcademiaPro
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          flex: 1,
          justifyContent: 'center',
        }} className="nav-links-desktop">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: 400,
                color: '#86868b',
                transition: 'color 0.2s ease',
                letterSpacing: '-0.1px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f5f7')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#86868b')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <a href="#" style={{
            fontSize: '0.875rem',
            color: '#86868b',
            fontWeight: 400,
            transition: 'color 0.2s',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f5f7')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#86868b')}
          >
            Entrar
          </a>
          <motion.a
            href="#precos"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 18px',
              borderRadius: '980px',
              background: '#0071e3',
              color: '#fff',
              fontSize: '0.875rem',
              fontWeight: 400,
              letterSpacing: '-0.1px',
              transition: 'background 0.2s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#0077ed')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#0071e3')}
          >
            Começar Grátis
          </motion.a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#f5f5f7',
              padding: '4px',
              display: 'none',
            }}
            className="mobile-menu-btn"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{
            background: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: '#f5f5f7', fontSize: '1.1rem', fontWeight: 400 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#precos"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              padding: '12px 24px',
              borderRadius: '980px',
              background: '#0071e3',
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 400,
              marginTop: '8px',
            }}
          >
            Começar Grátis
          </a>
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
