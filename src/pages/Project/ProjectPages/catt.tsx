import { Project } from "../../../types/constants";
import Card from "../../../components/Card/Card";
import ImagesCard from "../../../components/Card/ImagesCard";
import image1 from "/src/assets/projects/catt/1.webp";
import image2 from "/src/assets/projects/catt/2.webp";
import image3 from "/src/assets/projects/catt/3.webp";
import image4 from "/src/assets/projects/catt/4.webp";

import { useDocumentTitle } from "../../../lib/useDocumentTitle";

export default function catt({ project }: { project: Project }) {
  const cattImages = [image1, image2, image3, image4];
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
          Worked in a full stack capacity to develop a user-friendly testing interface using Django, Python, CSS, HTML, and JavaScript, streamlining the testing process for the College Affordability Application.
        </p>
      </Card>

      {/* Uncomment once you have images */}
      <ImagesCard images={cattImages} />

      <Card className="max-h-fit">
        <p>about</p>
        <p className="text-neutral-500">
          The College Affordability Testing Tool (CATT) is a dedicated web interface that streamlines the testing process for the College Affordability Model Application. It replaces manual console commands with an simplistic interface for executing test scripts, managing configuration files, and reviewing logs. The solution significantly improves efficiency for both developers and end-users by providing a centralized platform for all testing-related tasks, eliminating the need for direct backend access and reducing the technical learning curve.
        </p>
      </Card>

      <Card className="max-h-24">
        <p>copyright 2025 kyle huynh</p>
        <p className="text-neutral-500">all rights reserved</p>
      </Card>
    </>
  );
}
