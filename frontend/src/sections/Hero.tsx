import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Play, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* Gradient mesh background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(102, 126, 234, 0.25) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(118, 75, 162, 0.15) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 20% 70%, rgba(0, 113, 227, 0.12) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      {/* Animated grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '120px 24px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '0',
      }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} style={{ marginBottom: '32px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '980px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
              fontSize: '0.8rem',
              fontWeight: 500,
              color: '#ababab',
              letterSpacing: '0.02em',
            }}>
              <Sparkles size={13} color="#0071e3" />
              <span>Plataforma #1 de Educação no Brasil</span>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginLeft: '4px',
                padding: '2px 8px',
                borderRadius: '980px',
                background: 'rgba(0,113,227,0.2)',
                color: '#4da3ff',
                fontSize: '0.7rem',
                fontWeight: 600,
              }}>
                NOVO
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-3px',
              color: '#f5f5f7',
              maxWidth: '900px',
              marginBottom: '28px',
            }}
          >
            Aprenda. Cresça.{' '}
            <span style={{
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #0071e3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Transforme-se.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              lineHeight: 1.6,
              color: '#86868b',
              maxWidth: '560px',
              marginBottom: '48px',
            }}
          >
            Acesse mais de 280 cursos criados pelos melhores especialistas do mercado. Aprenda no seu ritmo e conquiste a carreira que você merece.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              marginBottom: '80px',
            }}
          >
            <motion.a
              href="#precos"
              whileHover={{ scale: 1.03, backgroundColor: '#0077ed' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                borderRadius: '980px',
                background: '#0071e3',
                color: '#fff',
                fontSize: '1.05rem',
                fontWeight: 500,
                letterSpacing: '-0.2px',
                textDecoration: 'none',
                transition: 'background 0.2s ease',
              }}
            >
              Começar Grátis
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#cursos"
              whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.3)', color: '#f5f5f7' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                borderRadius: '980px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.16)',
                color: '#ababab',
                fontSize: '1.05rem',
                fontWeight: 400,
                letterSpacing: '-0.2px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Play size={16} fill="currentColor" />
              Ver cursos
            </motion.a>
          </motion.div>

          {/* Hero Visual — Floating UI Mockup */}
          <motion.div
            variants={itemVariants}
            style={{ width: '100%', maxWidth: '860px', position: 'relative' }}
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 40px 120px rgba(102,126,234,0.2), 0 0 0 1px rgba(255,255,255,0.05)',
                background: '#111',
              }}
            >
              {/* Mock browser bar */}
              <div style={{
                background: '#1d1d1f',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
                    <div key={i} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div style={{
                  flex: 1,
                  height: '24px',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  color: '#86868b',
                  maxWidth: '360px',
                  margin: '0 auto',
                }}>
                  app.academiapro.com.br
                </div>
              </div>

              {/* Dashboard content */}
              <div style={{ padding: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                {[
                  { title: 'React Avançado', progress: 68, color: '#667eea' },
                  { title: 'Node.js Pro', progress: 45, color: '#f093fb' },
                  { title: 'Design System', progress: 89, color: '#43e97b' },
                ].map((course, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    style={{
                      background: '#1d1d1f',
                      borderRadius: '14px',
                      padding: '20px',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: `linear-gradient(135deg, ${course.color}, ${course.color}88)`,
                      marginBottom: '12px',
                    }} />
                    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f5f5f7', marginBottom: '8px' }}>
                      {course.title}
                    </p>
                    <div style={{
                      height: '4px',
                      background: 'rgba(255,255,255,0.08)',
                      borderRadius: '2px',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        width: `${course.progress}%`,
                        height: '100%',
                        background: `linear-gradient(90deg, ${course.color}, ${course.color}aa)`,
                        borderRadius: '2px',
                      }} />
                    </div>
                    <p style={{ fontSize: '0.7rem', color: '#86868b', marginTop: '6px' }}>
                      {course.progress}% concluído
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              style={{
                position: 'absolute',
                top: '-24px',
                right: '-16px',
                background: 'rgba(17,17,17,0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '14px',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #43e97b, #38f9d7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
              }}>
                🏆
              </div>
              <div>
                <p style={{ fontSize: '0.7rem', color: '#86868b', marginBottom: '2px' }}>Certificado obtido</p>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f5f5f7' }}>React Avançado</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute',
                bottom: '-16px',
                left: '-16px',
                background: 'rgba(17,17,17,0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '14px',
                padding: '14px 20px',
              }}
            >
              <p style={{ fontSize: '0.7rem', color: '#86868b', marginBottom: '4px' }}>Alunos online agora</p>
              <p style={{ fontSize: '1.4rem', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-1px' }}>
                2.847
                <span style={{ fontSize: '0.7rem', fontWeight: 400, color: '#43e97b', marginLeft: '6px' }}>+12%</span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: '#86868b',
        }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Role para baixo</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} color="#86868b" />
        </motion.div>
      </motion.div>
    </section>
  );
}
