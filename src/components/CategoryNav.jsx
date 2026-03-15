import { useEffect, useState } from "react";

const categories = [
  { id: "Beverages", label: "Beverages" },
  { id: "Snacks", label: "Snacks" },
  { id: "Italian", label: "Italian" },
  { id: "SouthIndian", label: "South Indian" },
  { id: "MainCourse", label: "Main Course" }
];

const CategoryNav = () => {
  const [active, setActive] = useState("Beverages");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  useEffect(() => {
    const sections = categories.map((c) => document.getElementById(c.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0
      }
    );

    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => {
      sections.forEach((sec) => {
        if (sec) observer.unobserve(sec);
      });
    };
  }, []);

  return (
    <div className="sticky top-[70px] bg-white/90 backdrop-blur-md shadow-sm z-40">
      <div className="flex gap-6 overflow-x-auto px-4 py-3 scrollbar-hide">

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollToSection(cat.id)}
            className={`whitespace-nowrap text-sm md:text-lg font-medium border-b-2 pb-1 transition
            ${
              active === cat.id
                ? "border-accent text-accent"
                : "border-transparent hover:border-accent"
            }`}
          >
            {cat.label}
          </button>
        ))}

      </div>
    </div>
  );
};

export default CategoryNav;