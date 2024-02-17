import projectsJson from "@/assets/projects.json";

import { ProjectTypes } from "@/types/projects";

import ProjectDetails from "@/components/Project";
interface ProjectProps {
  params: {
    slug: string;
  };
}

const Project = ({ params }: ProjectProps) => {
  const { slug } = params;

  let projectFound = false;

  let project: ProjectTypes | undefined;

  for (const year in projectsJson) {
    if (projectsJson.hasOwnProperty(year)) {
      project = projectsJson[year as keyof typeof projectsJson].find(
        (p) => p.slug === slug
      );
      if (project) {
        projectFound = true;
        break;
      }
    }
  }

  return (
    <main className="font-body flex h-full flex-col">
      {projectFound && <ProjectDetails project={project as ProjectTypes} />}
      {!projectFound && <h1>Project not found: {params.slug}</h1>}
    </main>
  );
};

export default Project;
