export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-5xl py-24 sm:py-36 lg:py-48">
        <div className="">
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
            I’m a full stack web developer based in Birmingham, UK. I'm using PERN and
            MERM stack to make exceptional web applications. Currently, I’m
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
        </div>
      </div>
    </div>
  );
}
