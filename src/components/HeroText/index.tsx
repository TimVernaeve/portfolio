"use client";

import { useScramble } from "use-scramble";

const HeroText = () => {
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
    <div>
      <h1 className="font-bold text-xxl md:text-display" ref={ref1} />
      <h1 className="font-bold text-xxl md:text-display" ref={ref2} />
    </div>
  );
};

export default HeroText;