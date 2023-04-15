import { ScrollToTop } from "../components/ScrollToTop";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import About from "./about";
import Contact from "./contact";
import Experience from "./experience";
import Projects from "./projects";

export default function Home() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
