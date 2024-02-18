'use client'

import projectsJson from "@/assets/projects.json";

import { ProjectTypes } from "@/types/projects";

import { motion } from "framer-motion";
import { useMediaQuery } from '@mantine/hooks';

import { fadeInBottom } from "@/helpers/animations";

import Workcard from "@/components/WorkCard";
import Icon from "@/components/Icon";

const Work = () => {
  const allProjects: ProjectTypes[] = Object.values(projectsJson).flat().slice().reverse();

  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <section className="flex flex-col h-fit gap-8 sm:gap-0 sm:min-h-screen justify-between pb-8 p-8">
      <div className="flex flex-col gap-8">
        <h2 className="uppercase text-m sm:text-l">selected works</h2>
        <div>
          {allProjects.map((project: ProjectTypes, index) => (
            <Workcard key={index} title={project.slug} image={project.thumbnail} lineDisabled={index > 0 ?? true} />
          ))}
        </div>
      </div>
      <motion.div
        initial={isMobile ? "visible" : "hidden"}
        whileInView={"visible"}
        variants={fadeInBottom}
        className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between"
      >
        <a
          href="mailto:timvernaeve@gmail.com"
          className="flex h-fit items-center justify-center uppercase w-full sm:w-fit text-s sm:text-xl outline outline-2 rounded-full px-4 py-3 hover:text-off-black hover:bg-white"
          target="_blank"
        >
          get in touch
        </a>
        <div className="flex flex-col gap-4 text-m sm:text-mx font-bold items-end">
          <a
            href="https://www.linkedin.com/in/tim-vernaeve-44ba99203/"
            className="flex gap-8 items-center"
            target="_blank"
          >
            <span>Linkedin</span>
            <Icon name="linkedin" className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/TimVernaeve"
            className="flex gap-8 items-center"
            target="_blank"
          >
            <span>Github</span>
            <Icon name="github" className="w-8 h-8" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
