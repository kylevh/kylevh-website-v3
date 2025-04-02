import { Project } from "../../types/constants";

// Keep everything undercase
// Tags must not exceed 3 tags, must be short and concise
// Make sure link is the same as the id

export const projects: Project[] = [
  {
    id: "tamagrow",
    title: "tamagrow.io",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. uisquam, quos. lorem ipsum deloa teu eu amo",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "/projects/tamagrow"
  },
  {
    id: "ozplay",
    title: "ozplay",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. uisquam, quos. lorem ipsum deloa teu eu amo",
    tags: ["C", "Electron", "TypeScript"],
    link: "/projects/ozplay"
  },
  {
    id: "affordability-testing-tool",
    title: "college affordability testing tool",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. uisquam, quos. lorem ipsum deloa teu eu amo",
    tags: ["AWS", "Python", "Django", "Javascript"],
    link: "/projects/affordability-testing-tool"
  },
  {
    id: "kualnotes",
    title: "kual.notes",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. uisquam, quos. lorem ipsum deloa teu eu amo",
    tags: ["React", "Python"],
    link: "/projects/kualnotes"
  },
  {
    id: "corpsebound",
    title: "corpsebound",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. uisquam, quos. lorem ipsum deloa teu eu amo",
    tags: ["Unity3D", "C#"],
    link: "/projects/corpsebound"
  },
  
  // Add more projects here...
];