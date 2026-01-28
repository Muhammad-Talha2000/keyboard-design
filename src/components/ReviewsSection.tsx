import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Michael Chen",
    role: "Software Developer",
    rating: 5,
    text: "This keyboard has completely transformed my mobile workflow. The build quality is exceptional, and the touchpad is surprisingly precise. Worth every penny!",
    avatar: "MC",
  },
  {
    name: "Sarah Johnson",
    role: "Digital Nomad",
    rating: 5,
    text: "I've tried many portable keyboards, but this is by far the best. It's compact enough to fit in my bag yet types like a full-size keyboard. The Bluetooth connection is rock solid.",
    avatar: "SJ",
  },
  {
    name: "David Park",
    role: "Content Creator",
    rating: 4,
    text: "Great keyboard for the price. Battery life is amazing - I charge it maybe once a month. The folding mechanism feels sturdy and premium.",
    avatar: "DP",
  },
  {
    name: "Emma Wilson",
    role: "Business Analyst",
    rating: 5,
    text: "Perfect for working from coffee shops and airports. The stand holder is a game-changer for tablet users. Highly recommend for anyone who travels for work.",
    avatar: "EW",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Customer Reviews
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Loved by Thousands
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/50 text-amber-400/50"}`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">4.3 out of 5</span>
            <span className="text-muted-foreground">(4,209 reviews)</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card p-8 rounded-2xl shadow-card"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-muted"}`}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
