import { BlogPost } from "../../types/constants";
import { GettingStarted } from "./BlogComponents/GettingStarted";

export const BLOG_POSTS_COMPONENTS = {
  "getting-started": GettingStarted,
  "getting-started-2": GettingStarted,
  "getting-started-3": GettingStarted,
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started",
    title: "Getting Started with Web Development",
    date: "2024-03-20",
    preview: "A beginner's guide to starting your journey in web development. Learn about the essential tools and technologies you need to know.",
    tags: ["Web Development", "Beginners", "Programming"],
  },
  {
    id: "getting-started-2",
    title: "Getting Started with Web Development",
    date: "2024-03-20",
    preview: "A beginner's guide to starting your journey in web development. Learn about the essential tools and technologies you need to know.",
    tags: ["Web Development", "Beginners", "Programming"],
  },
  {
    id: "getting-started-3",
    title: "Getting Started with Web Development",
    date: "2024-03-20",
    preview: "A beginner's guide to starting your journey in web development. Learn about the essential tools and technologies you need to know.",
    tags: ["Web Development", "Beginners", "Programming"],
  },
];