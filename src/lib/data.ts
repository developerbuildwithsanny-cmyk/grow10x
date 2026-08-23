export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "PROGRAMS", href: "/#programs", hasMegaMenu: true },
  { label: "ABOUT", href: "/#about" },
  { label: "AI SCHOOL", href: "/learning" },
  { label: "INNOVATIONS", href: "/innovations" },
  { label: "AI TOOLS", href: "/tools" },
  { label: "BLOG", href: "/blog" },
  { label: "MISSION", href: "/mission" },
];

export const heroStats = [
  { value: "12k+", label: "Builders" },
  { value: "450+", label: "Apps Launched" },
  { value: "₹2Cr+", label: "Member Earnings" },
  { value: "94%", label: "Completion Rate" },
];

export const liveActivities = [
  {
    name: "Sarah J.",
    action: "launched an AI wrapper.",
    time: "2 mins ago",
    avatar: "/images/avatar-sarah-76651d.png",
  },
  {
    name: "Rahul M.",
    action: "hit $1k MRR.",
    time: "15 mins ago",
    avatar: "/images/avatar-rahul-2fd739.png",
  },
  {
    name: "Elena K.",
    action: "joined 'Be a Founder'.",
    time: "1 hour ago",
    avatar: "/images/avatar-elena-7d1cf4.png",
  },
];

export const programs = [
  {
    badge: "FLAGSHIP",
    badgeBg: "bg-green-20",
    badgeColor: "text-green",
    borderColor: "border-t-green border-t-[3px]",
    title: "AI in Hands",
    description:
      "Master practical AI development. Build 5 real-world AI applications from scratch. Perfect for developers wanting to add AI to their stack.",
    features: [
      "8 weeks of intensive learning",
      "Weekly live Q&A sessions",
      "Private community access",
    ],
    checkColor: "text-green",
    buttonText: "Enrol Now",
    buttonStyle: "primary" as const,
  },
  {
    badge: "INTERMEDIATE",
    badgeBg: "bg-yellow-20",
    badgeColor: "text-yellow",
    borderColor: "border-t-yellow border-t-[3px]",
    title: "Be a Founder",
    description:
      "Launch and scale your own AI startup. Learn growth hacking, monetization, and how to get your first 100 paying customers.",
    features: [
      "Monetization strategies",
      "Marketing templates",
      "Founder mastermind group",
    ],
    checkColor: "text-yellow",
    buttonText: "Apply Now",
    buttonStyle: "outline-yellow" as const,
  },
  {
    badge: "FREE ACCESS",
    badgeBg: "bg-green-10",
    badgeColor: "text-green",
    borderColor: "border-t-border border-t-[3px]",
    title: "Free Resources",
    description:
      "Get a taste of our teaching style with a collection of free tutorials, cheat sheets, and basic templates.",
    features: [
      "Prompt engineering guide",
      "Basic API integration",
      "Weekly newsletter",
    ],
    checkColor: "text-muted",
    buttonText: "Access Free Content",
    buttonStyle: "outline" as const,
  },
];

export const personas = [
  {
    title: "I Know Basic Coding",
    description:
      "You understand logic, loops, and basic web dev. We will teach you how to integrate LLMs, build RAG pipelines, and deploy AI wrappers rapidly.",
    buttonText: "START LEARNING",
    buttonBg: "bg-green",
    buttonTextColor: "text-black",
    gradientBorder:
      "border-l-[4px] border-l-green border border-border shadow-sm",
  },
  {
    title: "I'm Non-Tech",
    description:
      "You have industry expertise but don't code. We will show you how to use No-Code tools (Bubble, FlutterFlow) combined with AI APIs to build functional products.",
    buttonText: "START BUILDING",
    buttonBg: "bg-orange",
    buttonTextColor: "text-white",
    gradientBorder:
      "border-l-[4px] border-l-orange border border-border shadow-sm",
  },
];

export const domains = [
  "Healthcare",
  "Business/Finance",
  "Design/Creative",
  "Education/Research",
  "Law/Compliance",
  "Marketing/Sales",
  "Engineering/Dev",
  "Agriculture",
  "Media/Journalism",
  "HR/Recruitment",
  "Logistics",
  "Freelancers",
];

