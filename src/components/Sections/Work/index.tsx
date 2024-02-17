'use client'

import projectsJson from "@/assets/projects.json";

import { ProjectTypes } from "@/types/projects";

import { motion } from "framer-motion";

import { footerAnimation } from "@/helpers/animations";

import Workcard from "@/components/WorkCard";
import Icon from "@/components/Icon";

const Work = () => {
  const allProjects: ProjectTypes[] = Object.values(projectsJson).flat().slice().reverse();

  return (
    <section className="flex flex-col min-h-screen justify-between pb-8 p-8">
      <div className="flex flex-col gap-8">
        <h2 className="uppercase text-l">my work</h2>
        <div>
          {allProjects.map((project: ProjectTypes, index) => (
            <Workcard key={index} title={project.slug} image={project.thumbnail} lineDisabled={index > 0 ?? true} />
          ))}
        </div>
      </div>
      <motion.div
        initial="out"
        whileInView="in"
        variants={footerAnimation}
        className="flex justify-between"
      >
        <a
          href="mailto:timvernaeve@gmail.com"
          className="flex h-fit items-center justify-center uppercase text-xl outline outline-2 rounded-full px-4 py-3 hover:text-off-black hover:bg-white"
          target="_blank"
        >
          get in touch
        </a>
        <div className="flex flex-col gap-4 text-mx font-bold items-end">
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
