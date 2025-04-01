import { Project } from "../../../types/constants";

export default function Tamagrow({project}: {project: Project}) {
  return (
    <div>
      <h1 className="text-2xl text-neutral-900 font-bold">{project.title}</h1>
      <p className="text-neutral-400">{project.description}</p>
      <p className="text-neutral-400">{project.tags.join(", ")}</p>
    </div>
  );
}
