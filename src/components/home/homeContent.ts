export const homeNavLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "/about" },
  { label: "AI School", href: "/ai-school" },
  { label: "Innovations", href: "/innovations" },
  { label: "AI Tools", href: "/tools" },
  { label: "Learning", href: "/learning" },
  { label: "Blog", href: "/blog" },
  { label: "Mission", href: "/mission" },
] as const;

export const homeContact = {
  phoneLabel: "Call: +91 99000 10000",
  phoneHref: "tel:+919900010000",
};

export const homeStats = [
  { value: "1000+", label: "STUDENTS GUIDED" },
  { value: "500+", label: "PROJECTS BUILT" },
  { value: "50+", label: "INDUSTRY COURSES" },
  { value: "95%", label: "JOB PLACEMENT RATE" },
] as const;

export const homeFooterColumns = [
  {
    title: "Programs",
    links: [
      { label: "Full Stack", href: "#programs" },
      { label: "AI & ML", href: "#programs" },
      { label: "Data Science", href: "#programs" },
      { label: "Mobile Dev", href: "#programs" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Why Us", href: "#why-us" },
      { label: "Success Stories", href: "#success-stories" },
      { label: "Curriculum Map", href: "#path" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/mission" },
      { label: "Careers", href: "#careers" },
      { label: "Press Kit", href: "#press" },
      { label: "Contact Us", href: "/requestcallback?source=Footer - Contact Us" },
    ],
  },
] as const;

export const homeFooterLegal = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Cookie Preferences", href: "#cookies" },
] as const;

export const homeFooterSocials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/10xaischool/" },
  { name: "Gmail", href: "mailto:10xaischool@gmail.com" },
  { name: "YouTube", href: "https://www.youtube.com/@Buildwithsannyai" },
  { name: "Instagram", href: "https://www.instagram.com/10xaischool/" },
] as const;
