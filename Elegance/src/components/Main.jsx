import About from "../sections/About";
import CallToAction from "../sections/CallToAction";
import Hero from "../sections/Hero";
import Offer from "../sections/Offer";
const Main = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <CallToAction />
      <Offer />
    </main>
  );
};

export default Main;
