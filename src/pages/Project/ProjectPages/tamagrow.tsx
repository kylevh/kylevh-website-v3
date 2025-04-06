import { Project } from "../../../types/constants";
import Card from "../../../components/Card/Card";
import ImagesCard from "../../../components/Card/ImagesCard";
import { Link } from "react-router";
import image1 from "/src/assets/projects/tamagrow/1.png";
import image2 from "/src/assets/projects/tamagrow/2.png";
import image3 from "/src/assets/projects/tamagrow/3.png";
import image4 from "/src/assets/projects/tamagrow/4.png";
import image5 from "/src/assets/projects/tamagrow/5.png";
import image6 from "/src/assets/projects/tamagrow/6.png";
import image7 from "/src/assets/projects/tamagrow/7.png";
import image8 from "/src/assets/projects/tamagrow/8.png";

import { useDocumentTitle } from "../../../lib/useDocumentTitle";
export default function Tamagrow({ project }: { project: Project }) {
  const tamagrowImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
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
          spearheaded development using React, AWS, and Overwolf API,
          independently architecting and implementing all technical aspects from
          concept to deployment.
        </p>
      </Card>

      <ImagesCard images={tamagrowImages} />

      <Card className="max-h-fit">
        <p>about</p>
        <p className="text-neutral-500">
          Tamagrow.io is a desktop overlay application that enhances gameplay
          with an interactive pet companion powered by real-time game data. The
          React.js frontend delivers fluid animations and responsive
          interactions and is powered by a serverless AWS backend. The companion
          evolves and responds to player actions in real-time, creating a unique
          experience that grows with each gaming session.
        </p>
      </Card>

      <div className="me:col-start-2 flex flex-col h-full gap-3">
        <Card className="flex-1">
          <p>more info</p>
          <Link
            to={`https://tamagrow.io`}
            target="_blank"
            className="flex w-full"
          >
            <button
              disabled
              className="bg-neutral-200 flex-1 text-neutral-400 px-4 py-2 rounded-md cursor-not-allowed opacity-50"
            >
              coming soon!
            </button>
          </Link>
        </Card>
        <Card className="flex-1">
          <p>copyright 2025 kyle huynh</p>
          <p className="text-neutral-500">all rights reserved</p>
        </Card>
      </div>
    </>
  );
}
