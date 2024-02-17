import Image from "next/image"
import { motion } from "framer-motion"

interface WorkCardProps {
    title: string;
    image: string;
}

const textMotion = {
  rest: {
    x: 0
  },
  hover: {
    x: 32
  }
}

const imageMotion = {
  rest: {
    scale: 0
  },
  hover: {
    scale: 1
  }

}

const Workcard = ({title, image}: WorkCardProps) => {
    return (
      <motion.a
      initial="rest"
      whileHover="hover"
      href=''
      className="flex justify-between items-center py-8 group box-border border border-l-0 border-r-0 border-t-1 border-b-1 border-neutral-400"
    >
      <motion.span
        variants={textMotion}
        className="font-bold uppercase text-xxl"
      >
        {title}
      </motion.span>
      <motion.div variants={imageMotion} className="relative w-52 h-36">
        <Image className="cover" fill src={image} alt="bla" />
      </motion.div>  
    </motion.a>
    )
}

export default Workcard