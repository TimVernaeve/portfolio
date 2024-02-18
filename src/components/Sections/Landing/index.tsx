"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { useScramble } from "use-scramble";

import { bounceAnimation, fadeInBottom, fadeInTop } from "@/helpers/animations";

import Icon from "@/components/Icon";

const Landing = () => {
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
    <section className="flex flex-col min-h-full justify-between p-8 box-border">
      <motion.div
        className="text-xl"
        initial="hidden"
        animate="visible"
        variants={fadeInTop}
      >
        <Link href="/">Tim Vernaeve</Link>
      </motion.div>
      <div>
        <h1 className="font-bold text-xxl md:text-display" ref={ref1} />
        <h1 className="font-bold text-xxl md:text-display" ref={ref2} />
      </div>
      <motion.div
        className="w-full text-m flex items-center justify-start"
        initial="hidden"
        animate="visible"
        variants={fadeInBottom}
      >
        <div className="w-fit sm:w-full flex flex-col-reverse sm:flex-row gap-8 sm:gap-0 items-start justify-between">
          <div className="flex gap-4">
            <motion.div
              className="relative w-8 h-8"
              initial="up"
              animate="down"
              // @ts-ignore
              variants={bounceAnimation}
            >
              <Icon name="arrow-down" className="w-8 h-8" />
            </motion.div>
            <span className="uppercase">scroll down</span>
          </div>
          <span className="uppercase hidden sm:block">open to work</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Landing;
