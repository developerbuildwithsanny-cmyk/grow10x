export const navLinks = [
  { label: "HOME", href: "/" },
  { label: "PROGRAMS", href: "/#programs", hasMegaMenu: true },
  { label: "ABOUT", href: "/#" },
  { label: "AI TOOLS", href: "/tools" },
  { label: "BLOG", href: "/#journal" },
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
  { week: "W1", title: "Ideation & Setup", accent: "green" },
  { week: "W2", title: "Core Build", accent: "coral" },
  { week: "W3", title: "Refinement & Polish", accent: "yellow" },
  { week: "W4", title: "Launch & Scale", accent: "green" },
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
  },
  {
    category: "Case Study",
    categoryColor: "text-yellow",
    date: "Oct 05, 2024",
    title: "Building a Custom AI Chatbot in 48 Hours",
    excerpt:
      "A step-by-step walkthrough of how one of our students went from idea to a fully deployed RAG chatbot over a single weekend.",
  },
  {
    category: "Business",
    categoryColor: "text-coral",
    date: "Sep 28, 2024",
    title: "Choosing the Right Pricing Model for AI Products",
    excerpt:
      "Subscription vs. Pay-per-use? We break down the unit economics of popular LLM APIs and how to price your SaaS accordingly.",
  },
];

export const statsBar = [
  { value: "12k+", label: "BUILDERS STARTED" },
  { value: "94%", label: "COMPLETE REAL PROJECTS" },
  { value: "₹0", label: "UPFRONT COST" },
  { value: "30", label: "DAYS TO LAUNCH" },
];

export const faqItems = [
  "Do I need prior coding experience?",
  "How much time do I need to commit?",
  "Will I learn how to build RAG applications?",
  "Do I need to pay for AI API costs?",
  "Is there a community I can join?",
  "What if I fall behind?",
  "Can I get a refund if I don't like it?",
  "Do you provide templates or starter code?",
  "Are the live sessions recorded?",
  "Will you teach me how to deploy my app?",
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
  name: "Siddharth Rao",
  role: "Founder, 1M AI Builder",
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
