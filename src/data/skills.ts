export type SkillCategory = {
  title: string;
  skills: string[];
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["C", "C#", "Java", "JavaScript", "TypeScript", "SQL", "Dart", "HTML", "CSS"],
  },
  {
    title: "Frontend Frameworks",
    skills: ["Next.js", "React", "Tailwind CSS", "Flutter"],
  },
  {
    title: "Backend & APIs",
    skills: ["ASP.NET Core", ".NET 8", "Entity Framework Core", "RESTful APIs", "JWT", "SignalR"],
  },
  {
    title: "Databases & Infrastructure",
    skills: ["SQL Server", "SQLite", "SupaBase", "Firebase", "Vercel", "Docker", "Git"],
  },
];
