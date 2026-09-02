export const homeNavLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Path", href: "#path" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
] as const;

export const homeContact = {
  phoneLabel: "Call: +91 99000 10000",
  phoneHref: "tel:+919900010000",
};

export const homeStats = [
  { value: "10,000+", label: "STUDENTS GUIDED" },
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
  { name: "LinkedIn", href: "https://www.linkedin.com" },
  { name: "Twitter", href: "https://x.com" },
  { name: "YouTube", href: "https://www.youtube.com" },
  { name: "GitHub", href: "https://github.com" },
] as const;
