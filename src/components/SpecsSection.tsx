import { motion } from "framer-motion";
import keyboardFolded from "@/assets/keyboard-folded.jpg";

const specs = [
  { label: "Dimensions (Open)", value: '11.6" x 4.1" x 0.24"' },
  { label: "Dimensions (Folded)", value: '6.2" x 4.1" x 0.6"' },
  { label: "Weight", value: "6.7 oz (190g)" },
  { label: "Connectivity", value: "Bluetooth 5.1" },
  { label: "Battery", value: "200mAh Li-ion" },
  { label: "Battery Life", value: "60+ hours" },
  { label: "Charging", value: "USB-C" },
  { label: "Key Type", value: "Scissor-Switch" },
  { label: "Touchpad", value: "Multi-touch gesture" },
  { label: "Multi-Device", value: "3 devices" },
  { label: "Compatibility", value: "iOS, Android, Windows, macOS" },
  { label: "Material", value: "ABS + Aluminum Alloy" },
];

const SpecsSection = () => {
  return (
    <section id="specs" className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-background rounded-3xl p-8 shadow-product">
              <img
                src={keyboardFolded}
                alt="Keyboard folded"
                className="w-full max-w-md mx-auto"
              />
            </div>
            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg"
            >
              <div className="text-2xl font-bold">190g</div>
              <div className="text-sm opacity-80">Ultra Light</div>
            </motion.div>
          </motion.div>

          {/* Specs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Technical Specifications
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Precision Engineering
            </h2>

            <div className="space-y-4">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex justify-between py-3 border-b border-border"
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-semibold text-foreground">{spec.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
