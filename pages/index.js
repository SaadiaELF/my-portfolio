import Hero from "../components/hero";
import Navbar from "../components/navbar";
import About from "./about";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
