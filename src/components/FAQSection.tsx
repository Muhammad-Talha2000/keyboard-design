import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What devices is the keyboard compatible with?",
    answer: "The Samsers Foldable Keyboard is compatible with all Bluetooth-enabled devices including iOS (iPhone, iPad), Android phones and tablets, Windows PCs and laptops, and macOS computers. It supports connecting up to 3 devices simultaneously with easy switching.",
  },
  {
    question: "How long does the battery last?",
    answer: "The built-in 200mAh rechargeable lithium battery provides over 60 hours of continuous typing. With typical daily use (2-3 hours), you can expect several weeks between charges. The keyboard also has an auto-sleep feature to conserve power.",
  },
  {
    question: "What is the Bluetooth range?",
    answer: "The keyboard uses Bluetooth 5.1 technology with a reliable connection range of up to 10 meters (33 feet). The connection is stable and responsive with minimal latency for comfortable typing.",
  },
  {
    question: "Is the touchpad responsive?",
    answer: "Yes! The integrated multi-touch touchpad supports gestures including scrolling, zooming, and cursor control. It's designed to work seamlessly with your connected device, eliminating the need for a separate mouse.",
  },
  {
    question: "How compact is it when folded?",
    answer: "When folded, the keyboard measures just 6.2\" x 4.1\" x 0.6\" (approximately the size of a smartphone) and weighs only 190g (6.7 oz). It easily fits in your pocket, backpack, or laptop bag.",
  },
  {
    question: "What's included in the package?",
    answer: "Your purchase includes the Samsers Foldable Bluetooth Keyboard, a USB-C charging cable, a user manual, and a portable carrying pouch for protection during travel.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, you can return it for a full refund within 30 days of delivery. The product also comes with a 1-year manufacturer warranty.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-card">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the Samsers Foldable Keyboard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl px-6 border-none shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
