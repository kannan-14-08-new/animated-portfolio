import { ProjectsDetails } from "@/constants/Projects";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 relative z-50 px-[20px] md:px-4 sm:px-8"
      id="projects"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-20">
        My Projects
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {ProjectsDetails.map((project) => (
          <Link
            key={project.name}
            href={project.href}
            target="_blank"
            className="flex flex-col justify-between border-2 border-purple-500 rounded-lg hover:scale-105 transition-transform duration-300 hover:border-green-300"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={1000}
              height={600}
              className="w-full h-auto rounded-t-lg object-cover"
              priority={false}
            />
            <hr className="border-purple-500" />
            <div className="py-6 px-4 flex flex-col items-center gap-2">
              <h1 className="text-white text-xl sm:text-2xl font-bold font-sans text-center">
                {project.name}
              </h1>
              <p className="text-gray-400 text-center text-sm sm:text-base">
                {project.des}{" "}
                <span className="text-purple-500 font-bold">{project.span}</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