export const painPoints = [
  {
    title: "Tutorial Loop",
    description:
      "Watching endless videos on YouTube without ever writing a line of code or deploying a live application.",
  },
  {
    title: "Tool Overload",
    description:
      "Getting paralyzed by the sheer number of frameworks, vector databases, and LLM models available today.",
  },
  {
    title: "Isolation",
    description:
      "Trying to figure it out alone without feedback from experienced builders or a supportive community to hold you accountable.",
  },
];

export const builderSteps = [
  {
    step: "1",
    title: "Modular Architecture",
    description:
      "Set up your foundation with basic configuration and robust system design.",
  },
  {
    step: "2",
    title: "LEGO Methodology",
    description:
      "Snap together APIs, models, and tools quickly to validate your ideas.",
  },
  {
    step: "3",
    title: "Shipping Framework",
    description:
      "Deploy to production, scale confidently, and iterate based on user data.",
  },
];

export const unlockItems = [
  "50+ Ready-to-use Templates",
  "Proprietary Component Library",
  "Lifetime Access to Updates",
];

export const roadmapWeeks = [
  {
    week: "W1",
    title: "Ideation & Setup",
    accent: "green",
    description: "Validate your niche, define scope, set up Next.js/FastAPI, and integrate AI model endpoints.",
  },
  {
    week: "W2",
    title: "Core Build",
    accent: "coral",
    description: "Build logic, implement vector databases (Pinecone/pgvector), and set up the AI query loop.",
  },
  {
    week: "W3",
    title: "Refinement & Polish",
    accent: "yellow",
    description: "Add auth, integrate Stripe payments, style responsive designs, and polish edge cases.",
  },
  {
    week: "W4",
    title: "Launch & Scale",
    accent: "green",
    description: "Deploy to Vercel/Railway, optimize SEO, configure analytics, and launch on Product Hunt.",
  },
];

export const testimonials = [
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Product Designer",
    avatarBg: "bg-green-20",
    avatarColor: "text-green",
    quote:
      "I never thought I could build a functioning AI app. The step-by-step approach made it so accessible. I've already launched my first tool!",
    program: "AI in Hands",
  },
  {
    initials: "RV",
    name: "Rahul Verma",
    role: "Non-Tech Founder",
    avatarBg: "bg-yellow-20",
    avatarColor: "text-yellow",
    quote:
      "The combination of no-code tools and AI APIs is a game changer. I was able to build a prototype for my startup idea in just a weekend.",
    program: "Be a Founder",
  },
  {
    initials: "SP",
    name: "Sneha Patel",
    role: "Freelancer",
    avatarBg: "bg-coral-20",
    avatarColor: "text-coral",
    quote:
      "Adding AI integration to my freelance services allowed me to double my rates. The course paid for itself with my first new client.",
    program: "AI in Hands",
  },
  {
    initials: "AM",
    name: "Arjun Mehta",
    role: "Software Engineer",
    avatarBg: "bg-green-20",
    avatarColor: "text-green",
    quote:
      "Even as a developer, navigating the new AI ecosystem was daunting. This structured approach saved me months of trial and error.",
    program: "AI in Hands",
  },
  {
    initials: "KN",
    name: "Kavya Nair",
    role: "MBA Graduate",
    avatarBg: "bg-yellow-20",
    avatarColor: "text-yellow",
    quote:
      "The 'Be a Founder' track is incredible. It's not just about building; it's about finding product-market fit and actually getting users.",
    program: "Be a Founder",
  },
  {
    initials: "DM",
    name: "Dev Malhotra",
    role: "Sales Manager",
    avatarBg: "bg-coral-20",
    avatarColor: "text-coral",
    quote:
      "I built an internal tool to automate my sales outreach using the concepts I learned. It's saved my team countless hours.",
    program: "Free Resources",
  },
];

export const journalPosts = [
  {
    category: "Engineering",
    categoryColor: "text-green",
    date: "Oct 12, 2024",
    title: "Mastering System Prompts for Production LLMs",
    excerpt:
      "Learn the key strategies for writing robust system prompts that prevent hallucinations and keep your AI apps on track.",
    image: "/images/blog-system-prompts.png",
  },
  {
    category: "Case Study",
    categoryColor: "text-yellow",
    date: "Oct 05, 2024",
    title: "Building a Custom AI Chatbot in 48 Hours",
    excerpt:
      "A step-by-step walkthrough of how one of our students went from idea to a fully deployed RAG chatbot over a single weekend.",
    image: "/images/blog-ai-chatbot.png",
  },
  {
    category: "Business",
    categoryColor: "text-coral",
    date: "Sep 28, 2024",
    title: "Choosing the Right Pricing Model for AI Products",
    excerpt:
      "Subscription vs. Pay-per-use? We break down the unit economics of popular LLM APIs and how to price your SaaS accordingly.",
    image: "/images/blog-pricing-model.png",
  },
];

