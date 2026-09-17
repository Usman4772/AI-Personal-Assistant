export const site = {
  name: "Usman Ali",
  tagline: "Full-Stack Developer & Software Architect",
  email: "m.usman.alix47@gmail.com",
  phone: "+92 303 580 8043",
  phoneHref: "tel:+923035808043",
  linkedin: "https://linkedin.com/in/usmanalix47",
  github: "https://github.com/Usman4772",
  location: "Jhelum, Pakistan",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const homeHero = {
  badge: "Enterprise Software & Cloud Systems",
  headlineLead: "Software that holds up",
  headlineAccent: "when your business depends on it.",
  support:
    "I design and ship full-stack systems around how operations actually work — clean architecture, reliable APIs, and interfaces people can trust in production.",
  primaryCta: { href: "#contact", label: "Start a Project" },
  secondaryCta: { href: "#experience", label: "How I work" },
};

export const metrics = [
  {
    value: "1.5+",
    label: "Years Shipping",
    description: "Production web software, APIs, and product UIs in the field.",
  },
  {
    value: "15+",
    label: "Projects Delivered",
    description: "From community platforms to payment flows and AI tooling.",
  },
  {
    value: "10+",
    label: "Systems & Workflows",
    description: "Architecture, automation, and cloud-ready delivery.",
  },
  {
    value: "99.9%",
    label: "Reliability Focus",
    description: "Built for uptime — because downtime has a real business cost.",
  },
];

export const philosophyPoints = [
  {
    title: "Architecture before implementation",
    body: "I design systems before writing code. Every technical decision should be documented and tied to a clear product reason.",
  },
  {
    title: "Simple when it can be, complex only when it must be",
    body: "If a straightforward solution solves the problem, that's what I build. Complexity for its own sake is a liability, not a feature.",
  },
  {
    title: "Measured by whether the product runs better",
    body: "Good software is whether the business is more efficient, more reliable, and less dependent on manual workarounds.",
  },
  {
    title: "I stay after delivery",
    body: "Handover is not the end. I document how the system works, how to operate it, and stay reachable for the next phase.",
  },
];

export const priorityBand = {
  badge: "My Priority",
  line1Before: "I don't build",
  line1Accent: "throwaway software.",
  line2Before: "I build",
  line2Accent: "systems that hold up.",
};

export const processHub = {
  eyebrow: "How I Work",
  headline: "No surprises. A clear process from day one to delivery.",
  support:
    "Every engagement follows the same structure. You always know what's being built, why it was decided that way, and what comes next.",
};

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    body: "Audit existing systems, understand the workflow, and define what success looks like before any work begins.",
  },
  {
    number: "02",
    title: "Architect",
    body: "System design, technology choices, data models, and a delivery roadmap — agreed before a line of code.",
  },
  {
    number: "03",
    title: "Build",
    body: "Development in structured phases with reviews, testing, and documentation as part of every delivery.",
  },
  {
    number: "04",
    title: "Deploy",
    body: "Staged rollouts, production provisioning, and full handover with system notes you can actually use.",
  },
  {
    number: "05",
    title: "Improve",
    body: "I stay available after delivery for optimization, new phases, and the next set of product requirements.",
  },
];

export const journeySteps = [
  {
    number: "01",
    title: "BS Computer Science",
    meta: "University of the Punjab · 2021 — 2025",
    body: "Completed Bachelor's in Computer Science with a 3.66 CGPA, focused on software engineering, algorithms, and modern web systems.",
  },
  {
    number: "02",
    title: "Frontend Intern",
    meta: "Rev 9 Solutions · Jan 2024 — Mar 2024",
    body: "Built mini full-stack projects, responsive UIs with React and Tailwind, and practiced Node.js plus MongoDB in real sprints.",
  },
  {
    number: "03",
    title: "Associate Frontend Developer",
    meta: "Rev 9 Solutions · Mar 2024 — Present",
    body: "Shipped payment-gateway features in Next.js, tax calculation flows, webhooks, and tiered subscription pricing with backend and QA.",
  },
];

export const projects = [
  {
    number: "01",
    title: "Link2Gether",
    tag: "Community Platform",
    description:
      "Community-driven platform for creating spaces, posting, and discussing — with real-time AI-assisted chat, media sharing, and moderation in one place.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Pusher"],
    liveLink: "https://link2gether-webapp.vercel.app/",
    githubLink: "https://github.com/Usman4772/link2gether-webapp",
    previewImage: "/linktogether.png",
  },
  {
    number: "02",
    title: "AI Interview Platform",
    tag: "AI Productivity",
    description:
      "Practice interviews in real time. Schedule mocks, get AI-generated questions, and receive instant feedback without waiting for a panel.",
    technologies: ["Next.js", "TypeScript", "Socket.io", "Ant Design"],
    liveLink: "https://mockmaster-inky.vercel.app/",
    githubLink: null,
    previewImage: "/mockmaster.png",
  },
  {
    number: "03",
    title: "Payment Gateway Solution",
    tag: "Fintech",
    description:
      "Secure, scalable checkout flows with processing, tracking, and reporting — built for performance and compliance in production.",
    technologies: ["Next.js", "Redux", "Ant Design", "Chart.js"],
    liveLink: null,
    githubLink: null,
    previewImage: "/vyafac.png",
  },
  {
    number: "04",
    title: "Analytics Dashboard",
    tag: "Product UI",
    description:
      "Admin dashboard UI for metrics, performance, and visualization — a static prototype ready for backend integration.",
    technologies: ["Next.js", "Tailwind CSS", "Chart.js"],
    liveLink: "https://dashboard-lyart-mu.vercel.app/",
    githubLink: null,
    previewImage: "/dashboard.png",
  },
];

export const skills = [
  {
    group: "Frontend Engineering",
    items: [
      { name: "React / Next.js", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Redux / React Query", level: "Advanced" },
    ],
  },
  {
    group: "Backend & Systems",
    items: [
      { name: "Node.js / Express", level: "Expert" },
      { name: "MongoDB", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
      { name: "Auth & Webhooks", level: "Advanced" },
    ],
  },
  {
    group: "Delivery",
    items: [
      { name: "Git / GitHub", level: "Expert" },
      { name: "Vercel", level: "Advanced" },
      { name: "Agile collaboration", level: "Advanced" },
      { name: "Production UI polish", level: "Expert" },
    ],
  },
];

export const homeCta = {
  badge: "Get Started",
  headline: "Have a software problem worth solving?",
  support:
    "Whether you have a complete spec or just a messy workflow, let's talk about the right system — and I'll tell you honestly if I'm not the right fit.",
  primaryCta: { href: "mailto:m.usman.alix47@gmail.com", label: "Email Me" },
  secondaryCta: { href: "#contact", label: "Contact details" },
};
