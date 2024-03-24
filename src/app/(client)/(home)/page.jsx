import About from "./About";
import FAQ from "./FAQ";
import Featured from "./Featured";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <About />
      <FAQ />
      <Testimonial />
      <Pricing />
    </main>
  );
}