export const statsBar = [
  { value: "12k+", label: "BUILDERS STARTED" },
  { value: "94%", label: "COMPLETE REAL PROJECTS" },
  { value: "₹0", label: "UPFRONT COST" },
  { value: "30", label: "DAYS TO LAUNCH" },
];

export const faqItems = [
  {
    question: "Do I need prior coding experience?",
    answer: "While basic JavaScript/Python knowledge helps, we offer a dedicated 'Non-Tech Founder' track that teaches you to build using no-code platforms (like Bubble/FlutterFlow) combined with AI APIs.",
  },
  {
    question: "How much time do I need to commit?",
    answer: "We recommend committing 8–10 hours per week. This includes watching the masterclasses, attending live Q&As, and dedicating time to building your weekly milestone projects.",
  },
  {
    question: "Will I learn how to build RAG applications?",
    answer: "Yes! Retrieval-Augmented Generation (RAG) is a core part of our 'AI in Hands' program. You will learn to use vector databases like Pinecone/pgvector to build chatbots that query custom data.",
  },
  {
    question: "Do I need to pay for AI API costs?",
    answer: "No. We provide free starter API credits for OpenAI, Anthropic, and Cohere during the bootcamp so you can focus 100% on learning and building without financial friction.",
  },
  {
    question: "Is there a community I can join?",
    answer: "Absolutely! You'll get lifetime access to our private Discord community of 12,000+ builders, where you can find co-founders, get code feedback, and share launch updates.",
  },
  {
    question: "What if I fall behind?",
    answer: "Don't worry. All live sessions are recorded and you have lifetime access to the curriculum. You can go at your own pace and submit your projects for review whenever you're ready.",
  },
  {
    question: "Can I get a refund if I don't like it?",
    answer: "We offer a 100% money-back guarantee within the first 14 days of the cohort. If you feel the program isn't the right fit for you, simply email us and we'll issue a full refund.",
  },
  {
    question: "Do you provide templates or starter code?",
    answer: "Yes, we provide 50+ production-ready boilerplate templates for Next.js, FastAPI, and Bubble, so you can skip the setup hassle and start coding the core logic immediately.",
  },
  {
    question: "Are the live sessions recorded?",
    answer: "Yes, every live Q&A, guest lecture, and project review session is recorded and uploaded to the student portal within 2 hours of ending.",
  },
  {
    question: "Will you teach me how to deploy my app?",
    answer: "Definitely. We cover production deployment pipelines to Vercel, Railway, and AWS, along with setting up domain names, SSL certificates, and basic analytics tracking.",
  },
];

export const footerLinks = {
  programs: ["Programs", "Founder Track"],
  resources: ["Curriculum", "Community", "AI Tools Directory", "Mission"],
  legal: ["Privacy Policy", "Terms of Service"],
};

export const missionPillars = [
  {
    emoji: "🎓",
    title: "Accessible Education",
    description:
      "Breaking down complex AI concepts into practical, actionable modules. We believe learning should be practical, jargon-free, and directly applicable to real-world problems.",
  },
  {
    emoji: "🚀",
    title: "Real-World Building",
    description:
      "Theory without execution is just trivia. Our methodology focuses 100% on building shipping-ready products. You learn by doing, iterating, and launching.",
  },
  {
    emoji: "💰",
    title: "Income Through AI",
    description:
      "Empowering builders to monetize their creations. Whether through freelancing, SaaS products, or internal tools, we focus on generating tangible value and economic independence.",
  },
];

