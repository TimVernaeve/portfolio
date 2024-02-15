import Image from "next/image"

interface WorkCardProps {
    title: string;
    image: string;
}

const Workcard = ({title, image}: WorkCardProps) => {
    return (
        <div className="flex justify-between items-center py-8 box-border border border-l-0 border-r-0 border-t-1 border-b-1 border-neutral-400">
        <span className="font-bold uppercase text-xxl">
          {title}
        </span>
        <Image width={200} height={150} src={image} alt="bla" />
      </div>
    )
}

export default Workcard