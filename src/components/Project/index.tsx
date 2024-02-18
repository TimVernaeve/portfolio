"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { fadeInTop } from "@/helpers/animations";

import { ProjectTypes } from "@/types/projects";
import Link from "next/link";

import Icon from "@/components/Icon";

interface ProjectDetailsProps {
  project: ProjectTypes;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const paragraphs = project.description.split("\n");

  return (
    <section className="flex flex-col min-h-screen gap-8 pb-8 p-8">
      <motion.div
        className="text-xl"
        initial="hidden"
        animate="visible"
        variants={fadeInTop}
      >
        <Link href="/">Tim Vernaeve</Link>
      </motion.div>
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-x-4 ">
        <div className="flex flex-col gap-4 col-span-6">
          <h1 className="font-bold uppercase text-xl sm:text-xxl">
            {project.name}
          </h1>
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
          <div className="flex gap-8">
            <a
              href={project.link}
              target="_blank"
              className="flex gap-4 h-fit w-fit items-center justify-center uppercase text-xs outline outline-2 rounded-full px-4 py-3 hover:text-off-black hover:bg-white"
            >
              link to website
              <Icon className="w-6 h-6" name='internet'/>
            </a>
            <a
              href={project.github}
              target="_blank"
              className="flex gap-4 h-fit w-fit items-center justify-center uppercase text-xs outline outline-2 rounded-full px-4 py-3 hover:text-off-black hover:bg-white"
            >
              link to github
              <Icon className="w-6 h-6" name='github'/>
            </a>
          </div>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <Link
            href="/"
            className="flex gap-4 h-fit w-fit items-center justify-center uppercase text-s outline outline-2 rounded-full px-4 py-3 hover:text-off-black hover:bg-white"
          >
            <div className="flex relative w-6 h-6">
              <Icon name="arrow-down" className="w-6 h-6 rotate-90" />
            </div>
            back to homepage
          </Link>
        </div>
        <div className="col-start-8 col-span-5">
          {project.images.map((image, key) => (
            <div
              className="relative w-full aspect-video lg:w-[600px] lg:h-[600px]"
              key={key}
            >
              <Image
                fill
                src={image}
                alt={project.name}
                sizes="200px"
                className="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