export const founderNote = {
  name: "Sanny Kumar",
  role: "Founder, 10xAISchool",
  paragraphs: [
    "When I started my journey in tech, the barriers to entry were massive. You needed a specific degree, access to capital, and connections to the right hubs. AI has completely shattered that paradigm. Today, the only barrier is intent.",
    "However, intent alone isn't enough without direction. I saw too many brilliant minds getting lost in the noise of tutorials, theoretical papers, and overwhelming frameworks. They were consuming AI, but not building with it. That realization birthed 1M AI Builder.",
    "We aren't just teaching code or prompting; we are cultivating a mindset of creation. If we can empower 1 million Indians to build resilient, AI-powered solutions, the economic and societal impact will be unprecedented. This isn't just an edtech platform; it's an economic catalyst. Join us in building the future.",
  ],
};

export type ToolCategory =
  | "All"
  | "Build"
  | "Design"
  | "Research"
  | "Productivity"
  | "No-Code";

export const toolCategories: ToolCategory[] = [
  "All",
  "Build",
  "Design",
  "Research",
  "Productivity",
  "No-Code",
];

export const aiTools = [
  {
    name: "ChatGPT",
    category: "Build" as const,
    description:
      "The AI everyone uses. Advanced reasoning and conversational capabilities for any builder.",
    iconBg: "#1A1A2E",
    url: "https://chat.openai.com",
  },
  {
    name: "Claude",
    category: "Build" as const,
    description:
      "Long context, thoughtful reasoning, and excellent coding capabilities.",
    iconBg: "#1F1A2E",
    url: "https://claude.ai",
  },
  {
    name: "Cursor",
    category: "Build" as const,
    description:
      "AI-first code editor that fundamentally changes how you write software.",
    iconBg: "#1A2E1A",
    url: "https://cursor.com",
  },
  {
    name: "Bolt.new",
    category: "No-Code" as const,
    description: "Prompt to full-stack web app directly in your browser.",
    iconBg: "#2E1A1A",
    url: "https://bolt.new",
  },
  {
    name: "Lovable",
    category: "No-Code" as const,
    description: "Turn idea into React app with a few simple prompts.",
    iconBg: "#2E2A1A",
    url: "https://lovable.dev",
  },
  {
    name: "Make",
    category: "Productivity" as const,
    description:
      "Visual automation builder for connecting APIs and automating workflows.",
    iconBg: "#1A2E28",
    url: "https://make.com",
  },
  {
    name: "Perplexity",
    category: "Research" as const,
    description:
      "AI-powered search engine that provides cited answers to complex questions.",
    iconBg: "#1A1F2E",
    url: "https://perplexity.ai",
  },
  {
    name: "Midjourney",
    category: "Design" as const,
    description:
      "Text to stunning visuals. The industry standard for AI image generation.",
    iconBg: "#2E1A2B",
    url: "https://midjourney.com",
  },
  {
    name: "n8n",
    category: "Build" as const,
    description:
      "Open-source automation tool with advanced data manipulation capabilities.",
    iconBg: "#1A2A2E",
    url: "https://n8n.io",
  },
  {
    name: "Notion AI",
    category: "Productivity" as const,
    description:
      "Your second brain powered by AI to write, summarize, and brainstorm.",
    iconBg: "#2A2E1A",
    url: "https://notion.so",
  },
  {
    name: "Framer",
    category: "Design" as const,
    description:
      "Build landing pages with AI generation and beautiful animations.",
    iconBg: "#2E1A1A",
    url: "https://framer.com",
  },
  {
    name: "ElevenLabs",
    category: "Build" as const,
    description:
      "Incredible AI voice generation and text-to-speech for your apps.",
    iconBg: "#1A2E1F",
    url: "https://elevenlabs.io",
  },
];

