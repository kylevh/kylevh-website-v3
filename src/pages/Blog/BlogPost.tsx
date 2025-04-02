import { useParams, Navigate } from "react-router";
import { blogPosts, BLOG_POSTS_COMPONENTS } from "./BlogData";
import { motion } from "framer-motion";

export default function BlogPost() {
  const { id } = useParams();

  if (!id) return <Navigate to="/error" />;

  const blogPost = blogPosts.find((post) => post.id === id);
  const BlogComponent =
    BLOG_POSTS_COMPONENTS[id as keyof typeof BLOG_POSTS_COMPONENTS];

  if (!blogPost) {
    return <Navigate to="/error" />;
  }

  return (
    <motion.section
      className="flex-1 w-full max-w-5xl h-full grid gap-3 p-3 grid-cols-1 md:grid-cols-2 md:place-content-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <BlogComponent />
    </motion.section>
  );
}
