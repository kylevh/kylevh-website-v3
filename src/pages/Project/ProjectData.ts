import { Project } from "../../types/constants";

// Keep everything undercase
// Tags must not exceed 3 tags, must be short and concise
// Make sure link is the same as the id

export const projects: Project[] = [
  {
    id: "tamagrow",
    title: "tamagrow.io",
    description: "venture-backed desktop overlay app leveraging real-time game telemetry to power a cute interactive companion",
    tags: ["React.js", "AWS", "Overwolf"],
    link: "/projects/tamagrow"
  },
  // {
  //   id: "ozplay",
  //   title: "ozplay",
  //   description: "native game overlay that transforms queue times into social gaming moments with friends through community-built minigames",
  //   tags: ["C#", "Electron"],
  //   link: "/projects/ozplay"
  // },
  {
    id: "catt",
    title: "college affordability testing tool",
    description: "django-powered testing platform that automates script execution and simplifies file management workflows",
    tags: [ "Python",  "Javascript", "AWS"],
    link: "/projects/catt"
  },
  {
    id: "corpsebound",
    title: "corpsebound",
    description: "unity-built video game where death becomes a strategic mechanic to progress through levels",
    tags: ["C#", "Unity3D"],
    link: "/projects/corpsebound"
  },
  {
    id: "kualnotes",
    title: "kual.notes",
    description: "smart journaling app that uses AI to convert mental health reflections into actionable wellness guidance",
    tags: ["React", "Python"],
    link: "/projects/kualnotes"
  },

];