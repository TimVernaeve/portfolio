import Image from "next/image";

import AnimationContainer from "@/components/AnimationContainer";
import StackTagCloud from "@/components/StackTagCloud";

const About = () => {

  return (
    <section className="flex flex-col gap-8 xl:grid h-fit xl:min-h-screen xl:grid-cols-12 xl:gap-x-4 content-center p-8">
      <AnimationContainer
        className="flex flex-col h-fit col-span-6 gap-8"
        initial="hidden"
        whileInView="visible"
        variants="left"
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
          to web development. Being able to practice this passion on a
          professional level is a dream of mine. I try to non-stop develop my
          skills and hope to learn many more things in the future. Building
          structured, clean and efficient code is what I strive for.
        </p>
      </AnimationContainer>
      <AnimationContainer
        className="h-fit col-start-8 col-span-5 flex flex-col items-center xl:items-end gap-8"
        initial="hidden"
        whileInView="visible"
        variants="right"
      >
        <h2 className="uppercase text-l">my stack</h2>
        <StackTagCloud />
      </AnimationContainer>
    </section>
  );
};

export default About;
