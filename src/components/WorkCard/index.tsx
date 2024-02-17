'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface WorkCardProps {
  title: string;
  image: string;
  lineDisabled?: boolean;
}

const textMotion = {
  rest: {
    x: 0,
    transition: { ease: "linear" },
  },
  hover: {
    x: 32,
    transition: { ease: "linear", duration: 0.15 },
  },
};

const imageMotion = {
  rest: {
    scale: 0,
    opacity: 0,
  },
  hover: {
    scale: 1,
    opacity: 1,
  },
};

const hrMotion = {
  initial: {
    width: 0,
    transition: { ease: "linear", duration: 0.5 },
  },
  inView: {
    width: "100%",
    transition: { ease: "linear", duration: 0.5 },
  },
};

const Workcard = ({ title, image, lineDisabled }: WorkCardProps) => {
  return (
    <Link href={`/my-work/${title}`}>
      <motion.div
        initial="rest"
        whileHover="hover"
        className="flex flex-col box-border"
      >
        {!lineDisabled && (
          <motion.hr
            className="w-full border-t-2 border-neutral-400 box-border"
            variants={hrMotion}
            initial="initial"
            whileInView="inView"
          />
        )}
        <div className="flex justify-between items-center py-8 box-border">
          <motion.span
            variants={textMotion}
            className="font-bold uppercase text-xxl"
          >
            {title}
          </motion.span>
          <motion.div variants={imageMotion} className="relative w-52 h-36">
            <Image
              className="cover"
              fill
              src={image}
              alt="bla"
              sizes="100% 100%"
            />
          </motion.div>
        </div>
        <motion.hr
          className="w-full border-t-2 border-neutral-400 box-border"
          variants={hrMotion}
          initial="initial"
          whileInView="inView"
        />
      </motion.div>
    </Link>
  );
};

export default Workcard;
