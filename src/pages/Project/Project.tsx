import { useParams } from "react-router";
import { projects } from "./ProjectData";
import Error from "../Error";
import Tamagrow from "./ProjectPages/tamagrow";

const PROJECT_COMPONENTS = {
  tamagrow: Tamagrow,
} as const;


const Project = () => {
  const { id } = useParams();
  
  if (!id) return <Error />;

  const projectData = projects.find(project => project.id === id);
  const ProjectComponent = PROJECT_COMPONENTS[id as keyof typeof PROJECT_COMPONENTS];

  if (!projectData || !ProjectComponent) {
    return <Error />;
  }

  return (
    <section className="flex-1 w-full max-w-5xl h-full grid gap-3 p-3 grid-cols-1 md:grid-cols-4 md:place-content-center">
      <ProjectComponent project={projectData} />
    </section>
  );
};

export default Project;
