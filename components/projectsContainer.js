import OneProject from "./oneProject";
import projects from "../data/projects.js";

export default function ProjectsContainer() {
  return (
    <div className="flex flex-col justify-center gap-4">
      {projects.map((project, i) => {
        return <OneProject key={i} project={project} />;
      })}
    </div>
  );
}