export const curriculumWeeks = [
  {
    week: "Week 1",
    title: "LLM Fundamentals & RAG",
    description: "Learn how Large Language Models work, understand tokens and context windows, and build a basic Retrieval-Augmented Generation (RAG) system using vector databases.",
    topics: ["LLM Architectures", "Prompt Engineering", "Vector Embeddings", "Simple RAG Pipeline"],
    icon: "🎓"
  },
  {
    week: "Week 2",
    title: "APIs, Tools & Memory",
    description: "Connect LLMs to external systems. Learn tool calling, function calling, API integration, and how to manage conversational state and short/long-term memory.",
    topics: ["OpenAI & Anthropic APIs", "Function Calling", "Session State Management", "Vector DB Memory"],
    icon: "🔌"
  },
  {
    week: "Week 3",
    title: "Advanced RAG & Multi-modal",
    description: "Scale your RAG systems to handle complex document layouts, slide decks, and images. Implement hybrid search, rerankers, and multi-modal models.",
    topics: ["Query Translation", "Reranking Models", "Image Processing with GPT-4V", "Document Chunking Strategies"],
    icon: "🔍"
  },
  {
    week: "Week 4",
    title: "Automation & Workflows",
    description: "Design deterministic and dynamic workflows using automation frameworks. Learn how to map business processes to sequential LLM chains.",
    topics: ["n8n & Make.com", "LangChain Expression Language (LCEL)", "Workflow orchestration", "Structured outputs"],
    icon: "⚙️"
  },
  {
    week: "Week 5",
    title: "Security & API Systems",
    description: "Secure your AI applications against prompt injection, data leakage, and unauthorized access. Build production-grade backends with rate limits and caching.",
    topics: ["Prompt Injection Defense", "API Key Management", "semantic caching", "FastAPI middleware"],
    icon: "🛡️"
  },
  {
    week: "Week 6",
    title: "Agentic AI Basics",
    description: "Introduction to autonomous agents. Understand the ReAct (Reason + Action) loop, system planning, and how to give agents agency over their tools.",
    topics: ["ReAct Framework", "Autonomous Tool Selection", "Loop Detection", "Stateful Agent Design"],
    icon: "🤖"
  },
  {
    week: "Week 7",
    title: "Agent Frameworks",
    description: "Dive deep into modern frameworks designed for building complex agents. Master graph-based state machines and custom agent architectures.",
    topics: ["LangGraph basics", "State management in graphs", "CrewAI framework", "Agent cooperation"],
    icon: "🕸️"
  },
  {
    week: "Week 8",
    title: "Multi-Agent Systems",
    description: "Build groups of collaborative agents that divide and conquer tasks. Design specialist agents, supervisor agents, and structured communication protocols.",
    topics: ["Supervisor Agent Pattern", "Message Passing", "Hierarchical Agent Crews", "Conflict Resolution"],
    icon: "👥"
  },
  {
    week: "Week 9",
    title: "Long-running Agents",
    description: "Build asynchronous agents that run for hours or days, handle human-in-the-loop approvals, resume from checkpoints, and manage background tasks.",
    topics: ["Human-in-the-loop (HITL)", "Persistent checkpoints", "Pub/Sub background workers", "Interrupt mechanisms"],
    icon: "⏳"
  },
  {
    week: "Week 10",
    title: "Cloud Deployment",
    description: "Deploy your backend APIs and AI agents to reliable cloud infrastructure. Set up CI/CD, auto-scaling, and monitoring/evaluation systems.",
    topics: ["Vercel & Railway deployment", "LangSmith for debugging", "API monitoring", "Docker containerization"],
    icon: "☁️"
  },
  {
    week: "Week 11",
    title: "Capstone Project",
    description: "Work in a team to build, secure, and deploy a production-ready AI product solving a real industry problem. Receive 1-on-1 code reviews.",
    topics: ["Product Scoping", "Architecture Design", "Sprint Planning", "Collaborative development"],
    icon: "🚀"
  },
  {
    week: "Week 12",
    title: "Final Demo & Certification",
    description: "Showcase your team's capstone project live to hiring partners and industry experts. Receive your AI Builder certification and placement support.",
    topics: ["Demo Day pitch", "Technical Q&A", "Career coaching", "Hiring matching"],
    icon: "🏆"
  }
];

