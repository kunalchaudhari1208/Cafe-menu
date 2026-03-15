import { motion } from "framer-motion";

const Cover = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("Beverages");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-[#f8f5f0] text-center px-6">

      {/* Content */}
      <div className="max-w-xl">

        {/* Logo */}
        <motion.img
          src="/logo.png"
          alt="Cafe Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto w-40 mb-6"
        />

        {/* Cafe Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-serif text-4xl md:text-5xl mb-4"
        >
          Café Durga
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-600 mb-10"
        >
          Fresh Coffee • Delicious Food • Good Vibes
        </motion.p>

        {/* Slide Button */}
        <motion.button
          onClick={scrollToMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-8 py-3 bg-accent text-white rounded-full shadow-lg"
        >
          View Menu ↓
        </motion.button>

      </div>

    </section>
  );
};

export default Cover;