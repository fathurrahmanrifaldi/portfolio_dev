import type { SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  { name: "Frontend", icon: "frontend", items: ["React","JavaScript", "Tailwind CSS"] },
  { name: "Backend", icon: "backend", items: ["Laravel", "PHP", "Supabase"] },
  { name: "Database", icon: "database", items: ["PostgreSQL", "MySQL"] },
  { name: "Cloud & DevOps", icon: "cloud", items: ["Docker", "CI/CD", "Vercel", "Railway"] },
  { name: "Tools", icon: "tools", items: ["Git", "GitHub", "Figma", "Linux", "Postman"] },
  {
    name: "AI Coding",
    icon: "ai",
    items: ["Codex", "GitHub Copilot", "Antigravity", "OpenCode"],
  },
];
