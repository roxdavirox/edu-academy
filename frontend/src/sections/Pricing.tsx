import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Gratuito',
    price: 'R$ 0',
    period: 'para sempre',
    description: 'Comece sua jornada de aprendizado sem gastar nada.',
    cta: 'Começar Grátis',
    ctaStyle: 'ghost',
    popular: false,
    features: [
      'Acesso a 20 cursos gratuitos',
      'Certificado de conclusão básico',
      'Comunidade Discord',
      'Suporte por e-mail',
      '5GB de espaço para projetos',
    ],
    missing: [
      'Cursos premium',
      'Mentoria individual',
      'Download offline',
    ],
  },
  {
    name: 'Pro',
    price: 'R$ 97',
    period: 'por mês',
    description: 'Para profissionais sérios que querem acelerar a carreira.',
    cta: 'Assinar o Pro',
    ctaStyle: 'primary',
    popular: true,
    features: [
      'Acesso ilimitado a todos os cursos',
      'Certificados reconhecidos pelo mercado',
      'Download offline ilimitado',
      'Mentoria em grupo semanal',
      'Projetos práticos guiados',
      'Suporte prioritário 24/7',
      'Acesso antecipado a novos cursos',
    ],
    missing: [],
  },
  {
    name: 'Enterprise',
    price: 'R$ 297',
    period: 'por usuário/mês',
    description: 'Para times e empresas que investem em educação corporativa.',
    cta: 'Falar com vendas',
    ctaStyle: 'ghost',
    popular: false,
    features: [
      'Tudo do plano Pro',
      'Dashboard de gestão de equipe',
      'Trilhas personalizadas por cargo',
      'Mentoria individual mensal',
      'SLA de suporte garantido',
      'Integração com SSO/LDAP',
      'Relatórios de progresso avançados',
    ],
    missing: [],
  },
];

export default function Pricing() {
  return (
    <section
      id="precos"
      style={{
        padding: '120px 24px',
        background: '#000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(0,113,227,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
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
            Planos e preços
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
            Invista na sua carreira
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#86868b',
            maxWidth: '460px',
            margin: '0 auto',
          }}>
            Planos flexíveis para cada momento da sua jornada. Cancele a qualquer momento.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          alignItems: 'center',
        }}
          className="pricing-grid"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              whileHover={!plan.popular ? { y: -4 } : {}}
              style={{
                background: plan.popular ? 'linear-gradient(145deg, #0d1a2e, #111827)' : 'rgba(255,255,255,0.02)',
                border: plan.popular ? '1px solid rgba(0, 113, 227, 0.4)' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: plan.popular ? '40px 32px' : '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                position: 'relative',
                transform: plan.popular ? 'scale(1.04)' : 'scale(1)',
                boxShadow: plan.popular ? '0 0 60px rgba(0,113,227,0.15), 0 24px 80px rgba(0,0,0,0.5)' : 'none',
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '4px 16px',
                  borderRadius: '980px',
                  background: 'linear-gradient(135deg, #0071e3, #764ba2)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#fff',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <Zap size={12} fill="#fff" />
                  Mais Popular
                </div>
              )}

              {/* Plan header */}
              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: plan.popular ? '#f5f5f7' : '#ababab',
                  marginBottom: '8px',
                  letterSpacing: '-0.2px',
                }}>
                  {plan.name}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#86868b',
                  lineHeight: 1.5,
                }}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{
                    fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                    fontWeight: 700,
                    color: '#f5f5f7',
                    letterSpacing: '-2px',
                  }}>
                    {plan.price}
                  </span>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#86868b', marginTop: '4px' }}>
                  {plan.period}
                </p>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '980px',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  letterSpacing: '-0.1px',
                  transition: 'background 0.2s, border-color 0.2s',
                  ...(plan.ctaStyle === 'primary'
                    ? { background: '#0071e3', color: '#fff', border: 'none' }
                    : { background: 'transparent', color: '#f5f5f7', border: '1px solid rgba(255,255,255,0.2)' }
                  ),
                }}
                onMouseEnter={(e) => {
                  if (plan.ctaStyle === 'primary') (e.currentTarget.style.background = '#0077ed');
                  else (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)');
                }}
                onMouseLeave={(e) => {
                  if (plan.ctaStyle === 'primary') (e.currentTarget.style.background = '#0071e3');
                  else (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)');
                }}
              >
                {plan.cta}
              </motion.button>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

              {/* Features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {plan.features.map((feature) => (
                  <div key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: plan.popular ? 'rgba(0,113,227,0.2)' : 'rgba(67,233,123,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}>
                      <Check size={11} color={plan.popular ? '#4da3ff' : '#43e97b'} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '0.875rem', color: '#ababab', lineHeight: 1.4 }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#86868b',
            marginTop: '48px',
          }}
        >
          Todos os planos incluem garantia de 30 dias ou seu dinheiro de volta. Sem perguntas.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
