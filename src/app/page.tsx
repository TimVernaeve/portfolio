import Landing from "@/components/Sections/Landing";
import About from "@/components/Sections/About";
import Work from "@/components/Sections/Work";

export default function Home() {
  return (
    <main className="flex h-full flex-col gap-8 box-border">
      <Landing />
      <About />
      <Work />
    </main>
  );
}
