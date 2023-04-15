import OneProject from "./oneProject";

export default function ProjectsContainer() {
  return (
    <div className="flex flex-col justify-center overflow-scroll sm:snap-x sm:snap-mandatory sm:flex-row">
      <OneProject />
      <OneProject />
      <OneProject />
    </div>
  );
}
