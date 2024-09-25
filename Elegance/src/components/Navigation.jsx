import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "../icons/Logo.svg?react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black flex justify-between px-8 py-2 items-center fixed w-full z-40">
      <div className="flex items-center gap-4">
        <h5 className="text-white font-primary text-3xl font-semibold">
          EL<span className="text-primary text-xl">EGANCE</span>
        </h5>
        <Logo className="h-8 w-8" />
      </div>
      <div className="hidden md:flex gap-4 text-gold items-center">
        <motion.hr
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "96px" }}
          transition={{ duration: 1 }}
          className="border-gold"
        />
        <div className="flex gap-4 text-white font-primary text-xl">
          <a className="cursor-pointer text-gold-hover">Strona główna</a>
          <a className="cursor-pointer text-gold-hover">O nas</a>
          <a className="cursor-pointer text-gold-hover">Usługi</a>
          <a className="cursor-pointer text-gold-hover">Portfolio</a>
          <a className="cursor-pointer text-gold-hover">Kontakt</a>
        </div>
        <motion.hr
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "96px" }}
          transition={{ duration: 1 }}
          className="border-gold"
        />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-12 left-0 w-full bg-black text-white p-4 overflow-y-hidden">
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-4 font-primary text-xl">
              <a className="cursor-pointer text-gold-hover">Strona główna</a>
              <a className="cursor-pointer text-gold-hover">O nas</a>
              <a className="cursor-pointer text-gold-hover">Usługi</a>
              <a className="cursor-pointer text-gold-hover">Portfolio</a>
              <a className="cursor-pointer text-gold-hover">Kontakt</a>
            </div>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
