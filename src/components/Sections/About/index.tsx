'use client'

import Image from "next/image";

import { motion } from "framer-motion";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { useMediaQuery } from '@mantine/hooks';

import { fadeInLeft, fadeInRight } from "@/helpers/animations";

const About = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <section className="flex flex-col gap-8 xl:grid h-fit xl:min-h-screen xl:grid-cols-12 xl:gap-x-4 content-center p-8">
      <motion.div
        className="flex flex-col h-fit col-span-6 gap-8"
        initial="hidden"
        whileInView="visible"
        variants={fadeInLeft}
      >
        <div className="relative aspect-[16/12]">
          <Image
            className="rounded-xl z-50"
            fill
            src="/img/foto-tim.webp"
            alt="Profile Picture"
            sizes="100% 100%"
            priority
          />
          <div className="absolute animate-pulse-light z-40 w-full h-full rounded-full top-0 left-0" />
        </div>
        <p className="text-[1.8rem] font-light leading-8">
          Throughout the years I have developed a passion for everything related
          to design and web development. Being able to practice this passion on
          a professional level is a dream of mine. I’m rational and precise. I
          try to non-stop develop my skills and hope to learn many more things
          in the future.
        </p>
      </motion.div>
      <motion.div
        className="h-fit col-start-8 col-span-5 flex flex-col items-center xl:items-end gap-8"
        initial="hidden"
        whileInView="visible"
        variants={fadeInRight}
      >
        <h2 className="uppercase text-l">my stack</h2>
        <TagCloud
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: isMobile ? Math.min(300, w.innerWidth, w.innerHeight) / 2 : Math.min(600, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "fast",
            initSpeed: "normal",
            keep: false,
          })}
          onClick={(tag: string) => alert(tag)}
          onClickOptions={{ passive: true }}
        >
          {[
            "VSCode",
            "TypeScript",
            "React",
            "Next",
            "ESLint",
            "Framer Motion",
            "Vue",
            "PostCSS",
            "Tailwind",
            "Sass",
            "BEM",
            "Node",
            "PHP",
            "MySQL",
            "MongoDB",
            "Vite",
            "Vercel",
          ]}
        </TagCloud>
      </motion.div>
    </section>
  );
};

export default About;
