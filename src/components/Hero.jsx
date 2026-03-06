import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-[60vh] overflow-hidden">

      {/* Background Image */}
      <motion.img
        src={heroImg}
        alt="Cafe Hero"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full h-full object-cover"
      />

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 animate-pulse"></div>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        
     <motion.h1
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-white text-6xl md:text-7xl font-serif tracking-widest"
>
  Café Durga
</motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-white mt-4 text-sm md:text-lg font-light tracking-wider"
        >
          Modern Taste. Warm Moments.
        </motion.p>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm"
      >
        ↓ Scroll
      </motion.div>

    </section>
  );
};

export default Hero;