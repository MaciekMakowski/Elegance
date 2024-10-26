import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Email from "../icons/email.svg?react";
import Location from "../icons/location.svg?react";
import Phone from "../icons/phone.svg?react";
import Contact1 from "../images/contact1.png";
import Contact2 from "../images/contact2.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isGDPRChecked, setIsGDPRChecked] = useState(false);
  const form = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGDPRChange = () => {
    setIsGDPRChecked(!isGDPRChecked);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    )
      return toast.error("Wypełnij wszystkie pola formularza!");

    if (!isGDPRChecked)
      return toast.error(
        "Musisz wyrazić zgodę na przetwarzanie danych osobowych!"
      );
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_message: formData.message,
    };

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          toast.success("Wiadomość została wysłana pomyślnie!");
          setFormData({ name: "", email: "", phone: "", message: "" });
          setIsGDPRChecked(false);
        },
        (err) => {
          toast.error("Wystąpił błąd podczas wysyłania wiadomości!");
        }
      );
  };

  return (
    <section className="bg-dark w-full flex flex-col" id="contact">
      <div className="flex flex-col-reverse md:flex-row w-full">
        <div className="w-full md:w-1/2 flex flex-col px-8 py-16">
          <h4 className="font-primary text-4xl text-white">Kontakt</h4>
          <form
            className="flex gap-4 flex-col w-full items-center"
            onSubmit={sendEmail}
            ref={form}
          >
            <div className="flex gap-4 flex-col md:flex-row w-full">
              <div className="flex flex-col gap-4 w-full md:w-1/2 text-xl">
                <input
                  type="text"
                  name="name"
                  placeholder="Imię"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gold px-4 py-4 text-white font-secondary inner-shadow-sm placeholder-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gold px-4 py-4 text-white font-secondary inner-shadow-sm placeholder-black"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Numer telefonu"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gold px-4 py-4 text-white font-secondary inner-shadow-sm placeholder-black"
                />
              </div>
              <textarea
                name="message"
                placeholder="Wiadomość"
                value={formData.message}
                onChange={handleChange}
                className="bg-gold px-4 py-4 text-white font-secondary inner-shadow-sm w-full md:w-1/2 placeholder-black"
                rows={7}
              ></textarea>
            </div>
            <div>
              <input
                type="checkbox"
                id="gdpr"
                name="gdpr"
                checked={isGDPRChecked}
                onChange={handleGDPRChange}
                className="text-white w-4 h-4"
              />
              <label
                htmlFor="gdpr"
                className="text-white font-secondary text-lg ml-2"
              >
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                odpowiedzi na zapytanie zgodnie z{" "}
                <a
                  href="#"
                  className="text-gold hover:underline transition-colors"
                >
                  Polityką Prywatności
                </a>
              </label>
            </div>
            <button
              type="submit" // Upewnij się, że jest to przycisk typu submit
              className="px-6 py-2 rounded-md w-fit font-primary bg-gold text-2xl cursor-pointer animated-button-white text-white whitespace-nowrap min-w-fit"
            >
              Wyślij zapytanie
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <img src={Contact1} alt="Contact" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2">
          <img src={Contact2} alt="Contact" className="w-full h-full" />
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex flex-col px-8 py-16 h-1/2">
            <h4 className="font-primary text-6xl text-white">Nasze dane</h4>
            <p className="font-secondary text-xl text-white">
              Jeśli masz jakiekolwiek pytania, wątpliwości lub potrzebujesz
              pomocy w dowolnej kwestii, nie wahaj się skontaktować z nami.
            </p>
            <div className="flex flex-col gap-4 text-xl mt-8">
              <div className="flex gap-4 items-center">
                <Location className="w-8 h-8" />
                <p className="text-white font-secondary">
                  ul. Przykładowa 123, 82-300 Elbląg
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="w-8 h-8" />
                <p className="text-white font-secondary">+48 123 456 789</p>
              </div>
              <div className="flex gap-4 items-center">
                <Email className="w-8 h-8" />
                <p className="text-white font-secondary">email@mail.pl</p>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.614448373905!2d21.01198341594098!3d52.22967507976088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccf3f0d6f1b1%3A0x1c0d0d7d8b0f6f0!2sWarsaw%20University%20of%20Technology!5e0!3m2!1sen!2spl!4v1630240902387!5m2!1sen!2spl"
            className="w-full h-full min-h-[300px] border-none"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
