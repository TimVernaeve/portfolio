'use client'

import Image from "next/image";
import { motion } from "framer-motion";

import { footerAnimation } from "@/helpers/animations";

import Workcard from "@/components/WorkCard";

const Work = () => {
  return (
    <section className="flex flex-col min-h-screen justify-between pb-8 p-8">
      <div className="flex flex-col gap-8">
        <h2 className="uppercase text-l">my work</h2>
        <div>
          <Workcard title="buurtplanr" image="https://picsum.photos/200/150" />
          <Workcard
            title="donuttello"
            image="https://picsum.photos/200/150"
            lineDisabled
          />
          <Workcard
            title="portfolio"
            image="https://picsum.photos/200/150"
            lineDisabled
          />
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
            className="flex gap-8"
            target="_blank"
          >
            <span>Linkedin</span>
            <div className="relative w-8 h-8">
              <Image fill src="/img/linkedin.svg" alt="linkedin" sizes="32px" />
            </div>
          </a>
          <a
            href="https://github.com/TimVernaeve"
            className="flex gap-8"
            target="_blank"
          >
            <span>Github</span>
            <div className="relative w-8 h-8">
              <Image fill src="/img/github.svg" alt="github" sizes="32px" />
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
