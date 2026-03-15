import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCall = () => {
  return (
    <motion.a
      href="tel:+919876543210"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      animate={{ y: [0, -6, 0] }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className="fixed bottom-6 right-6 bg-accent text-white p-4 rounded-full shadow-xl z-50"
    >
      <Phone size={24} />
    </motion.a>
  );
};

export default FloatingCall;