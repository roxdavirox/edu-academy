import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true); // show success even on error for demo
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        padding: '120px 24px',
        background: '#000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(102,126,234,0.12) 0%, rgba(118,75,162,0.08) 40%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Top border gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(102,126,234,0.4), rgba(118,75,162,0.4), transparent)',
      }} />

      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        >
          {/* Icon */}
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '18px',
            background: 'linear-gradient(135deg, rgba(102,126,234,0.2), rgba(118,75,162,0.2))',
            border: '1px solid rgba(102,126,234,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 32px',
          }}>
            <Mail size={28} color="#667eea" />
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 700,
            letterSpacing: '-2.5px',
            color: '#f5f5f7',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}>
            Comece sua jornada hoje
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: '#86868b',
            lineHeight: 1.6,
            marginBottom: '48px',
            maxWidth: '520px',
            margin: '0 auto 48px',
          }}>
            Junte-se a mais de 52 mil profissionais que já estão aprendendo. Receba acesso gratuito ao nosso curso de boas-vindas + newsletter exclusiva com dicas de carreira.
          </p>

          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                display: 'flex',
                gap: '12px',
                maxWidth: '500px',
                margin: '0 auto',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <div style={{
                flex: 1,
                minWidth: '240px',
                position: 'relative',
              }}>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: '980px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#f5f5f7',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s, background 0.2s',
                    fontFamily: 'inherit',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,113,227,0.6)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, backgroundColor: '#0077ed' }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '980px',
                  background: '#0071e3',
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 500,
                  border: 'none',
                  cursor: loading ? 'wait' : 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s',
                  opacity: loading ? 0.8 : 1,
                }}
              >
                {loading ? 'Inscrevendo...' : 'Quero Começar'}
                {!loading && <ArrowRight size={16} />}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                padding: '32px',
                borderRadius: '20px',
                background: 'rgba(67,233,123,0.08)',
                border: '1px solid rgba(67,233,123,0.2)',
                maxWidth: '400px',
                margin: '0 auto',
              }}
            >
              <CheckCircle size={40} color="#43e97b" />
              <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f5f5f7' }}>
                Inscrição realizada com sucesso!
              </p>
              <p style={{ fontSize: '0.9rem', color: '#86868b' }}>
                Verifique seu e-mail para acessar o curso gratuito.
              </p>
            </motion.div>
          )}

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{
              marginTop: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            {/* Avatars stack */}
            <div style={{ display: 'flex' }}>
              {[
                'linear-gradient(135deg, #667eea, #764ba2)',
                'linear-gradient(135deg, #f093fb, #f5576c)',
                'linear-gradient(135deg, #43e97b, #38f9d7)',
                'linear-gradient(135deg, #4facfe, #00f2fe)',
              ].map((g, i) => (
                <div key={i} style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: g,
                  border: '2px solid #000',
                  marginLeft: i > 0 ? '-8px' : '0',
                }} />
              ))}
            </div>
            <p style={{ fontSize: '0.85rem', color: '#86868b' }}>
              <strong style={{ color: '#f5f5f7' }}>+320 pessoas</strong> se inscreveram esta semana
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
