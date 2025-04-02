import { BlogPost } from "../../types/constants";
import { FSMTutorial } from "./BlogComponents/FSMTutorial";

export const BLOG_POSTS_COMPONENTS = {
  "fsm-tutorial": FSMTutorial,
}

export const blogPosts: BlogPost[] = [
  {
    id: "fsm-tutorial",
    title: "Building a Finite State Machine in C# & Unity",
    date: "2025-04-01",
    preview: "A guide on optimizing your state management in Unity using Finite State Machines.",
    tags: ["Unity", "C#"],
  },
];