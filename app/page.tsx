import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import StarsCanvas from "@/components/main/StarBackground";

export default function Home() {
  return (
     <div className="relative z-30">
      <StarsCanvas/>
    <main className="h-full w-full ">
      <div className="flex flex-col gap-20 h-auto">
        <Hero />
        <Skills/>
        <Encryption />
        <Projects />
      </div>
    </main>
    </div>
  );
}
