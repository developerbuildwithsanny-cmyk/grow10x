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

const icons = ['BarChart2', 'Box', 'Bot', 'LineChart', 'PieChart', 'Cloud'];

const projectsData = slugs.reduce((acc, curr) => {
  acc[curr.slug] = Array.from({ length: 6 }).map((_, i) => ({
    id: `proj-${i + 1}`,
    title: `${curr.title.split(' ')[0]} Project ${i + 1}...`,
    description: `Learn to build real-world ${curr.title} solutions with advanced integrations...`,
    icon: icons[i % icons.length],
    image: `/images/careers/hero_image_datascience.webp` // using a fallback image that exists
  }));

  // Hardcode Data Science for accuracy to the reference image
  if (curr.slug === 'data-science') {
    acc[curr.slug] = [
      { id: 'proj-1', title: 'Sales Forecasting...', description: 'Predict sales trends with regression...', icon: 'BarChart2', image: '/images/careers/hero_image_datascience.webp' },
      { id: 'proj-2', title: 'Customer Churn...', description: 'Classify churn risk and surface key...', icon: 'Box', image: '/images/careers/hero_image_datascience.webp' },
      { id: 'proj-3', title: 'Recommendation Engine', description: 'Build product recommendations...', icon: 'Bot', image: '/images/careers/hero_image_datascience.webp' },
      { id: 'proj-4', title: 'Sentiment Analysis...', description: 'Analyze reviews and visualize...', icon: 'BarChart2', image: '/images/careers/hero_image_datascience.webp' },
      { id: 'proj-5', title: 'ML Model Dashboard', description: 'Serve model metrics, predictio...', icon: 'LineChart', image: '/images/careers/hero_image_datascience.webp' },
      { id: 'proj-6', title: 'ML Pipeline Deploy', description: 'Package and deploy models with...', icon: 'Cloud', image: '/images/careers/hero_image_datascience.webp' }
    ];
  }

  return acc;
}, {});

const targetPath = path.join(__dirname, '..', 'src', 'data', 'projects.json');
fs.writeFileSync(targetPath, JSON.stringify(projectsData, null, 2));
console.log('projects.json created successfully at', targetPath);
