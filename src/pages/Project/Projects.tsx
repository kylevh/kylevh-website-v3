import { motion } from "framer-motion";
import { projects } from "./ProjectData";
import ProjectCard from "../../components/Card/ProjectCard";
import { useDocumentTitle } from "../../lib/useDocumentTitle";

const Projects = () => {
  useDocumentTitle("projects | kyle huynh");
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
      className="flex-1 w-full max-w-7xl h-full grid gap-3 p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:place-content-center "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      }
      
    </motion.section>
  );
};

export default Projects;
