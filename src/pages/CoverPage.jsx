import { motion } from "framer-motion";
import SlideToMenu from "../components/SlideToMenu";

const CoverPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero.jpg')"
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* content card */}
      <div className="relative backdrop-blur-lg bg-white/70 p-10 rounded-3xl text-center shadow-2xl max-w-md">

        {/* Logo */}
        <img 
          src="/logo.png"
          alt="Cafe Durga"
          className="w-40 mx-auto mb-6"
        />

        {/* Title */}
        <h1 className="text-5xl font-serif mb-3">
          
        </h1>

        {/* Tagline */}
        <p className="text-gray-700 mb-10">
          Fresh Coffee • Delicious Food • Good Vibes
          <br />
          Franchise Given By:
          <p className="text-lg font-bold">Shashank Mengade</p>
          For Franchise Contact: <a href="tel:+919876543210" className="text-accent font-semibold hover:underline">+91 9876543210</a>

        </p>

        {/* Slider */}
        <SlideToMenu />

      </div>
    </motion.div>
  );
};

export default CoverPage;