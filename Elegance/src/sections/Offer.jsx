import Cleaning from "../images/cleaning.png";
import Polishing from "../images/polishing.png";
import Renewal from "../images/renewal.png";
import Restoration from "../images/restoration.png";
import Vacuuming from "../images/vacuuming.png";
import Washing from "../images/washing.png";

const services = [
  {
    title: "Polerowanie",
    image: Polishing,
  },
  {
    title: "Mycie",
    image: Washing,
  },
  {
    title: "Sprzątanie",
    image: Cleaning,
  },
  {
    title: "Odkurzanie",
    image: Vacuuming,
  },
  {
    title: "Restauracja",
    image: Restoration,
  },
  {
    title: "Odnowa",
    image: Renewal,
  },
];

const Offer = () => {
  return (
    <section className="relative py-[120px] bg-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-full">
        <div className="w-full h-[80%] bg-gold absolute top-0 left-0 clip-triangle rotate-180"></div>
        <div className="w-[99%] h-[79%] bg-white absolute top-0 left-[0.5%] clip-triangle rotate-180"></div>
        <div className="w-[98%] h-[78%] bg-dark absolute top-0 left-[1%] clip-triangle rotate-180"></div>
      </div>
      <article className="z-10 relative flex flex-col gap-8 items-center">
        <h2 className="text-center font-primary text-6xl text-white">
          Nasza oferta
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-[1450px] justify-items-center w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-full border-gold border-2 h-[250px] max-w-[400px] overflow-hidden flex justify-center items-center group cursor-pointer hover:drop-shadow-white transition-all duration-300"
            >
              <div
                className="absolute inset-0  bg-cover bg-center transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              />
              <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-300 group-hover:opacity-0" />
              <h3 className="relative text-white text-4xl font-primary transition-colors duration-300 group-hover:text-yellow-400 group-hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </article>
      <div className="w-full flex justify-center mt-24">
        <a className="px-6 py-2 rounded-md w-fit font-primary bg-white text-2xl cursor-pointer animated-button whitespace-nowrap min-w-fit">
          Zobacz więcej
        </a>
      </div>
    </section>
  );
};
export default Offer;
