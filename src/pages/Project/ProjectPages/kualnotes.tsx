import { Project } from "../../../types/constants";
import Card from "../../../components/Card/Card";
import image1 from "/src/assets/projects/kualnotes/1.webp";

import { useDocumentTitle } from "../../../lib/useDocumentTitle";
import SingleImage from "../../../components/Carousel/ImageSingle";
import { Link } from "react-router";

export default function KualNotes({ project }: { project: Project }) {
  const kualImages = [image1];
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
        Designed and built a prototype journaling interface using React & figma. Focused on creating a clean, neomorphic UI design while exploring ideas for potential AI features.
        </p>
      </Card>

      <SingleImage image={kualImages[0]} doubleColumn={true} />

      <Card className="max-h-fit">
        <p>about</p>
        <p className="text-neutral-500">
          Kual.Notes is a conceptual AI-enhanced journaling platform developed during the ProSeed 2022 Hackathon. The prototype focused on clean UI design and basic journal entry functionality, with concepts for AI features that could analyze writing patterns. While the project remained in early stages, it was a good exercise in rapid prototyping and UI design within tight time constraints.
        </p>
      </Card>

      <div className="me:col-start-2 flex flex-col h-full gap-3">
        <Card className="flex-1">
          <p>more info</p>
          <Link
            to={`https://devpost.com/software/kual-notes?ref_content=my-projects-tab&ref_feature=my_projects`}
            target="_blank"
            className="flex w-full"
          >
            <button className="bg-neutral-950 flex-1 text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors">
              visit
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
