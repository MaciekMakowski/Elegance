import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Keys from "../icons/car-key.svg?react";
import AboutImage from "../images/about.png";
const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <section
      className="py-[120px] bg-dark flex flex-col gap-[40px] items-center"
      id="about"
    >
      <article className="flex max-w-[1450px] justify-between flex-col md:flex-row items-center gap-8 md:gap-0">
        <div className="relative">
          <img
            src={AboutImage}
            alt="about"
            className="w-full h-full md:w-[500px] md:h-[500px] object-cover border-gold border-2 inner-shadow"
          />
          <div className="inner-shadow absolute inset-0"></div>
        </div>
        <div className="flex gap-2 md:w-1/2 px-4 md:px-0">
          <Keys width={42} height={42} />
          <div className="flex flex-col w-[90%] gap-4">
            <h2 className="text-white font-primary text-5xl font-semibold">
              O nas
            </h2>
            <p className="text-white font-secondary text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada purus ut nunc malesuada, sit amet fermentum odio
              condimentum. Sed eget mauris in nunc placerat bibendum. Nullam
              vehicula, nisl nec ultricies elementum, libero nisl tristique
              nunc, nec ultricies velit purus id nisl. Integer nec libero at
              eros fermentum consectetur. Nullam vehicula, nisl nec ultricies
              elementum, libero nisl tristique nunc, nec ultricies velit purus
              id nisl.
            </p>
            <p className="text-white font-secondary text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada purus ut nunc malesuada, sit amet fermentum odio
              condimentum. Sed eget mauris in nunc placerat bibendum. Nullam
              vehicula, nisl nec ultricies elementum, libero nisl tristique
              nunc, nec ultricies velit purus id nisl.
            </p>
            <p className="text-white font-secondary text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada purus ut nunc malesuada.
            </p>
          </div>
        </div>
      </article>
      <div className="flex w-full flex-col gap-8 items-center pt-[80px] max-w-[1450px]">
        <h5 className="font-primary text-5xl text-white text-center">
          Spraw przyjemność sobie i swojemu autu już dziś
        </h5>
        <div
          className="flex w-full gap-8 items-center justify-center"
          ref={ref}
        >
          <motion.hr
            initial={{ opacity: 0, width: 0 }}
            animate={inView ? { opacity: 1, width: "40%" } : {}}
            transition={{ duration: 1 }}
            className="border-gold"
          />
          <a
            className="px-6 py-2 rounded-md w-fit font-primary bg-white text-2xl cursor-pointer animated-button whitespace-nowrap min-w-fit"
            href="#whyUs"
          >
            Dowiedz się więcej
          </a>
          <motion.hr
            initial={{ opacity: 0, width: 0 }}
            animate={inView ? { opacity: 1, width: "40%" } : {}}
            transition={{ duration: 1 }}
            className="border-gold"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
