import Container from "../components/container";
import ExpContainer from "../components/expContainer";
import Heading from "../components/heading";

export default function Experience() {
  return (
    <Container id="experience" bg_class="bg-primary_1 xl:bg-main">
      <Heading text="Experience" />
      <ExpContainer />
    </Container>
  );
}
