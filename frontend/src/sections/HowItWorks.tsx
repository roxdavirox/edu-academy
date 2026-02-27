import { motion } from 'framer-motion';
import { Search, BookOpen, Trophy } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Escolha seu curso',
    description: 'Explore nossa biblioteca com mais de 280 cursos organizados por área, nível e duração. Use os filtros inteligentes para encontrar exatamente o que você precisa.',
    color: '#667eea',
    side: 'left',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Aprenda no seu ritmo',
    description: 'Acesse aulas em vídeo HD, material complementar, exercícios práticos e projetos reais. Salve para offline e estude de qualquer dispositivo, onde e quando quiser.',
    color: '#43e97b',
    side: 'right',
  },
  {
    number: '03',
    icon: Trophy,
    title: 'Conquiste seu certificado',
    description: 'Conclua o curso, passe na avaliação final e receba seu certificado digital reconhecido pelo mercado. Compartilhe no LinkedIn e destaque-se entre os concorrentes.',
    color: '#fa709a',
    side: 'left',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      style={{
        padding: '120px 24px',
        background: '#000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0,113,227,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ textAlign: 'center', marginBottom: '96px' }}
        >
          <p style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#0071e3',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Como funciona
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-2px',
            color: '#f5f5f7',
            maxWidth: '560px',
            margin: '0 auto 20px',
            lineHeight: 1.1,
          }}>
            Simples assim
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#86868b',
            maxWidth: '460px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Três passos para transformar sua carreira. Sem complicação, sem mistério.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: step.side === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 80px 1fr',
                gap: '40px',
                alignItems: 'center',
                marginBottom: index < steps.length - 1 ? '0' : '0',
              }}
              className="how-step"
            >
              {/* Left content or spacer */}
              <div style={{
                textAlign: step.side === 'left' ? 'right' : 'left',
                padding: '40px 0',
              }}
                className={step.side === 'right' ? 'step-empty-left' : ''}
              >
                {step.side === 'left' ? (
                  <StepContent step={step} />
                ) : (
                  <div />
                )}
              </div>

              {/* Center connector */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
              }}>
                {/* Line above */}
                {index > 0 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{
                      width: '2px',
                      height: '60px',
                      background: `linear-gradient(180deg, rgba(255,255,255,0.06) 0%, ${step.color}40 100%)`,
                      marginBottom: '0',
                      transformOrigin: 'top',
                    }}
                  />
                )}

                {/* Circle with icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: `${step.color}15`,
                    border: `2px solid ${step.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    flexShrink: 0,
                    boxShadow: `0 0 30px ${step.color}20`,
                  }}
                >
                  <step.icon size={28} color={step.color} />
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: step.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    color: '#000',
                  }}>
                    {index + 1}
                  </div>
                </motion.div>

                {/* Line below */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                    style={{
                      width: '2px',
                      height: '60px',
                      background: `linear-gradient(180deg, ${step.color}40 0%, rgba(255,255,255,0.06) 100%)`,
                      transformOrigin: 'top',
                    }}
                  />
                )}
              </div>

              {/* Right content or spacer */}
              <div style={{
                padding: '40px 0',
              }}
                className={step.side === 'left' ? 'step-empty-right' : ''}
              >
                {step.side === 'right' ? (
                  <StepContent step={step} />
                ) : (
                  <div />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .how-step {
            grid-template-columns: 60px 1fr !important;
          }
          .step-empty-left, .step-empty-right {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function StepContent({ step }: { step: typeof steps[0] }) {
  return (
    <div>
      <p style={{
        fontSize: '0.75rem',
        fontWeight: 700,
        color: step.color,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '12px',
      }}>
        Passo {step.number}
      </p>
      <h3 style={{
        fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
        fontWeight: 700,
        color: '#f5f5f7',
        letterSpacing: '-0.5px',
        marginBottom: '16px',
        lineHeight: 1.2,
      }}>
        {step.title}
      </h3>
      <p style={{
        fontSize: '1rem',
        lineHeight: 1.7,
        color: '#86868b',
        maxWidth: '380px',
      }}>
        {step.description}
      </p>
    </div>
  );
}
