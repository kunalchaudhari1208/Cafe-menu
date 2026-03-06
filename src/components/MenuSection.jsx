import { motion } from "framer-motion";
import { useRef } from "react";
import Tilt from "react-parallax-tilt";

const Section = ({ id, title, image, items, index }) => {
  const ref = useRef(null);
  const isReverse = index % 2 !== 0;

  return (
    <section
      ref={ref}
      id={id}
      className="py-28 px-6 bg-section border-b border-gray-200 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl tracking-wide mb-4 text-center"
        >
          {title}
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "90px" }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="h-[2px] bg-accent mx-auto mb-16"
        />

        <div className={`grid md:grid-cols-2 gap-14 items-center`}>

          {/* Image Reveal Mask */}
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl"
          >
           <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
  <motion.img
    src={image}
    alt={title}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="w-full rounded-xl shadow-xl"
  />
</Tilt>
          </motion.div>

          {/* Menu Items */}
          <div className="space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-between border-b pb-4 text-lg"
              >
                <span>{item.name}</span>
                <span className="text-accent font-semibold">
                  ₹{item.price}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section;