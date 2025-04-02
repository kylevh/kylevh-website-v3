import { Project } from "../../../types/constants";
import Card from "../../../components/Card/Card";
import ImagesCard from "../../../components/Card/ImagesCard";

export default function Tamagrow({ project }: { project: Project }) {
  const tamagrowImages = [
    "/src/assets/projects/tamagrow-2.png",
    "/src/assets/projects/tamagrow-1.png",
    "/src/assets/blog/duck.jpg",
    "/src/assets/blog/2.png",
    "/src/assets/blog/mini.png",
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
        <p className="text-neutral-500">{project.tags.join(", ")}</p>
      </Card>

      <ImagesCard images={tamagrowImages} />

      <Card className="max-h-fit">
        <p className="text-neutral-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum fugit, eum nostrum quam reiciendis quos quod est, officiis sint nemo dignissimos impedit nihil accusantium illum deleniti, architecto eaque quis animi!
        Corporis atque cum maiores quibusdam esse placeat rem doloribus quas iusto eaque, dicta, ipsum culpa officia mollitia, delectus minus laudantium explicabo corrupti? Rerum repudiandae quia et nobis expedita eum ipsa.</p>
      </Card>
    </>
  );
}
