import Container from "../components/container";
import Heading from "../components/heading";

export default function About() {
  return (
    <Container id="about" bg_class="bg-primary_1">
      <Heading text="About me" />
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>
    </Container>
  );
}
