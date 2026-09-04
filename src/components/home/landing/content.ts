export const path01Moves = [
  {
    number: "01",
    title: "Idea Validation",
    description: "Spot a real problem worth solving and shape it into a concept.",
  },
  {
    number: "02",
    title: "Product Building",
    description: "Turn the idea into something usable, fast — no perfectionism.",
  },
  {
    number: "03",
    title: "Getting & Approaching Clients",
    description: "Find the right prospects and pitch with confidence.",
  },
  {
    number: "04",
    title: "Business Model",
    description: "Choose a pricing and revenue model that actually scales.",
  },
] as const;

export const pillarCards = [
  {
    id: "fullstack",
    title: "Full Stack + AI/ML + Agentic AI",
    description:
      "Python full stack development with modern AI and autonomous agent systems — the flagship track.",
    tags: ["LangChain", "RAG", "MCP"],
    variant: "featured" as const,
  },
  {
    id: "language",
    title: "Programming Language",
    description: "Interview-grade command of a core language.",
    variant: "default" as const,
  },
  {
    id: "dsa",
    title: "DSA + Problem Solving",
    description: "Data structures, algorithms & logical thinking.",
    variant: "default" as const,
  },
  {
    id: "sql",
    title: "SQL",
    description: "Querying, schema design & database problems.",
    variant: "default" as const,
  },
  {
    id: "communication",
    title: "Communication + Aptitude",
    description: "Interview confidence & aptitude tests.",
    variant: "default" as const,
  },
  {
    id: "microservices",
    title: "Microservices + Security",
    description: "Scalable, security-first systems.",
    tags: ["Docker", "JWT"],
    variant: "default" as const,
  },
  {
    id: "testing",
    title: "Software Testing + AI",
    description: "Manual & automation testing, AI-assisted QA.",
    tags: ["Selenium", "Postman"],
    variant: "default" as const,
  },
  {
    id: "lowcode",
    title: "Low-Code Automation",
    description: "Connect apps, APIs & AI tools without heavy code.",
    tags: ["n8n", "Zapier"],
    variant: "default" as const,
  },
  {
    id: "internship",
    title: "4 Months + 1 Month Internship",
    description: "Beginner to advanced, guided end to end.",
    variant: "accent" as const,
  },
] as const;

export const aiTrackModules = [
  {
    number: "01",
    title: "Agentic Frameworks",
    tags: ["LangChain", "LangGraph", "CrewAI", "AutoGen", "OpenAI Swarm"],
  },
  {
    number: "02",
    title: "Model & API Access",
    tags: ["OpenAI API", "Claude API", "Gemini API", "OpenRouter", "Perplexity"],
  },
  {
    number: "03",
    title: "Retrieval & Memory",
    tags: ["RAG", "Vector DBs", "MCP", "Long-Term Memory"],
  },
  {
    number: "04",
    title: "AI Engineering Practice",
    tags: ["Prompt Engineering", "LLM Evals", "Fine-Tuning", "Agents in Production"],
  },
] as const;

export const aiTrackTicker = [
  "GenAI",
  "Agentic AI",
  "LLMs",
  "Autonomous Agents",
  "Prompt Engineering",
] as const;

export const partTimeTracks = [
  {
    title: "Low-Code Automation",
    description: "Connect apps & AI tools, no heavy code.",
    tags: ["n8n", "Zapier", "Make.com"],
  },
  {
    title: "AI Tools for Work",
    description: "Everyday AI tools that speed up real work.",
    tags: ["ChatGPT", "Cursor"],
  },
  {
    title: "GenAI Foundations",
    description: "Prompts, APIs & production AI patterns.",
    tags: ["OpenAI API", "LangChain"],
  },
  {
    title: "Video Editing with AI",
    description: "Edit and produce content with AI assistance.",
    tags: ["Premiere Pro", "CapCut"],
  },
  {
    title: "AI Content Tools",
    description: "Voice, video & avatar generation tools.",
    tags: ["Runway", "ElevenLabs"],
  },
  {
    title: "Cyber Security Basics",
    description: "Core security tools & safe practices.",
    tags: ["Linux", "Nmap"],
  },
  {
    title: "UI/UX Design",
    description: "Design interfaces people love to use.",
    tags: ["Figma", "Adobe XD"],
  },
  {
    title: "Data Analysis",
    description: "From spreadsheets to real dashboards.",
    tags: ["SQL", "Python"],
  },
] as const;

export const placementSupports = [
  {
    title: "Resume & LinkedIn Building",
    description: "Profiles that pass recruiter screening.",
  },
  {
    title: "Mock Technical & HR Interviews",
    description: "Real-format practice with structured feedback.",
  },
  {
    title: "Group Discussion & Aptitude Drills",
    description: "Quant, logical & verbal aptitude practice.",
  },
  {
    title: "Hiring Partner Referrals & Drives",
    description: "Direct connects to active hiring companies.",
  },
  {
    title: "Soft Skills Workshops",
    description: "Communication & workplace-readiness sessions.",
  },
  {
    title: "1:1 Career Mentorship",
    description: "Personal guidance through every placement step.",
  },
] as const;

export const audienceColumns = [
  {
    title: "Students",
    variant: "light" as const,
    items: [
      "Start a personal brand alongside your degree",
      "Build placement-ready technical skills early",
      "Get CRT training before campus drives",
      "Learn real client-facing communication",
    ],
  },
  {
    title: "Working Professionals",
    variant: "dark" as const,
    items: [
      "Upskill into full stack, AI/ML & agentic AI",
      "Build a side business without quitting your job",
      "Sharpen system design with microservices & security",
      "Sign paying clients using a proven approach model",
    ],
  },
] as const;

export const landingFooterLinks = [
  { label: "Path 01", href: "#path-01" },
  { label: "Pillars", href: "#pillars" },
  { label: "AI Track", href: "#ai-track" },
  { label: "Part-Time", href: "#part-time" },
] as const;
