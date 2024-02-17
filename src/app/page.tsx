'use client'

import Image from "next/image";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { useScramble } from "use-scramble";

import Workcard from '@/components/WorkCard';

export default function Home() {
  const { ref: ref1 } = useScramble({
    text: "Creative Web",
    speed: .35,
    tick: 1,
    step: 1,
    scramble: 1,
    seed: 1
  })

  const { ref: ref2 } = useScramble({
    text: "Developer",
    speed: .35,
    tick: 1,
    step: 1,
    scramble: 1,
    seed: 1
  })

  
  return (
    <main className="font-body flex h-full flex-col p-8 gap-8">
      <section className="flex flex-col min-h-full justify-between">
        <span className="text-xl">
          Tim Vernaeve
        </span>
        <div>
          <h1 className="font-bold text-display" ref={ref1}/> 
          <h1 className="font-bold text-display" ref={ref2}/> 
        </div>
        <div className="flex justify-between text-m">
          <div className="flex gap-4">
            <Image width={32} height={32} src="/img/arrow-down.svg" alt="arrow down" />
            <span>
              scroll down
            </span>
          </div>
          <span className="uppercase">
            open to work
          </span>
        </div>
      </section>
      <section className="grid min-h-full grid-cols-12 gap-x-4 content-center">
        <div className="flex flex-col h-fit col-span-6 gap-8">
          <div className="relative aspect-[16/12]">
            <Image className="rounded-xl z-50" fill src="/img/foto-tim.webp" alt="Profile Picture" />
            <div className="absolute animate-pulse-light z-40 w-full h-full rounded-full top-0 left-0"></div>
          </div>
          <p className="text-l font-light">
            Throughout the years I have developed a passion for everything related to design and web development. Being able to practice this passion on a professional level is a dream of mine. I’m rational and precise. I try to non-stop develop my skills and hope to learn many more things in the future.
          </p>
        </div>
        <div className="h-fit col-start-8 col-span-5 flex flex-col items-end gap-8">
          <h2 className="uppercase text-l">
            my stack
          </h2>
          <TagCloud
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
                radius: Math.min(600, w.innerWidth, w.innerHeight) / 2,
                maxSpeed: "fast",
                initSpeed: "fast",
                keep: false
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
                "Vercel"
            ]}
          </TagCloud>
        </div>
      </section>
      <section className="flex flex-col min-h-full justify-between pb-8">
        <div className="flex flex-col gap-8">
          <h2 className="uppercase text-l">
            my work
          </h2>
          <div>
            <Workcard title="buurtplanr" image="https://picsum.photos/200/150" />
            <Workcard title="donuttello" image="https://picsum.photos/200/150" />
            <Workcard title="portfolio" image="https://picsum.photos/200/150" />
          </div>
        </div>
        <div className="flex justify-between">
          <a 
            href='mailto:timvernaeve@gmail.com' 
             className="flex h-fit items-center justify-center uppercase text-xl outline outline-2 rounded-full px-4 py-3 hover:text-off-black hover:bg-white" 
            target="_blank"
            >
            get in touch
          </a>
          <div className="flex flex-col gap-4 text-mx font-bold items-end">
            <a 
              href='https://www.linkedin.com/in/tim-vernaeve-44ba99203/'
              className="flex gap-8"
              target="_blank"
              >
              <span>
                Linkedin
              </span>
              <Image width={32} height={32} src="/img/linkedin.svg" alt="linkedin" />
            </a>
            <a 
              href='https://github.com/TimVernaeve'
              className="flex gap-8"
              target="_blank"
              >
              <span>
                Github
              </span>
              <Image width={32} height={32} src="/img/github.svg" alt="github" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
