const fs = require('fs');
const path = require('path');

const slugs = [
  { slug: 'data-science', title: 'Data Science & ML' },
  { slug: 'python-full-stack-ai', title: 'Python Full Stack AI' },
  { slug: 'java-full-stack-ai', title: 'Java Full Stack AI' },
  { slug: 'mern-ai', title: 'MERN Stack with AI' },
  { slug: 'agentic-ai', title: 'Agentic AI' },
  { slug: 'devops-ai', title: 'DevOps with AI' },
  { slug: 'genai', title: 'GenAI' },
  { slug: 'cyber-security-ai-integration', title: 'Cyber Security with AI Integration' },
  { slug: 'ui-ux-ai-integration', title: 'UI/UX with AI Integration' },
  { slug: 'low-code-automation-tool', title: 'Low-code Automation Tool' },
  { slug: 'data-analysis', title: 'Data Analysis' },
  { slug: 'ai-tools', title: 'AI Tools' },
  { slug: 'ai-ml', title: 'AI/ML' },
  { slug: 'dsa', title: 'DSA' },
  { slug: 'reactjs-ai-integration', title: 'ReactJS with AI Integration' },
  { slug: 'backend-nodejs-ai-integration', title: 'Back-end Node.js with AI Integration' },
  { slug: 'backend-django-ai-integration', title: 'Back-end Django with AI Integration' },
  { slug: 'software-testing-ai-integration', title: 'Software Testing with AI Integration' }
];

const icons = ['Box', 'Code', 'Database', 'Brain', 'Cpu', 'Terminal', 'Briefcase', 'GraduationCap'];
const colors = ['#f97316', '#8b5cf6', '#10b981', '#3b82f6', '#ec4899', '#14b8a6', '#ef4444', '#3f3f46'];

const roadmaps = slugs.reduce((acc, curr) => {
  acc[curr.slug] = {
    title: `Roadmap for ${curr.title}`,
    subtitle: 'A clear step-by-step journey from foundations to job-ready skills.',
    stages: Array.from({ length: 8 }).map((_, i) => ({
      id: `0${i + 1}`,
      title: `Stage ${i + 1}`,
      icon: icons[i % icons.length],
      bullets: [
        'Fundamental Concepts',
        'Practical Applications',
        'Hands-on Projects',
        'Industry Best Practices'
      ],
      accentColor: colors[i % colors.length]
    }))
  };

  // Hardcode Data Science for accuracy to the reference image
  if (curr.slug === 'data-science') {
    acc[curr.slug].stages = [
      { id: '01', title: 'Math & Stats', icon: 'Box', bullets: ['Linear Algebra', 'Calculus', 'Probability', 'Hypothesis Testing', 'Regression Analysis'], accentColor: '#f97316' },
      { id: '02', title: 'Programming', icon: 'Code', bullets: ['Python OOP', 'SQL', 'Git / GitHub', 'Data Structures', 'Algorithms'], accentColor: '#8b5cf6' },
      { id: '03', title: 'Data Handling & EDA', icon: 'Database', bullets: ['Data Cleaning', 'Outlier Detection', 'Feature Distributions', 'BI Dashboarding', 'Pandas & Seaborn'], accentColor: '#10b981' },
      { id: '04', title: 'Core ML', icon: 'Brain', bullets: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering', 'XGBoost / LightGBM'], accentColor: '#3b82f6' },
      { id: '05', title: 'Deep Learning & NLP', icon: 'Cpu', bullets: ['CNNs & RNNs', 'Transformers', 'LLMs', 'Prompt Engineering', 'RAG Basics'], accentColor: '#ec4899' },
      { id: '06', title: 'Deployment & MLOps', icon: 'Terminal', bullets: ['FastAPI', 'Docker', 'MLflow', 'CI/CD & LLMOps', 'Vector Databases'], accentColor: '#14b8a6' },
      { id: '07', title: 'Projects', icon: 'Briefcase', bullets: ['End-to-End Projects', 'Real Datasets', 'Documentation', 'Kaggle', 'Streamlit Apps'], accentColor: '#ef4444' },
      { id: '08', title: 'Portfolio & Career', icon: 'GraduationCap', bullets: ['GitHub Profile', 'Resume Polish', 'LinkedIn Networking', 'Mock Interviews', 'LeetCode Practice'], accentColor: '#3f3f46' }
    ];
  }

  return acc;
}, {});

const targetPath = path.join(__dirname, '..', 'src', 'data', 'roadmaps.json');
fs.writeFileSync(targetPath, JSON.stringify(roadmaps, null, 2));
console.log('roadmaps.json created successfully at', targetPath);
