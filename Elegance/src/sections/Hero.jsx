import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Car from "../icons/car-wash.svg?react";
import Clean from "../icons/clean-hand.svg?react";
import Door from "../icons/doors.svg?react";
import Engine from "../icons/engine-clean.svg?react";
import Star from "../icons/star.svg?react";
import HeroImage from "../images/hero.png";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  return (
    <section
      className="md:h-[100vh] w-full bg-dark overflow-hidden flex flex-col md:flex-row gap-8 md:gap-0 justify-center pb-24 md:pb-0"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <article className="pt-[300px] md:w-[1450px] flex flex-col justify-between px-4 xl:px-0 gap-8 md:gap-0">
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-6xl font-primary font-bold">
            Twoje Auto w Nowej Odsłonie <br />
            Dla Komfortu i Czystej Przyjemności
          </h1>
          <p className="font-secondary text-white text-2xl">
            Profesjonalny detailing, który podkreśli wyjątkowy charakter Twojego
            samochodu.
          </p>
          <a className="px-6 py-2 rounded-md font-primary bg-white w-fit text-2xl hover:shadow-inner cursor-pointer animated-button">
            Zadbaj o auto już dziś
          </a>
        </div>
        <div className="flex justify-between flex-col md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            className="bg-dark rounded-t-md pt-4 pb-16 px-8 gap-8 flex flex-col items-center w-full md:max-w-[300px] on-hover-border-gold cursor-pointer"
          >
            <Clean className="h-24 w-24 text-gold" />
            <h5 className="font-primary text-white text-2xl text-center">
              Odnawianie <br /> wnętrza
            </h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.5 },
            }}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            className="bg-dark rounded-t-md pt-4 pb-16 px-8 gap-8 flex flex-col items-center w-full md:max-w-[300px] on-hover-border-gold cursor-pointer"
          >
            <Door className="h-24 w-24 text-gold" />
            <h5 className="font-primary text-white text-2xl text-center">
              Oklejanie <br /> okien
            </h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 1 },
            }}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            className="bg-dark rounded-t-md pt-4 pb-16 px-8 gap-8 flex flex-col items-center w-full md:max-w-[300px] on-hover-border-gold cursor-pointer"
          >
            <Car className="h-24 w-24 text-gold" />
            <h5 className="font-primary text-white text-2xl text-center">
              Spersonalizowana <br /> Renowacja
            </h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 1.5 },
            }}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            className="bg-dark rounded-t-md pt-4 pb-16 px-8 gap-8 flex flex-col items-center w-full md:max-w-[300px] on-hover-border-gold cursor-pointer"
          >
            <Engine className="h-24 w-24 text-gold" />
            <h5 className="font-primary text-white text-2xl text-center">
              Czyszczenie <br /> silnika
            </h5>
          </motion.div>
        </div>
      </article>
      <div
        className="flex justify-center md:justify-start flex-row md:flex-col gap-2 md:pt-[320px]"
        ref={ref}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            className="h-8 w-8 text-gold"
            initial={{ opacity: 0, y: -20 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.3,
                      delay: index * 0.1,
                    },
                  }
                : {}
            }
          >
            <Star />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
