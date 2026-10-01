export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  isTechnical: boolean;
};

export const EXPERIENCE_HISTORY: Experience[] = [
  {
    id: "exp-1",
    role: "Co-founder & Full-Stack Engineer",
    company: "Presist",
    period: "July 2025 - May 2026",
    description: "Architected transaction management interfaces (Next.js/React) and scalable backend microservices (.NET/C#). Led technical implementations for corporate partnerships.",
    isTechnical: true,
  },
  {
    id: "exp-2",
    role: "Intern Backend Developer",
    company: "BRB Specialized Software Solutions",
    period: "Jan 2025 - May 2025",
    description: "Engineered 40% of the backend architecture for the Superdong Ferry Booking system. Optimized high-volume RESTful APIs and mitigated performance bottlenecks.",
    isTechnical: true,
  },
  {
    id: "exp-3",
    role: "Financial Consultant",
    company: "Manulife Vietnam",
    period: "Jan 2025 - Present",
    description: "Developed strong business acumen, client relationship management, and financial planning strategies, managing complete policy lifecycles.",
    isTechnical: false,
  }
];
