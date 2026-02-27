import { motion } from 'framer-motion';
import { Zap, Shield, BarChart3, Globe, Clock, Award } from 'lucide-react';

const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const features = [
  {
    icon: Zap,
    title: 'Aprendizado Acelerado',
    description: 'Metodologia baseada em ciência cognitiva para você absorver conhecimento 3x mais rápido com exercícios práticos e projetos reais.',
    size: 'normal',
    gradient: 'linear-gradient(135deg, #667eea22, #764ba222)',
    iconColor: '#667eea',
  },
  {
    icon: Shield,
    title: 'Certificados Reconhecidos',
    description: 'Certificados aceitos pelas maiores empresas do Brasil e do mundo. Adicione direto ao seu LinkedIn.',
    size: 'normal',
    gradient: 'linear-gradient(135deg, #43e97b22, #38f9d722)',
    iconColor: '#43e97b',
  },
  {
    icon: BarChart3,
    title: 'Acompanhe seu Progresso',
    description: 'Dashboard inteligente com métricas detalhadas, metas semanais e análise de performance personalizada.',
    size: 'normal',
    gradient: 'linear-gradient(135deg, #f093fb22, #f5576c22)',
    iconColor: '#f093fb',
  },
  {
    icon: Globe,
    title: 'Comunidade Global de Devs',
    description: 'Entre para uma comunidade de +52 mil profissionais. Faça networking, tire dúvidas em tempo real e colabore em projetos open source. Nossa comunidade é ativa 24/7 com mentores disponíveis.',
    size: 'large',
    gradient: 'linear-gradient(135deg, #4facfe22, #00f2fe22)',
    iconColor: '#4facfe',
  },
  {
    icon: Clock,
    title: 'Acesso Vitalício',
    description: 'Comprou, é seu para sempre. Acesse quando quiser, no ritmo que precisar, em qualquer dispositivo.',
    size: 'large',
    gradient: 'linear-gradient(135deg, #fa709a22, #fee14022)',
    iconColor: '#fa709a',
  },
  {
    icon: Award,
    title: 'Instrutores de Elite',
    description: 'Aprenda com profissionais que trabalham nas maiores empresas de tecnologia do mundo.',
    size: 'normal',
    gradient: 'linear-gradient(135deg, #a18cd122, #fbc2eb22)',
    iconColor: '#a18cd1',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: easeOut },
  }),
};

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      style={{
        background: `${feature.gradient}, rgba(255,255,255,0.03)`,
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        cursor: 'default',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.16)';
        (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Icon */}
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: `${feature.iconColor}20`,
        border: `1px solid ${feature.iconColor}30`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <feature.icon size={22} color={feature.iconColor} />
      </div>

      <div>
        <h3 style={{
          fontSize: '1.1rem',
          fontWeight: 600,
          color: '#f5f5f7',
          letterSpacing: '-0.3px',
          marginBottom: '10px',
        }}>
          {feature.title}
        </h3>
        <p style={{
          fontSize: '0.9rem',
          lineHeight: 1.65,
          color: '#86868b',
        }}>
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section
      style={{
        padding: '120px 24px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ textAlign: 'center', marginBottom: '72px' }}
      >
        <p style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          color: '#0071e3',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          Por que escolher a AcademiaPro?
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          letterSpacing: '-2px',
          color: '#f5f5f7',
          maxWidth: '640px',
          margin: '0 auto 20px',
          lineHeight: 1.1,
        }}>
          Tudo que você precisa para crescer
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#86868b',
          maxWidth: '520px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          Uma plataforma completa com as ferramentas certas para acelerar sua carreira em tecnologia.
        </p>
      </motion.div>

      {/* Bento grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'auto auto',
        gap: '16px',
      }}
        className="features-bento"
      >
        {/* Row 1: 3 cards */}
        {features.slice(0, 3).map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}

        {/* Row 2: 2 large + 1 normal */}
        <div style={{ gridColumn: 'span 2' }}>
          <FeatureCard feature={features[3]} index={3} />
        </div>
        <div style={{ gridColumn: 'span 1', display: 'grid', gridTemplateRows: '1fr 1fr', gap: '16px' }}>
          <FeatureCard feature={features[4]} index={4} />
          <FeatureCard feature={features[5]} index={5} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .features-bento {
            grid-template-columns: 1fr 1fr !important;
          }
          .features-bento > div[style*="span 2"] {
            grid-column: span 2 !important;
          }
          .features-bento > div[style*="span 1"] {
            grid-column: span 2 !important;
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .features-bento {
            grid-template-columns: 1fr !important;
          }
          .features-bento > div[style*="span 2"],
          .features-bento > div[style*="span 1"] {
            grid-column: span 1 !important;
          }
          .features-bento > div[style*="span 1"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
