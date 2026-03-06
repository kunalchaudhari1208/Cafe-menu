import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "Beverages",
  "Snacks",
  "Italian",
  "South Indian",
  "Main Course"
];

const CategoryNav = () => {
  const [active, setActive] = useState("Beverages");

  return (
    <div className="sticky top-[70px] bg-white z-40 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-center gap-10 py-4 relative">

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              document.getElementById(cat)?.scrollIntoView({
                behavior: "smooth"
              });
            }}
            className="relative text-lg font-medium"
          >
            {cat}

            {active === cat && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-accent"
              />
            )}
          </button>
        ))}

      </div>
    </div>
  );
};

export default CategoryNav;