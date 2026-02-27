import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Courses endpoint
app.get('/api/courses', (req, res) => {
  res.json([
    { id: 1, title: 'JavaScript Avançado', instructor: 'Carlos Silva', level: 'Avançado', price: 'R$ 297', students: 12400, rating: 4.9, gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { id: 2, title: 'React + TypeScript', instructor: 'Ana Rodrigues', level: 'Intermediário', price: 'R$ 197', students: 8900, rating: 4.8, gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    { id: 3, title: 'Node.js na Prática', instructor: 'Lucas Mendes', level: 'Iniciante', price: 'R$ 147', students: 15200, rating: 4.7, gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
    { id: 4, title: 'UI/UX Design System', instructor: 'Mariana Costa', level: 'Avançado', price: 'R$ 397', students: 5600, rating: 5.0, gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
    { id: 5, title: 'Python para Data Science', instructor: 'Felipe Lima', level: 'Iniciante', price: 'R$ 247', students: 18700, rating: 4.8, gradient: 'linear-gradient(135deg, #fa709a, #fee140)' },
  ]);
});

// Stats endpoint
app.get('/api/stats', (req, res) => {
  res.json({
    students: 52000,
    courses: 287,
    instructors: 84,
    approvalRate: 98
  });
});

// Newsletter endpoint
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  console.log('New subscriber:', email);
  res.json({ success: true, message: 'Inscrição realizada com sucesso!' });
});

app.listen(4200, () => console.log('Backend running on port 4200'));
