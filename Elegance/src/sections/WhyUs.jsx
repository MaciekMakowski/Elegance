import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Diamond from "../icons/diamond.svg?react";
import Personalization from "../icons/personalization.svg?react";
import Spray from "../icons/spray.svg?react";
const WhyUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <section
      className="bg-dark py-[120px] border-gold border-t-2 flex flex-col gap-8 items-center"
      id="whyUs"
    >
      <div className="text-white flex flex-col gap-4">
        <h2 className="text-center font-primary text-6xl ">Dlaczego my?</h2>
        <p className="text-center font-secondary text-xl">Czyli trzy razy P</p>
      </div>
      <article
        className="grid grid-cols-1 md:grid-cols-3 w-full max-w-[1450px] gap-16 md:gap-32 px-8 md:px-0"
        ref={ref}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{
            scale: inView ? 1 : 0.9,
            border: inView ? "white 1px solid" : "",
          }}
          transition={{ duration: 1 }}
          className={`  flex flex-col gap-8 py-8 px-12`}
        >
          <Diamond className="w-20 h-20 mx-auto" />
          <h3 className="text-white text-4xl font-primary text-center">
            Profesjonalizm
          </h3>
          <p className="text-white text-xl font-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            pharetra tellus sit amet lacus sodales, non posuere erat lobortis.
          </p>
          <p className="text-white text-xl font-secondary">
            Aliquam in vestibulum leo. Vivamus at dui tincidunt, posuere mi sit
            amet, pulvinar magna. Morbi malesuada ante a vulputate fringilla.
            Mauris tristique quam ac eleifend accumsan.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{
            scale: inView ? 1 : 0.9,
            border: inView ? "white 1px solid" : "",
          }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`  flex flex-col gap-8 py-8 px-12`}
        >
          <Spray className="w-20 h-20 mx-auto" />
          <h3 className="text-white text-4xl font-primary text-center">
            Pasja
          </h3>
          <p className="text-white text-xl font-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            pharetra tellus sit amet lacus sodales, non posuere erat lobortis.
          </p>
          <p className="text-white text-xl font-secondary">
            Aliquam in vestibulum leo. Vivamus at dui tincidunt, posuere mi sit
            amet, pulvinar magna. Morbi malesuada ante a vulputate fringilla.
            Mauris tristique quam ac eleifend accumsan.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{
            scale: inView ? 1 : 0.9,
            border: inView ? "white 1px solid" : "",
          }}
          transition={{ duration: 1, delay: 1 }}
          className={`  flex flex-col gap-8 py-8 px-12`}
        >
          <Personalization className="w-20 h-20 mx-auto" />
          <h3 className="text-white text-4xl font-primary text-center">
            Presonalizacja
          </h3>
          <p className="text-white text-xl font-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            pharetra tellus sit amet lacus sodales, non posuere erat lobortis.
          </p>
          <p className="text-white text-xl font-secondary">
            Aliquam in vestibulum leo. Vivamus at dui tincidunt, posuere mi sit
            amet, pulvinar magna. Morbi malesuada ante a vulputate fringilla.
            Mauris tristique quam ac eleifend accumsan.
          </p>
        </motion.div>
      </article>
    </section>
  );
};
export default WhyUs;
