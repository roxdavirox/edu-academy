import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rafael Mendonça',
    role: 'Senior Frontend Dev @ Nubank',
    initials: 'RM',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    stars: 5,
    quote: 'A AcademiaPro foi o divisor de águas na minha carreira. Em 6 meses passei de júnior para sênior numa das maiores fintechs do Brasil. O conteúdo é denso, prático e os instrutores são excepcionais.',
    course: 'React + TypeScript',
  },
  {
    name: 'Juliana Ferreira',
    role: 'Data Scientist @ iFood',
    initials: 'JF',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    stars: 5,
    quote: 'Tentei aprender Python em vários lugares, mas foi aqui que finalmente fez sentido. A metodologia é diferente — você aprende fazendo projetos reais, não apenas teoria. Em 3 meses estava aplicando machine learning na produção.',
    course: 'Python para Data Science',
  },
  {
    name: 'Thiago Nascimento',
    role: 'Tech Lead @ TOTVS',
    initials: 'TN',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    stars: 5,
    quote: 'Já fiz mais de 12 cursos na plataforma. A qualidade é consistente, os certificados são reconhecidos e a comunidade é incrível. Hoje uso a AcademiaPro como referência para toda a minha equipe.',
    course: 'Node.js na Prática',
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        padding: '120px 24px',
        background: 'linear-gradient(180deg, #080808 0%, #000 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            Depoimentos
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
            O que nossos alunos dizem
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#86868b',
            maxWidth: '460px',
            margin: '0 auto',
          }}>
            Mais de 52 mil profissionais já transformaram suas carreiras com a AcademiaPro.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
          className="testimonials-grid"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: index === 0 ? -40 : index === 2 ? 40 : 0, y: index === 1 ? 40 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              whileHover={{ y: -6 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                backdropFilter: 'blur(12px)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Quote icon */}
              <div style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.12 }}>
                <Quote size={40} color="#f5f5f7" />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px' }}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} fill="#fee140" color="#fee140" />
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: '#ababab',
                fontStyle: 'normal',
                flex: 1,
              }}>
                "{t.quote}"
              </p>

              {/* Course badge */}
              <div style={{
                display: 'inline-flex',
                alignSelf: 'flex-start',
                padding: '4px 12px',
                borderRadius: '980px',
                background: 'rgba(0,113,227,0.12)',
                color: '#4da3ff',
                fontSize: '0.75rem',
                fontWeight: 500,
              }}>
                {t.course}
              </div>

              {/* Author */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: t.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#fff',
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f5f5f7', letterSpacing: '-0.2px' }}>
                    {t.name}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#86868b', marginTop: '2px' }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            marginTop: '60px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '4.9/5', label: 'Avaliação média' },
            { value: '52K+', label: 'Avaliações recebidas' },
            { value: '98%', label: 'Recomendariam a amigos' },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-1px' }}>
                {item.value}
              </p>
              <p style={{ fontSize: '0.8rem', color: '#86868b', marginTop: '4px' }}>
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
