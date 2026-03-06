import { motion } from "framer-motion";

const MagneticButton = ({ children }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-accent text-white rounded-full shadow-lg transition"
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;