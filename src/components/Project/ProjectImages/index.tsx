'use client'

import ModalImage from "react-modal-image";

interface ProjectImagesProps {
  images: string[],
  alt: string
}

const ProjectImages = ({images, alt}: ProjectImagesProps) => {
  return (
    <div className="col-start-8 col-span-5 flex flex-col gap-2">
      {images.map((image, key) => (
        <div className="w-full" key={key}>
          <ModalImage
            small={image}
            large={image}
            alt={alt}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectImages