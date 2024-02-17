export const bounceAnimation = {
  up: { y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  down: {
    y: 10,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const footerAnimation = {
  out: {
    y: 32,
    opacity: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  in: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeInBottom = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeInTop = {
  hidden: {
    opacity: 0,
    y: -32,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};