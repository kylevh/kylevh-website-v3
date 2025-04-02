import { useParams, Navigate } from "react-router";
import { projects } from "./ProjectData";
import Tamagrow from "./ProjectPages/tamagrow";
import { motion } from "framer-motion";

const PROJECT_COMPONENTS = {
  tamagrow: Tamagrow,
} as const;


const Project = () => { 
  const { id } = useParams();
  
  if (!id) return <Navigate to="/error" />;

  const projectData = projects.find(project => project.id === id);
  const ProjectComponent = PROJECT_COMPONENTS[id as keyof typeof PROJECT_COMPONENTS];

  if (!projectData || !ProjectComponent) {
    return <Navigate to="/error" />;
  }

  return (
    <motion.article className="flex-1 w-full max-w-5xl h-full grid gap-3 p-3 grid-cols-1 md:grid-cols-2 md:place-content-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }}
    >
      <ProjectComponent project={projectData} />
    </motion.article>
  );
};

export default Project;
