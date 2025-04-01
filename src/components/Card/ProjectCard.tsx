import { Link } from "react-router";
import Card from "../Card/Card";
import { Project } from "../../types/constants";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="max-h-64">
      {/* Title */}
      <p>{project.title}</p>

      {/* Project Tags */}
      <div className="flex gap-2 text-xs">
        {project.tags.map((tag) => (
          <p 
            key={tag} 
            className="text-neutral-400 bg-neutral-200 rounded-lg p-1 px-2"
          >
            {tag}
          </p>
        ))}
      </div>

      {/* Description */}
      <p className="text-neutral-400">{project.description}</p>

      {/* Project Links */}
      <Link to={`/project/${project.id}`} className="flex w-full">
        <button className="bg-neutral-200 flex-1 text-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-300 transition-colors">
          view
        </button>
      </Link>
    </Card>
  );
}