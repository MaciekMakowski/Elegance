import Email from "../icons/email.svg?react";
import Facebook from "../icons/facebook.svg?react";
import Instagram from "../icons/instagram.svg?react";
import Location from "../icons/location.svg?react";
import Logo from "../icons/logo.svg?react";
import Phone from "../icons/phone.svg?react";
const services = [
  "Mycie ręczne nadwozia",
  "Dekontaminacja lakieru",
  "Glinkowanie lakieru",
  "Polerowanie lakieru",
  "Woskowanie",
  "Aplikacja powłok ceramicznych",
  "Czyszczenie wnętrza",
  "Pranie tapicerki",
  "Detailing skór",
  "Odświeżanie chromów",
  "Ochrona tapicerki",
  "Odświeżanie plastików",
  "Polerowanie reflektorów",
  "Detailing felg",
  "Czyszczenie komory silnika",
  "Ozonowanie wnętrza",
  "Usuwanie rys",
  "Renowacja lakieru",
  "Zabezpieczenie szyb",
  "Detailing wnętrza premium",
];

const Footer = () => {
  return (
    <footer className="bg-dark py-[120px] flex justify-center" id="footer">
      <div className="flex w-full flex-col md:flex-row max-w-[1450px] justify-between items-center gap-8">
        <div className="flex flex-col justify-center">
          <Logo className="h-32 w-32" />
          <h5 className="text-white font-primary text-6xl font-semibold">
            EL<span className="text-primary text-4xl">EGANCE</span>
          </h5>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-white font-primary text-4xl font-semibold">
            Nasze usługi
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {services.map((service, index) => (
              <p
                key={index}
                className="text-white font-secondary text-lg max-h-[200px] text-gold-hover cursor-pointer"
              >
                {service}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col fap-4">
          <h5 className="text-white font-primary text-4xl font-semibold">
            Nasze usługi
          </h5>
          <div className="flex flex-col gap-4 text-xl mt-8">
            <div className="flex gap-4 items-center">
              <Location className="w-8 h-8" />
              <p className="text-white font-secondary">
                ul. Przykładowa 123,
                <br />
                82-300 Elbląg
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Phone className="w-8 h-8" />
              <p className="text-white font-secondary">+48 123 456 789</p>
            </div>
            <div className="flex gap-4 items-center">
              <Email className="w-8 h-8" />
              <a
                className="text-white font-secondary text-gold-hover"
                href="mailto:email@mail.pl"
              >
                email@mail.pl
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h5 className="text-white font-primary text-4xl font-semibold">
            SOCIALMEDIA
          </h5>
          <Facebook className="w-8 h-8" />
          <Instagram className="w-8 h-8" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
