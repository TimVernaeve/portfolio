'use client'

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
            <Icon name="arrow-down" className="w-8 h-8" />
          </motion.div>
          <span>scroll down</span>
        </div>
        <span className="uppercase">open to work</span>
      </motion.div>
    </section>
  );
};

export default Landing;
