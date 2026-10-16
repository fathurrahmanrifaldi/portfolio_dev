import type { SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  { name: "Frontend", icon: "frontend", items: ["JavaScript", "Blade","Tailwind CSS"] },
  { name: "Backend", icon: "backend", items: ["Laravel", "PHP"] },
  { name: "Database", icon: "database", items: ["PostgreSQL", "MySQL"] },
  { name: "Cloud & DevOps", icon: "cloud", items: ["Docker", "CI/CD", "Vercel", "Render"] },
  { name: "Tools", icon: "tools", items: ["Git", "GitHub", "Figma", "Linux", "Postman"] },
  {
    name: "AI Coding",
    icon: "ai",
    items: ["Codex", "GitHub Copilot", "Antigravity", "OpenCode"],
  },
];
