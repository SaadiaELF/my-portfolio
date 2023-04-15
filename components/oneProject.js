import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function OneProject({ project }) {
  return (
    <div className="mt-10 grid h-max min-w-full gap-x-3 gap-y-2 sm:h-80 sm:grid-cols-2 sm:grid-rows-4 ">
      <div className="flex items-center justify-between p-2">
        <h3 className="font-barlow text-2xl tracking-tight text-secondary_1 sm:text-3xl ">
          {project.title}
        </h3>
        <div className="flex items-center">
          <a href={project.github} target="_blank" className="h-fit px-2">
            <FontAwesomeIcon
              className="icon"
              icon={faGithub}
              size="lg"
              style={{ color: "#00ADB5" }}
            />
          </a>
          <a href={project.url} target="_blank" className="h-fit px-2">
            <FontAwesomeIcon
              className="icon"
              icon={faUpRightFromSquare}
              size="lg"
              style={{ color: "#00ADB5" }}
            />
          </a>
        </div>
      </div>
      <div className="h-max bg-secondary_1 sm:h-80">
        <Image
          className="w-contain max-w-60 contrast[10%] h-max mix-blend-multiply drop-shadow-md hover:mix-blend-normal hover:filter-none sm:h-80 "
          src={project.image}
          alt="project"
        />
      </div>
      <div className="flex w-full  flex-col justify-center bg-primary_1 p-4 sm:row-span-3  ">
        <p className="select-none bg-primary_1 text-justify font-montserrat text-base leading-6 text-teal-50 antialiased">
          {project.description}
        </p>
        <div className="mt-2 flex flex-wrap">
          {project.tech_stack.map((tech, i) => {
            return (
              <span
                key={i}
                className="m-1 rounded-lg bg-primary_2 px-2 py-1 font-montserrat text-sm text-secondary_1 antialiased"
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
