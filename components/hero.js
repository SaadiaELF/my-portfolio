import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <div className="relative isolate animate-fade px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-5xl py-24 sm:py-36 lg:py-48">
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
          <a
            href="https://www.linkedin.com/in/saadia-el-fekak-5b138780/"
            target="_blank"
            className="rounded-md border border-solid border-primary_2 bg-primary_1 px-5 py-1.5 text-sm text-secondary_2 shadow-sm hover:bg-primary_2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary_2"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#00fff5" }} />
            <span className="ps-1.5">LinkedIn</span>
          </a>
          <a
            href="https://github.com/SaadiaELF"
            target="_blank"
            className="rounded-md border border-solid border-primary_2 bg-primary_1 px-5 py-1.5 text-sm text-secondary_2 shadow-sm hover:bg-primary_2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary_2"
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: "#00fff5" }} />
            <span className="ps-1.5">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
}
