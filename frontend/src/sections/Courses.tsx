import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  instructor: string;
  level: string;
  price: string;
  students: number;
  rating: number;
  gradient: string;
}

const levelColors: Record<string, { bg: string; text: string }> = {
  'Iniciante': { bg: 'rgba(67, 233, 123, 0.15)', text: '#43e97b' },
  'Intermediário': { bg: 'rgba(250, 112, 154, 0.15)', text: '#fa709a' },
  'Avançado': { bg: 'rgba(102, 126, 234, 0.15)', text: '#667eea' },
};

function CourseCard({ course, index }: { course: Course; index: number }) {
  const levelStyle = levelColors[course.level] || levelColors['Iniciante'];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ scale: 1.02, y: -4 }}
      style={{
        minWidth: '300px',
        maxWidth: '300px',
        background: '#111',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 24px 64px rgba(0,0,0,0.5)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
      }}
    >
      {/* Course cover */}
      <div style={{
        height: '160px',
        background: course.gradient,
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '16px',
      }}>
        <span style={{
          padding: '4px 12px',
          borderRadius: '980px',
          background: levelStyle.bg,
          color: levelStyle.text,
          fontSize: '0.75rem',
          fontWeight: 600,
          backdropFilter: 'blur(8px)',
          border: `1px solid ${levelStyle.text}30`,
        }}>
          {course.level}
        </span>

        {/* Abstract shapes for visual interest */}
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
        }} />
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '50px',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.07)',
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: '20px' }}>
        <h3 style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: '#f5f5f7',
          letterSpacing: '-0.3px',
          marginBottom: '6px',
          lineHeight: 1.3,
        }}>
          {course.title}
        </h3>

        <p style={{
          fontSize: '0.85rem',
          color: '#86868b',
          marginBottom: '16px',
        }}>
          com {course.instructor}
        </p>

        {/* Meta */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Star size={13} fill="#fee140" color="#fee140" />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f5f5f7' }}>
              {course.rating.toFixed(1)}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#86868b' }}>
            <Users size={13} />
            <span style={{ fontSize: '0.8rem' }}>
              {course.students.toLocaleString('pt-BR')} alunos
            </span>
          </div>
        </div>

        {/* Price + CTA */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          <span style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#f5f5f7',
            letterSpacing: '-0.5px',
          }}>
            {course.price}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '980px',
              background: '#0071e3',
              color: '#fff',
              fontSize: '0.82rem',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Ver curso
            <ArrowRight size={13} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/api/courses')
      .then((r) => r.json())
      .then(setCourses)
      .catch(() => {
        // fallback
        setCourses([
          { id: 1, title: 'JavaScript Avançado', instructor: 'Carlos Silva', level: 'Avançado', price: 'R$ 297', students: 12400, rating: 4.9, gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
          { id: 2, title: 'React + TypeScript', instructor: 'Ana Rodrigues', level: 'Intermediário', price: 'R$ 197', students: 8900, rating: 4.8, gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
          { id: 3, title: 'Node.js na Prática', instructor: 'Lucas Mendes', level: 'Iniciante', price: 'R$ 147', students: 15200, rating: 4.7, gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
          { id: 4, title: 'UI/UX Design System', instructor: 'Mariana Costa', level: 'Avançado', price: 'R$ 397', students: 5600, rating: 5.0, gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
          { id: 5, title: 'Python para Data Science', instructor: 'Felipe Lima', level: 'Iniciante', price: 'R$ 247', students: 18700, rating: 4.8, gradient: 'linear-gradient(135deg, #fa709a, #fee140)' },
        ]);
      });
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <section
      id="cursos"
      style={{
        padding: '120px 0',
        background: 'linear-gradient(180deg, #000 0%, #080808 100%)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <p style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#0071e3',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              Cursos em destaque
            </p>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              letterSpacing: '-2px',
              color: '#f5f5f7',
              lineHeight: 1.1,
            }}>
              Os mais procurados
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('left')}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#f5f5f7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll('right')}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#f5f5f7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          padding: '12px 24px 24px',
          paddingLeft: 'max(24px, calc((100vw - 1200px) / 2 + 24px))',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {courses.map((course, i) => (
          <CourseCard key={course.id} course={course} index={i} />
        ))}

        {/* View all card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          style={{
            minWidth: '220px',
            border: '1px dashed rgba(255,255,255,0.12)',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '40px 24px',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(0,113,227,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <ArrowRight size={20} color="#0071e3" />
          </div>
          <p style={{ fontSize: '0.95rem', fontWeight: 500, color: '#f5f5f7', textAlign: 'center' }}>
            Ver todos os 287 cursos
          </p>
          <p style={{ fontSize: '0.8rem', color: '#86868b', textAlign: 'center' }}>
            Encontre o curso perfeito para você
          </p>
        </motion.div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
