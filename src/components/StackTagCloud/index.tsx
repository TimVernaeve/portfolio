"use client";

import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { useMediaQuery } from "@mantine/hooks";

const StackTagCloud = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <TagCloud
      options={(w: Window & typeof globalThis): TagCloudOptions => ({
        radius: isMobile
          ? Math.min(300, w.innerWidth, w.innerHeight) / 2
          : Math.min(600, w.innerWidth, w.innerHeight) / 2,
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
  );
};

export default StackTagCloud;
