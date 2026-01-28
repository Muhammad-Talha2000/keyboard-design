import { motion } from "framer-motion";
import { 
  Bluetooth, 
  Battery, 
  Smartphone, 
  Pocket, 
  Monitor, 
  Keyboard 
} from "lucide-react";

const features = [
  {
    icon: Pocket,
    title: "Ultra-Compact Design",
    description: "Folds to pocket size for ultimate portability. Take your productivity anywhere.",
  },
  {
    icon: Bluetooth,
    title: "Bluetooth 5.1",
    description: "Fast, stable wireless connection with up to 10m range. Instant device switching.",
  },
  {
    icon: Battery,
    title: "60+ Hours Battery",
    description: "Long-lasting rechargeable battery. Weeks of use on a single charge.",
  },
  {
    icon: Smartphone,
    title: "Universal Compatibility",
    description: "Works with iOS, Android, Windows, and macOS. Connect up to 3 devices.",
  },
  {
    icon: Monitor,
    title: "Built-in Touchpad",
    description: "Integrated precision touchpad eliminates the need for a mouse.",
  },
  {
    icon: Keyboard,
    title: "Full-Size Keys",
    description: "Comfortable full-size QWERTY layout with scissor-switch keys for tactile typing.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Samsers
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Productivity Without Limits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature designed for professionals on the go. Type faster, work smarter, anywhere.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-background rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
