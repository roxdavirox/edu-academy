import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  { value: 52, suffix: 'K+', label: 'Alunos', description: 'estudando ativamente' },
  { value: 287, suffix: '+', label: 'Cursos', description: 'disponíveis agora' },
  { value: 84, suffix: '+', label: 'Instrutores', description: 'especialistas do mercado' },
  { value: 98, suffix: '%', label: 'Aprovação', description: 'taxa de satisfação' },
];

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      style={{
        padding: '80px 24px',
        background: 'linear-gradient(180deg, #000 0%, #0a0a0a 50%, #000 100%)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '0',
      }}
        className="stats-grid"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '32px 24px',
              position: 'relative',
            }}
          >
            {index > 0 && (
              <div style={{
                position: 'absolute',
                left: 0,
                top: '20%',
                height: '60%',
                width: '1px',
                background: 'rgba(255,255,255,0.08)',
              }} />
            )}

            <div style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-2px',
              color: '#f5f5f7',
              lineHeight: 1,
              marginBottom: '8px',
              background: 'linear-gradient(135deg, #f5f5f7 0%, #86868b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isInView} />
            </div>

            <div style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: '#f5f5f7',
              marginBottom: '4px',
              letterSpacing: '-0.3px',
            }}>
              {stat.label}
            </div>

            <div style={{
              fontSize: '0.85rem',
              color: '#86868b',
            }}>
              {stat.description}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
