import Image from "next/image";
import Container from "../components/container";
import Heading from "../components/heading";
import Logo from "../components/Logo";
import JsLogo from "../public/logos/js.svg";
import CssLogo from "../public/logos/css.svg";
import HtmlLogo from "../public/logos/html.svg";
import ReactLogo from "../public/logos/react.svg";
import NodeLogo from "../public/logos/node.png";
import PostgresSqlLogo from "../public/logos/postgresql.png";
import MongoDBLogo from "../public/logos/mongoDB.png";
import TailwindLogo from "../public/logos/tailwind.png";
import MaterialLogo from "../public/logos/material-ui.svg";
import BootstrapLogo from "../public/logos/bootstrap.svg";
import profileImg from "../public/saadia.jpeg";
const logos = [
  { img: HtmlLogo, alt: "HTML logo" },
  { img: CssLogo, alt: "CSS logo" },
  { img: JsLogo, alt: "JS logo" },
  { img: ReactLogo, alt: "React logo" },
  { img: NodeLogo, alt: "Node logo" },
  { img: PostgresSqlLogo, alt: "Postgresql logo" },
  { img: MongoDBLogo, alt: "MongoDb logo" },
  { img: TailwindLogo, alt: "Tailwind logo" },
  { img: MaterialLogo, alt: "Material UI logo" },
  { img: BootstrapLogo, alt: "Bootstrap logo" },
];
export default function About() {
  return (
    <Container id="about" bg_class="bg-primary_2">
      <Heading text="About me" />
      <div className="mt-10 flex flex-row flex-wrap content-center justify-center gap-3 sm:flex-nowrap">
        <Image
          className="w-contain h-max drop-shadow-md grayscale hover:filter-none"
          src={profileImg}
          alt="my-photo"
        />
        <p className="select-none bg-primary_1 p-4 text-justify font-montserrat text-lg leading-8 text-teal-50 antialiased drop-shadow-md">
          Hello, I'm Saadia, and I have a passion for problem-solving and
          debugging 🐞. I discovered my love for programming back in high
          school, where I began creating websites using basic HTML with just a
          simple text editor, like NotePad 😆. However, I initially pursued a
          career in hydraulic engineering and worked in the field for a couple
          of years. Eventually, I realised that my heart wasn't in it, and I
          yearned to return to my true passion: programming. Recently, I made
          the decision to switch careers and pursue a path in tech. I'm excited
          to see where this journey takes me!
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
