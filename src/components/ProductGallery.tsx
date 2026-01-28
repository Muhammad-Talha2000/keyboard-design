import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import keyboardHero from "@/assets/keyboard-hero.jpg";
import keyboardFolded from "@/assets/keyboard-folded.jpg";
import keyboardLifestyle from "@/assets/keyboard-lifestyle.jpg";
import keyboardDevices from "@/assets/keyboard-devices.jpg";

const images = [
  { src: keyboardHero, alt: "Keyboard open view" },
  { src: keyboardFolded, alt: "Keyboard folded compact" },
  { src: keyboardLifestyle, alt: "Keyboard with tablet" },
  { src: keyboardDevices, alt: "Multi-device compatibility" },
];

const ProductGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Product Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            See It In Action
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main Image */}
          <div className="lg:col-span-8">
            <motion.div
              className="relative aspect-[4/3] bg-card rounded-2xl overflow-hidden shadow-product"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Thumbnails */}
          <div className="lg:col-span-4 grid grid-cols-4 lg:grid-cols-1 gap-4">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden transition-all duration-300 ${
                  selectedIndex === index
                    ? "ring-2 ring-accent ring-offset-2 shadow-lg"
                    : "opacity-70 hover:opacity-100"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
