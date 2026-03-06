import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/70 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h2 className="font-serif text-2xl tracking-wide">
          Café Durga
        </h2>

        <nav className="flex gap-8 text-sm font-medium">
          <a href="#Beverages" className="hover:text-accent">Menu</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>

      </div>
    </motion.header>
  );
};

export default Header;