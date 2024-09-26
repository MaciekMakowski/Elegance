import About from "../sections/About";
import CallToAction from "../sections/CallToAction";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Offer from "../sections/Offer";
import WhyUs from "../sections/WhyUs";
import Portfolio from "../sections/Portfolio";
const Main = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <CallToAction />
      <Offer />
      <WhyUs />
      <Contact />
      <Portfolio />
    </main>
  );
};

export default Main;
