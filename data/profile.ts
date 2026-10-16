import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Fathur Rahman Rifaldi",
  shortName: "Fathur",
  role: "Fullstack Web Developer - Open for Internship",
  tagline:
    "I build Laravel and PostgreSQL web apps for small organizations, from a neighborhood waste bank to a local salon's booking system.",
  status: "7th-semester Information Systems student",
  location: "Indonesia",
  availability: "[TODO: start date, duration, remote/onsite/hybrid, city]",
  email: "fathurrahmanrifaldi@gmail.com",
  cvUrl:
    "https://drive.google.com/drive/folders/1c0MO0Me3gWy0X6Afk5jIkpq92qbi8WCk?usp=sharing",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/fathurrahmanrifaldi",
      handle: "fathurrahmanrifaldi",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fathurrifaldi",
      handle: "fathurrifaldi",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:fathurrahmanrifaldi@gmail.com",
      handle: "fathurrahmanrifaldi@gmail.com",
      icon: "mail",
    },
  ],
  about: [
    "I study Information Systems at Universitas Bina Sarana Informatika, now in my 7th semester. I build fullstack web apps with Laravel and PHP, store data in PostgreSQL or MySQL, and ship with Docker to Vercel or Render.",
    "[TODO: describe how you work in 2-3 sentences, e.g. how you plan a feature, how you test it, and how you review code from AI tools like GitHub Copilot or Codex before you commit it.]",
  ],
  lookingFor:
    "I'm looking for a Fullstack or Web Developer internship (PKL/magang). [TODO: name the kind of team or product you want to work on.]",
  facts: [
    { label: "Focus", value: "Fullstack web development" },
    { label: "Study", value: "Information Systems, 7th semester" },
    { label: "GPA", value: "3.7 / 4.0" },
    { label: "Based in", value: "Indonesia [TODO: city]" },
    { label: "Availability", value: "[TODO: start date, duration, work mode]" },
  ],
};
