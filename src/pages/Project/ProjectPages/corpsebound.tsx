import { Project } from "../../../types/constants";
import Card from "../../../components/Card/Card";
import { useDocumentTitle } from "../../../lib/useDocumentTitle";
import image1 from "/src/assets/projects/corpsebound/1.webp";
import image2 from "/src/assets/projects/corpsebound/2.png";
import image3 from "/src/assets/projects/corpsebound/3.png";
import image4 from "/src/assets/projects/corpsebound/4.png";
import ImageCarousel from "../../../components/Carousel/ImageCarousel";

export default function CorpseBound({ project }: { project: Project }) {
  const corpseImages = [image1, image2, image3, image4];
  useDocumentTitle("kyle huynh | " + project.title);

  return (
    <>
      <Card className="md:col-span-2 max-h-fit">
        <h1 className="font-normal">{project.title}</h1>
      </Card>

      <Card>
        <p className="text-neutral-500">{project.description}</p>
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

      <Card className="max-h-fit md:col-start-2">
        <p>role</p>
        <p className="text-neutral-500">
        led all technical development as the sole programmer, implementing the core game systems in Unity and C#.
        </p>
      </Card>

      <ImageCarousel className="md:col-span-2" images={corpseImages} />

      <Card className="max-h-fit">
        <p>about</p>
        <p className="text-neutral-500">
          CorpseBound is a 2D puzzle platformer created during the 2021 UW Game
          Jam. The game explores an unconventional mechanic where death becomes
          a strategic element - players use their character's corpse to reach
          previously inaccessible areas. This unique approach transforms what's
          typically a setback into a core gameplay feature, challenging players
          to think differently about progression.
        </p>
      </Card>

      <Card className="md:col-start-2 max-h-24">
        <p>copyright 2025 kyle huynh</p>
        <p className="text-neutral-500">all rights reserved</p>
      </Card>
    </>
  );
}
