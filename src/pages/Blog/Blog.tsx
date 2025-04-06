import { motion } from "framer-motion";
import BlogCard from "../../components/Card/BlogCard";
import { blogPosts } from "./BlogData";
import { useDocumentTitle } from "../../lib/useDocumentTitle";

const Blog = () => {
  useDocumentTitle("kyle huynh | blog");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      className="flex-1 w-full max-w-7xl h-full grid gap-3 p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:place-content-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="feed"
      aria-label="Blog posts"
    >
      {blogPosts.map((post, index) => (
        <BlogCard 
          key={post.id} 
          post={post} 
          aria-posinset={index + 1}
          aria-setsize={blogPosts.length}
        />
      ))}
    </motion.section>
  );
};

export default Blog;


