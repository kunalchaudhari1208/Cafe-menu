import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SlideToMenu = () => {
  const x = useMotionValue(0);
  const navigate = useNavigate();

  // progress fill
  const width = useTransform(x, [0, 210], ["0%", "100%"]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 120) {
      animate(x, 210, { duration: 0.25 });

      setTimeout(() => {
        navigate("/menu");
      }, 300);
    } else {
      animate(x, 0, { duration: 0.4 });
    }
  };

  return (
    <div className="relative w-[300px] h-[70px] bg-gray-200 rounded-full overflow-hidden shadow-xl">

      {/* Progress Fill */}
      <motion.div
        style={{ width }}
        className="absolute left-0 top-0 h-full bg-accent rounded-full"
      />

      {/* Label */}
      <span className="absolute inset-0 flex items-center justify-center text-gray-700 font-medium pointer-events-none">
        Slide to View Menu →
      </span>

      {/* Slider Knob */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 210 }}
        style={{ x }}
        onDragEnd={handleDragEnd}
        whileTap={{ scale: 1.1 }}
        className="absolute left-0 top-0 w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
      >
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="text-xl"
        >
          →
        </motion.span>
      </motion.div>
    </div>
  );
};

export default SlideToMenu;