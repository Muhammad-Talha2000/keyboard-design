import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield, Truck, RefreshCw } from "lucide-react";
import keyboardHero from "@/assets/keyboard-hero.jpg";

const benefits = [
  { icon: Truck, text: "Free Worldwide Shipping" },
  { icon: Shield, text: "1-Year Warranty" },
  { icon: RefreshCw, text: "30-Day Money Back" },
];

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Mobile Productivity?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join over 100,000 professionals who type smarter with Samsers. Order now and experience the freedom of portable productivity.
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl font-bold text-primary-foreground">$29.59</span>
              <span className="text-2xl text-primary-foreground/50 line-through">$39.99</span>
              <span className="bg-sale text-sale-foreground px-3 py-1 rounded-md text-sm font-bold">
                SAVE 26%
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button variant="accent" size="xl" className="text-lg">
                Order Now — Free Shipping
              </Button>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-2 text-primary-foreground/80"
                >
                  <benefit.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={keyboardHero}
              alt="Samsers Keyboard"
              className="w-full max-w-lg mx-auto drop-shadow-2xl"
            />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/20 rounded-full blur-[100px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
