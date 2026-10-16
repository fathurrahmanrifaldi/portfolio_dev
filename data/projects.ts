import type { Project } from "@/lib/types";

/**
 * Projects, ordered by strength (strongest first).
 * Fill every "[TODO: ...]" string. Follow the order problem -> your contribution -> tech -> outcome.
 * To add a screenshot: put the file in /public/projects/ and set `image: "/projects/<file>.png"`.
 */
export const projects: Project[] = [
  {
    slug: "basara",
    title: "BASARA: Waste Bank System for RW 042",
    originalName: "Sistem Aplikasi Bank Sampah RW 042 (BASARA)",
    problem: "[TODO: one-line problem statement, e.g. who struggled with what before BASARA]",
    role: "[TODO: your specific role, e.g. sole developer, backend lead, what you owned]",
    stack: ["[TODO: tech stack, e.g. Laravel, PostgreSQL, Tailwind CSS]"],
    features: [
      "[TODO: key feature 1]",
      "[TODO: key feature 2]",
      "[TODO: key feature 3]",
    ],
    outcome: "[TODO: outcome, e.g. who uses it now, what changed, any real number you can verify]",
    architecture:
      "[TODO: architecture overview, e.g. Laravel MVC app, PostgreSQL schema, auth, where it is deployed]",
    challenges: [
      {
        challenge: "[TODO: a concrete problem you hit]",
        solution: "[TODO: how you solved it]",
      },
    ],
    nextSteps: ["[TODO: what you would improve next]"],
    liveUrl: "[TODO: live demo URL]",
    githubUrl: "[TODO: GitHub URL]",
    image: null,
    imageAlt: "Screenshot of the BASARA waste bank system dashboard",
  },
  {
    slug: "eva-salon",
    title: "Eva Salon Booking Website",
    originalName: "Website Booking Eva Salon",
    problem: "[TODO: one-line problem statement]",
    role: "[TODO: your specific role]",
    stack: ["[TODO: tech stack]"],
    features: [
      "[TODO: key feature 1]",
      "[TODO: key feature 2]",
      "[TODO: key feature 3]",
    ],
    outcome: "[TODO: outcome]",
    architecture: "[TODO: architecture overview]",
    challenges: [
      {
        challenge: "[TODO: a concrete problem you hit]",
        solution: "[TODO: how you solved it]",
      },
    ],
    nextSteps: ["[TODO: what you would improve next]"],
    liveUrl: "[TODO: live demo URL]",
    githubUrl: "[TODO: GitHub URL]",
    image: null,
    imageAlt: "Screenshot of the Eva Salon booking website",
  },
  {
    slug: "warung-pak-raswan",
    title: "Inventory & Stock Adjustment System for Warung Sembako Pak Raswan",
    originalName: "Sistem Inventaris dan Penyesuaian Stok - Warung Sembako Pak Raswan",
    problem: "[TODO: one-line problem statement]",
    role: "[TODO: your specific role]",
    stack: ["[TODO: tech stack]"],
    features: [
      "[TODO: key feature 1]",
      "[TODO: key feature 2]",
      "[TODO: key feature 3]",
    ],
    outcome: "[TODO: outcome]",
    architecture: "[TODO: architecture overview]",
    challenges: [
      {
        challenge: "[TODO: a concrete problem you hit]",
        solution: "[TODO: how you solved it]",
      },
    ],
    nextSteps: ["[TODO: what you would improve next]"],
    liveUrl: "[TODO: live demo URL]",
    githubUrl: "[TODO: GitHub URL]",
    image: null,
    imageAlt: "Screenshot of the Warung Pak Raswan inventory system",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
