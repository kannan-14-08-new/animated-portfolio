
import { ProjectsDetails } from "@/constants/Projects";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 px-10">
        {ProjectsDetails.map((project) => (
          <Link target="_blank" href={project.href} key={project.name} className="flex flex-col justify-between border-2 border-purple-500 rounded-[10px] hover:scale-[1.04] transition-all duration-300
          hover:border-green-300">
            <Image
              src={project.image}
              width={1000}
              height={1000}
              alt={project.name}
              className="rounded-t-[10px] lg:h-[240px] "
            />
           
             <hr className="text-purple-500"/>

            <div className="py-8 flex flex-col items-center gap-2.5">
            <h1 className="text-white text-2xl font-bold font-sans">{project.name}</h1>
            <p className="text-gray-400">{project.des} <span className="text-purple-500 font-bold">{project.span}</span> </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