export interface StudentProject {
  name: string;
  category: "AI Agents" | "RAG & LLMs" | "No-Code AI" | "Full Stack";
  description: string;
  students: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export const innovationsProjects: StudentProject[] = [
  {
    name: "SkillSwap AI",
    category: "AI Agents",
    description: "AI-powered peer-to-peer skill exchange platform with dynamic match recommendations, automated session scheduling, and instant notes summarizing.",
    students: ["Priya Sharma", "Arjun Mehta"],
    techStack: ["Next.js", "FastAPI", "OpenAI API", "Pinecone", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "VibeCast",
    category: "RAG & LLMs",
    description: "Smart music player and stream catalog generating playlists based on mood descriptors and contextual history using vector database embeddings.",
    students: ["Rahul Verma"],
    techStack: ["Next.js", "Pinecone", "Claude 3.5 Sonnet", "OpenAI Embeddings", "Supabase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "DocuSign AI",
    category: "AI Agents",
    description: "Intelligent document signing portal that parses terms, highlights potential risks, answers user queries about clauses, and generates summaries.",
    students: ["Sneha Patel"],
    techStack: ["Next.js", "Python", "LangChain", "Llama 3", "FastAPI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "TaskFlow AI",
    category: "AI Agents",
    description: "Kanban project board featuring an AI assistant that auto-allocates tasks, refines backlog descriptions, and predicts project delay risks.",
    students: ["Dev Malhotra"],
    techStack: ["React", "Node.js", "Express", "LangChain", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "ChefPalette AI",
    category: "No-Code AI",
    description: "No-code cooking companion that scans ingredients from photos, detects items, and customizes dietary-safe step-by-step recipes.",
    students: ["Saritha K."],
    techStack: ["FlutterFlow", "OpenAI Vision API", "Make.com", "Airtable"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "FinTrack AI",
    category: "RAG & LLMs",
    description: "Expense management dashboard with automated receipt OCR scanning, semantic category classification, and personalized savings advice.",
    students: ["Shiva Prasad"],
    techStack: ["React", "FastAPI", "pgvector", "OpenAI GPT-4o", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "CampFinder AI",
    category: "RAG & LLMs",
    description: "Intelligent campsite and outdoor route recommender with automated reviews, weather forecasting agents, and packing lists.",
    students: ["Sathvika Reddy"],
    techStack: ["Next.js", "Pinecone", "Weather API", "Claude API", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "StayEasy AI",
    category: "No-Code AI",
    description: "No-code hospitality system with an automated voice agent that book rooms, handles customer support, and records reviews via speech.",
    students: ["B. Srinu"],
    techStack: ["Bubble", "ElevenLabs Voice API", "Make.com", "OpenAI Assistants"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "ChatSync AI",
    category: "Full Stack",
    description: "Real-time client communication suite with live multi-lingual translation, chat analysis, and automated meeting notes.",
    students: ["Chandana M."],
    techStack: ["React", "WebSocket", "Node.js", "Whisper API", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "Blogify AI",
    category: "AI Agents",
    description: "Headless CMS that drafts SEO-optimized blog posts, tags images, and schedules social media updates from minimal text prompts.",
    students: ["Rajneesh Kumar"],
    techStack: ["Next.js", "Claude 3.5 Sonnet", "Vercel", "Supabase", "Upstash"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "QuizWhiz",
    category: "RAG & LLMs",
    description: "Interactive learning game platform that generates quiz cards and concept maps from uploaded PDF textbooks in seconds.",
    students: ["Sirisha J."],
    techStack: ["Next.js", "pgvector", "Python", "FastAPI", "OpenAI API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "DocSearch AI",
    category: "Full Stack",
    description: "Smart medical directory matching patients to doctors based on symptoms, with automated report summaries and booking.",
    students: ["Anif Khan"],
    techStack: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "FitTrack AI",
    category: "AI Agents",
    description: "Wellness platform integrating wearable device streams with customized workout/diet planner agents that adapt to heart rate patterns.",
    students: ["Jashwanthi P."],
    techStack: ["Next.js", "FastAPI", "LangChain", "Anthropic Claude", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "ShopSphere AI",
    category: "Full Stack",
    description: "E-commerce platform with an integrated shopping assistant that recommends products based on user style descriptions.",
    students: ["Sri Hari"],
    techStack: ["React", "Node.js", "MongoDB", "Pinecone", "OpenAI GPT-4o"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "DevCollab AI",
    category: "Full Stack",
    description: "Real-time collaborative code editor with integrated AI debugging, auto-comment generation, and instant code explanation options.",
    students: ["Sai Krishna"],
    techStack: ["Next.js", "WebRTC", "Express", "Claude API", "Socket.io"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "EventHorizon AI",
    category: "Full Stack",
    description: "Smart event management tool featuring automated marketing emails, custom invitation copy, and AI event coordination chatbot.",
    students: ["Sukumar T."],
    techStack: ["Next.js", "PostgreSQL", "Node.js", "OpenAI API", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    name: "ResumeGen AI",
    category: "No-Code AI",
    description: "No-code portfolio builder creating customized, job-tailored resumes and tracking mock interview preparation and answers.",
    students: ["Roshan V."],
    techStack: ["Softr", "Make.com", "ChatGPT API", "Google Sheets", "Airtable"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];
