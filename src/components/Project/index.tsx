"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeInTop } from "@/helpers/animations";

import { ProjectTypes } from "@/types/projects";

interface ProjectDetailsProps {
  project: ProjectTypes;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const paragraphs = project.description.split("\n");

  return (
    <section className="flex flex-col min-h-screen gap-8 pb-8 p-8">
      <motion.span
        className="text-xl"
        initial="hidden"
        animate="visible"
        variants={fadeInTop}
      >
        Tim Vernaeve
      </motion.span>
      <div className="grid grid-cols-12 gap-x-4 ">
        <div className="flex flex-col gap-4 col-span-6">
          <h1 className="font-bold uppercase text-xxl">{project.name}</h1>
          <div className="flex gap-4">
            {project.tags.map((tag, key) => (
              <span
                className="text-xs font-bold outline outline-1 outline-white rounded-full px-2 py-1 box-border"
                key={key}
              >
                {tag}
              </span>
            ))}
          </div>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="col-start-8 col-span-5">
          {project.images.map((image, key) => (
            <div className="relative w-[600px] h-[600px]">
              <Image
                key={key}
                fill
                src={image}
                alt={project.name}
                sizes="200px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
