import { motion } from "framer-motion";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
];

const Gallery = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif mb-12">Instagram Moments</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;