"use client";

import Image from "next/image";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { useScramble } from "use-scramble";
import { motion } from "framer-motion";

import { bounceAnimation, footerAnimation, fadeInLeft, fadeInRight, fadeInBottom, fadeInTop } from "@/helpers/animations";

import Workcard from "@/components/WorkCard";

export default function Home() {
  const { ref: ref1 } = useScramble({
    text: "Creative Web",
    speed: 0.35,
    tick: 1,
    step: 1,
    scramble: 1,
    seed: 1,
  });

  const { ref: ref2 } = useScramble({
    text: "Developer",
    speed: 0.35,
    tick: 1,
    step: 1,
    scramble: 1,
    seed: 1,
  });

  return (
    <main className="font-body flex h-full flex-col gap-8 box-border">
      <section className="flex flex-col min-h-screen justify-between p-8">
        <motion.span
          className="text-xl"
          initial="hidden"
          animate="visible"
          variants={fadeInTop}
        >
          Tim Vernaeve
        </motion.span>
        <div>
          <h1 className="font-bold text-display" ref={ref1} />
          <h1 className="font-bold text-display" ref={ref2} />
        </div>
        <motion.div
          className="flex justify-between text-m"
          initial="hidden"
          animate="visible"
          variants={fadeInBottom}
        >
          <div className="flex gap-4">
            <motion.div
              className="relative w-8 h-8"
              initial="up"
              animate="down"
              // @ts-ignore
              variants={bounceAnimation}
            >
              <Image
                fill
                src="/img/arrow-down.svg"
                alt="arrow down"
                sizes="32px"
              />
            </motion.div>
            <span>scroll down</span>
          </div>
          <span className="uppercase">open to work</span>
        </motion.div>
      </section>
      <section className="grid min-h-screen grid-cols-12 gap-x-4 content-center p-8">
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
            Throughout the years I have developed a passion for everything
            related to design and web development. Being able to practice this
            passion on a professional level is a dream of mine. I’m rational and
            precise. I try to non-stop develop my skills and hope to learn many
            more things in the future.
          </p>
        </motion.div>
        <motion.div
          className="h-fit col-start-8 col-span-5 flex flex-col items-end gap-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeInRight}
        >
          <h2 className="uppercase text-l">my stack</h2>
          <TagCloud
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
              radius: Math.min(600, w.innerWidth, w.innerHeight) / 2,
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
      <section className="flex flex-col min-h-screen justify-between pb-8 p-8">
        <div className="flex flex-col gap-8">
          <h2 className="uppercase text-l">my work</h2>
          <div>
            <Workcard
              title="buurtplanr"
              image="https://picsum.photos/200/150"
            />
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
                <Image
                  fill
                  src="/img/linkedin.svg"
                  alt="linkedin"
                  sizes="32px"
                />
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
    </main>
  );
}
