import Image from "next/image";
import Container from "../components/container";
import Heading from "../components/heading";
import Logo from "../components/Logo";
import profileImg from "../public/saadia.jpeg";
import logos from "../data/logos.js";

export default function About() {
  return (
    <Container id="about" bg_class="bg-primary_2">
      <Heading text="About me" />
      <div className="mt-10 flex flex-wrap content-center justify-center gap-3 lg:flex-nowrap">
        <Image
          className="max-w-full drop-shadow-md grayscale hover:filter-none"
          src={profileImg}
          alt="my-photo"
        />
        <p className="select-none bg-primary_1 p-4 text-justify font-montserrat text-lg leading-8 text-teal-50 antialiased drop-shadow-md">
          Hey there, I'm Saadia, and I absolutely love problem-solving and
          debugging 🐞. My fascination with coding goes way back to high school
          when I started building websites with basic HTML using a humble text
          editor like NotePad 😆. I initially went down the path
          of hydraulic engineering and spent a few years in that field. But you
          know what? My heart just wasn't in it, and I couldn't shake my true
          passion: programming. So, I've recently made the bold move to switch
          gears and dive into the tech world. I can't wait to see where this new
          journey leads me! 😃
        </p>
      </div>

      <div className="bg-transparent py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-barlow text-4xl leading-8 text-secondary_1">
            Technical skills
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {logos.map((elt, i) => {
              return <Logo key={i} src={elt.img} alt={elt.alt}></Logo>;
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}
