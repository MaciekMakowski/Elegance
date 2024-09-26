import { motion } from "framer-motion";
import Portfolio1 from "../images/portfolio1.png";
import Portfolio2 from "../images/portfolio2.png";
import Portfolio3 from "../images/portfolio3.png";
import Portfolio4 from "../images/portfolio4.png";
import Portfolio5 from "../images/portfolio5.png";
import Portfolio6 from "../images/portfolio6.png";
import Portfolio7 from "../images/portfolio7.png";
import Portfolio8 from "../images/portfolio8.png";
const items = [
  {
    image: Portfolio1,
    title: "Odnowa wnętrza",
  },
  {
    image: Portfolio2,
    title: "Polerowanie karoserii",
  },
  {
    image: Portfolio3,
    title: "Mycie podwozia",
  },
  {
    image: Portfolio4,
    title: "odświeżanie plastików",
  },
  {
    image: Portfolio5,
    title: "Woskowanie",
  },
  {
    image: Portfolio6,
    title: "Czyszczenie tapicerki",
  },
  {
    image: Portfolio7,
    title: "Ochrona tapicerki",
  },
  {
    image: Portfolio8,
    title: "Usuwanie rys",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-white py-[120px] flex flex-col items-center gap-12"
    >
      <h4 className="font-primary text-6xl text-center">Portfolio</h4>
      <article className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  max-w-[1450px] gap-8 px-8 lg:px-0">
        {items.map((item, index) => (
          <div key={index} className="shadow-black relative overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              src={item.image}
              alt="Image of sports car after detailing"
              className="w-full h-full object-cover transform origin-center"
            />
            <h5 className="text-white font-primary text-3xl absolute bottom-2 left-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {item.title}
            </h5>
          </div>
        ))}
      </article>
    </section>
  );
};
export default Portfolio;
