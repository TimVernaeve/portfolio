import Link from "next/link";
import AnimationContainer from "@/components/AnimationContainer";

const Nav = () => {
  return (
    <AnimationContainer
      className="text-xl"
      initial="hidden"
      animate="visible"
      variants="top"
    >
      <Link href="/">Tim Vernaeve</Link>
    </AnimationContainer>
  );
};

export default Nav;
