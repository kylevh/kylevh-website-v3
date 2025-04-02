import { Project } from "../../../types/constants";
import Card from "../../../components/Card/Card";
import ImagesCard from "../../../components/Card/ImagesCard";
import { Link } from "react-router";
import tamagrow1 from "/src/assets/projects/tamagrow-1.png"
import tamagrow2 from "/src/assets/projects/tamagrow-2.png"

export default function Tamagrow({ project }: { project: Project }) {
  const tamagrowImages = [
    tamagrow1,
    tamagrow2,
  ];

  return (
    <>
      <Card className="md:col-span-2 max-h-fit">
        <h1>{project.title}</h1>
      </Card>
      <Card className="max-h-fit ">
        <p className="text-neutral-500">{project.description}</p>
      </Card>
      <Card className="max-h-fit">
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
      </Card>

      <ImagesCard images={tamagrowImages} />

      <Card className="max-h-fit">
        <p className="text-neutral-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum fugit,
          eum nostrum quam reiciendis quos quod est, officiis sint nemo
          dignissimos impedit nihil accusantium illum deleniti, architecto eaque
          quis animi! Corporis atque cum maiores quibusdam esse placeat rem
          doloribus quas iusto eaque, dicta, ipsum culpa officia mollitia,
          delectus minus laudantium explicabo corrupti? Rerum repudiandae quia
          et nobis expedita eum ipsa.
        </p>
      </Card>

      <Card className=" md:col-start-2">
        <p>more info</p>
        <Link to={`${project.link}`} className="flex w-full">
          <button className="bg-neutral-200 flex-1 text-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-300 transition-colors">
            visit
          </button>
        </Link>
      </Card>
    </>
  );
}
