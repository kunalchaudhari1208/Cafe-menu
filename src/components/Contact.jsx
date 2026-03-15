import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-background">

      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif mb-12"
        >
          Visit Us
        </motion.h2>

        <div className="space-y-6 text-lg">

          {/* Address */}
          <div className="flex items-center justify-center gap-3">
            <MapPin size={22} />
            <a
              href="https://maps.app.goo.gl/8YfqKXH7kBJ3TKr5A"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              Durga Café, Karvenagar, Pune
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-3">
            <Phone size={22} />
            <a
              href="tel:+919876543210"
              className="hover:text-accent transition"
            >
              +91 9876543210
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center justify-center gap-3">
            <FaWhatsapp size={22} className="text-green-500" />
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Timing */}
          <div className="flex items-center justify-center gap-3">
            <Clock size={22} />
            <p>Open Daily: 8 AM – 11 PM</p>
          </div>

        </div>

        {/* Google Map */}
        <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Durga+Cafe+Karvenagar+Pune&output=embed"
            width="100%"
            height="320"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>

      </div>

    </section>
  );
};

export default Contact;