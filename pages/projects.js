import Container from "../components/container";
import Heading from "../components/heading";
import ProjectsContainer from "../components/projectsContainer";

export default function Projects() {
  return (
    <Container id="projects" bg_class="bg-primary_2">
      <Heading text="Projects" />
      <ProjectsContainer />
    </Container>
  );
}
