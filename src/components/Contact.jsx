import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-background border-t border-gray-200"
    >
      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-serif mb-12"
        >
          Visit Us
        </motion.h2>

        <div className="space-y-6 text-lg">

          <p>
            📍 Durga Café, Karvenagar, Pune, Maharashtra
          </p>

          <p>
            📞 
            <a
              href="tel:+919876543210"
              className="text-accent font-semibold hover:underline"
            >
              +91 98765 43210
            </a>
          </p>

          <p>
            🕒 Open Daily: 8:00 AM – 11:00 PM
          </p>

          <div className="flex justify-center gap-6 mt-8">

            <a
              href="https://maps.app.goo.gl/kSAMR8MaiXz6VX7m9"
              target="_blank"
              className="px-6 py-3 bg-accent text-white rounded-lg hover:opacity-90 transition"
            >
              View on Map
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition"
            >
              WhatsApp
            </a>

          </div>

          <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=YOUR_REAL_EMBED_LINK"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>

          

        </div>
      </div>
    </section>
  );
};

export default Contact;