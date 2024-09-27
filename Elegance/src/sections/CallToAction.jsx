import CtaBg from "../images/ctaBg.png";
const CallToAction = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${CtaBg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className="w-full py-24 h-full md:h-[600px] flex justify-center bg-dark"
      id="cta"
    >
      <article className="flex max-w-[1450px] flex-col gap-4 px-8 md:px-0">
        <h5 className="text-gold font-primary text-6xl text-center">
          Wyróżnimy twoje auto na drodze
        </h5>
        <p className="text-white font-secondary text-2xl text-center max-w-[1000px]">
          Po wstępnych konsultacjach w tym poznaniu Twoich potrzeb dobierzemy do
          nich najlepszą ofertę. Dołożymy wszelkich starań aby spełnić twoje
          oczekiwania aby wyróżnić Ciebie i Twoje auto. Stawiamy na indywidualne
          podejście i profesjonalizm.
        </p>
        <div className="flex justify-center items-center flex-col md:flex-row gap-4 mt-4">
          <a
            className="px-6 py-2 rounded-md w-fit font-primary bg-white text-2xl cursor-pointer animated-button whitespace-nowrap min-w-fit"
            href="#contact"
          >
            Zapytaj o wycenę
          </a>
          <a
            className="px-6 py-2 rounded-md w-fit font-primary  text-white border-white border text-2xl cursor-pointer animated-button whitespace-nowrap min-w-fit"
            href="#footer"
          >
            Sprawdź ofertę
          </a>
        </div>
      </article>
    </section>
  );
};

export default CallToAction;
