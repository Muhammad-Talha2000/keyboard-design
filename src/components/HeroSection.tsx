import { motion } from "framer-motion";
import { Star, Check, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import keyboardHero from "@/assets/keyboard-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Check className="w-4 h-4" />
              Amazon's Choice
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Type Anywhere with the{" "}
              <span className="text-gradient">Foldable Bluetooth Keyboard</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Pocket-sized productivity. Full-size typing. Connect to any device with this ultra-slim, rechargeable keyboard featuring a built-in touchpad and stand holder.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/50 text-amber-400/50"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground">4.3</span>
              <span className="text-sm text-muted-foreground">(4,209 reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="inline-flex items-center gap-2 bg-sale/10 text-sale px-3 py-1 rounded-md text-sm font-bold">
                -26% OFF
              </span>
              <span className="text-4xl font-bold text-foreground">$29.59</span>
              <span className="text-xl text-muted-foreground line-through">$39.99</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="xl">
                Add to Cart — $29.59
              </Button>
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-success" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>1-Year Warranty</span>
              </div>
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <motion.img
                src={keyboardHero}
                alt="Samsers Foldable Bluetooth Keyboard"
                className="w-full max-w-2xl mx-auto drop-shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
