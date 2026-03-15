import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Tilt from "react-parallax-tilt";

const Section = ({ id, title, image, items, index }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  const isReverse = index % 2 !== 0;

  return (
    <section
      ref={ref}
      id={id}
      className="py-24 px-6 bg-section border-b border-gray-200 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl tracking-wide mb-16 text-center"
        >
          {title}
        </motion.h2>

        <div className={`grid md:grid-cols-2 gap-14 items-center`}>

          {/* Parallax Image */}
          <motion.div
            style={{ y }}
            className={`${isReverse ? "md:order-2" : ""}`}
          >
            <Tilt scale={1.05} glareEnable={true} glareMaxOpacity={0.2}>
              <img
                src={image}
                alt={title}
                className="w-full rounded-2xl shadow-xl"
              />
            </Tilt>
          </motion.div>

          {/* Menu Items */}
          <div className={`space-y-6 ${isReverse ? "md:order-1" : ""}`}>
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