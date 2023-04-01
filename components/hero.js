import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SocialLink from "./socialLink";

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
    <div className="relative isolate animate-fade px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-5xl py-4 sm:py-28 lg:py-36">
        <p className="mt-6 font-montserrat text-lg leading-8 text-teal-100">
          Hi, my name is
        </p>
        <h1 className="font-barlow text-4xl tracking-tight text-secondary_2 sm:text-7xl">
          Saadia El fekak
        </h1>
        <h1 className="font-barlow text-4xl tracking-tight text-secondary_1 sm:text-7xl">
          I build awesome things on the web.
        </h1>
        <p className="mt-6 font-montserrat text-lg leading-8 text-teal-100">
          I’m a full stack web developer based in Birmingham, UK. I'm using PERN
          and MERM stack to make exceptional web applications. Currently, I’m
          focusing on building accessible, human-centered products at
          <a
            className="p-1 text-secondary_2 hover:text-secondary_1"
            href="https://codeyourfuture.io/"
            target="_blank"
            alt="codeyourfuturre website"
          >
            CodeYourFuture.
          </a>
        </p>
        <div className="mt-10 flex items-center justify-start gap-x-3">
          {mySocialsLink.map((elt, i) => (
            <SocialLink key={i} details={elt} />
          ))}
        </div>
      </div>
    </div>
  );
}
