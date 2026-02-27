import { motion } from 'framer-motion';
import { GraduationCap, Twitter, Linkedin, Github, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  Produto: [
    { label: 'Cursos', href: '#cursos' },
    { label: 'Trilhas de Aprendizado', href: '#' },
    { label: 'Certificados', href: '#' },
    { label: 'Preços', href: '#precos' },
    { label: 'Para Empresas', href: '#' },
  ],
  Empresa: [
    { label: 'Sobre nós', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Carreiras', href: '#' },
    { label: 'Imprensa', href: '#' },
    { label: 'Parceiros', href: '#' },
  ],
  Recursos: [
    { label: 'Central de Ajuda', href: '#' },
    { label: 'Comunidade', href: '#' },
    { label: 'Eventos', href: '#' },
    { label: 'Newsletter', href: '#' },
    { label: 'Status do Sistema', href: '#' },
  ],
  Legal: [
    { label: 'Termos de Uso', href: '#' },
    { label: 'Privacidade', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'LGPD', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer style={{
      background: '#000',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '80px 24px 40px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            display: 'grid',
            gridTemplateColumns: '280px repeat(4, 1fr)',
            gap: '48px',
            marginBottom: '64px',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #0071e3, #764ba2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <GraduationCap size={20} color="#fff" />
              </div>
              <span style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #f5f5f7, #86868b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.5px',
              }}>
                AcademiaPro
              </span>
            </div>

            <p style={{
              fontSize: '0.875rem',
              color: '#86868b',
              lineHeight: 1.65,
              marginBottom: '24px',
              maxWidth: '220px',
            }}>
              A plataforma de educação que acelera carreiras em tecnologia desde 2020.
            </p>

            {/* Social */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, color: '#f5f5f7' }}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#86868b',
                    transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#f5f5f7',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>
                {category}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: '0.875rem',
                        color: '#86868b',
                        transition: 'color 0.2s',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f5f7')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#86868b')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: '#86868b' }}>
            © 2026 AcademiaPro Educação Digital. Todos os direitos reservados.
          </p>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {['Termos', 'Privacidade', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: '0.8rem',
                  color: '#86868b',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f5f7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#86868b')}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: span 4 !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: span 2 !important;
          }
        }
      `}</style>
    </footer>
  );
}
