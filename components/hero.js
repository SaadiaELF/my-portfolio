import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SocialLink from "./socialLink";
import Container from "./container";

const mySocialsLink = [
  {
    text: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/saadia-el-fekak-5b138780/",
  },
  {
    text: "GitHub",
    icon: faGithub,
    link: "https://github.com/SaadiaELF",
  },
];

export default function Hero() {
  return (
    <Container id="hero" bg_class="bg-cover h-screen xl:bg-main">
      <p className="mt-6 font-montserrat text-lg leading-8 text-teal-100">
        Hi, my name is
      </p>
      <h1 className="font-barlow text-4xl tracking-tight text-secondary_2 sm:text-7xl">
        Saadia El fekak
      </h1>
      <h1 className="font-barlow text-4xl tracking-tight text-secondary_1 sm:text-7xl">
        I build awesome things on the web.
      </h1>
      <p className="mt-6 select-none font-montserrat text-lg leading-8 text-teal-100 antialiased">
        I’m a full stack web developer based in Birmingham, UK. I'm using
        <a
          className="p-1 font-bold text-secondary_2 hover:text-secondary_1"
          href="https://www.geeksforgeeks.org/what-is-pern-stack/"
          target="_blank"
        >
          PERN
        </a>
        and
        <a
          className="p-1 font-bold text-secondary_2 hover:text-secondary_1"
          href="https://www.mongodb.com/mern-stack#:~:text=MERN%20stands%20for%20MongoDB%2C%20Express,a%20client%2Dside%20JavaScript%20framework"
          target="_blank"
        >
          MERN
        </a>
        stack to make exceptional web applications. Currently, I’m focusing on
        building accessible, human-centred products at
        <a
          className="p-1 font-bold text-secondary_2 hover:text-secondary_1"
          href="https://codeyourfuture.io/"
          target="_blank"
          alt="codeyourfuture website"
        >
          CodeYourFuture.
        </a>
      </p>
      <div className="mt-10 flex items-center justify-start gap-x-3">
        {mySocialsLink.map((elt, i) => (
          <SocialLink key={i} details={elt} />
        ))}
      </div>
    </Container>
  );
}
