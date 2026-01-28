import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Check, Truck, Minus, Plus, ShieldCheck, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import keyboardHero from "@/assets/keyboard-hero.jpg";
import keyboardFolded from "@/assets/keyboard-folded.jpg";
import keyboardLifestyle from "@/assets/keyboard-lifestyle.jpg";
import keyboardDevices from "@/assets/keyboard-devices.jpg";

const bundleOptions = [
  { qty: 1, label: "Buy 1", price: 29.59, originalPrice: 39.99, discount: null, tag: null },
  { qty: 2, label: "Buy 2", price: 53.26, originalPrice: 79.98, discount: "10% OFF", tag: "MOST POPULAR" },
  { qty: 3, label: "Buy 3", price: 75.46, originalPrice: 119.97, discount: "15% OFF", tag: "BEST VALUE" },
];

const HeroSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedBundle, setSelectedBundle] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [keyboardHero, keyboardFolded, keyboardLifestyle, keyboardDevices];

  const handleBundleSelect = (index: number) => {
    setSelectedBundle(index);
    setQuantity(bundleOptions[index].qty);
  };

  const incrementQuantity = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const currentBundle = bundleOptions[selectedBundle];
  const totalPrice = selectedBundle === 0 ? (29.59 * quantity).toFixed(2) : currentBundle.price.toFixed(2);

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Product Images - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            {/* Main Image */}
            <div className="relative mb-4 rounded-2xl overflow-hidden bg-card border border-border">
              <motion.img
                key={selectedImage}
                src={images[selectedImage]}
                alt="Samsers Foldable Bluetooth Keyboard"
                className="w-full aspect-square object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Best Seller Badge */}
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                Best Seller
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-2"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🚀 Best Selling Portable Keyboard in USA
            </div>

            {/* Review Slider */}
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-6">
              <p className="text-accent font-medium text-sm mb-2">
                "Very comfortable to use. Perfect for travel and working from anywhere. Love the touchpad!"
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">Michael R.</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-3">
              Samsers™ Foldable Bluetooth Keyboard
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/50 text-amber-400/50"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">4.3</span>
              <span className="text-sm text-muted-foreground">4,209 reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-foreground">${totalPrice}</span>
              <span className="text-xl text-muted-foreground line-through">
                ${selectedBundle === 0 ? (39.99 * quantity).toFixed(2) : currentBundle.originalPrice.toFixed(2)}
              </span>
              <span className="bg-sale text-sale-foreground px-3 py-1 rounded-md text-sm font-bold">
                SAVE {selectedBundle === 0 ? "26%" : currentBundle.discount?.replace(" OFF", "")}
              </span>
            </div>

            {/* Product Description */}
            <p className="text-muted-foreground mb-6">
              Pocket-sized productivity. Full-size typing. Designed to <strong className="text-foreground">boost your productivity</strong> and keep you <strong className="text-foreground">connected anywhere</strong>.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-2">
                  <Truck className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Free Shipping</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-2">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">1-Year Warranty</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-2">
                  <RefreshCcw className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">30-Day Returns</span>
              </div>
            </div>

            {/* Bundle & Save Section */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm font-semibold text-foreground">BUNDLE & SAVE</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="space-y-3">
                {bundleOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleBundleSelect(index)}
                    className={`w-full relative p-4 rounded-xl border-2 transition-all text-left ${
                      selectedBundle === index
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedBundle === index ? "border-primary bg-primary" : "border-muted-foreground"
                          }`}
                        >
                          {selectedBundle === index && <Check className="w-3 h-3 text-primary-foreground" />}
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">{option.label}</span>
                          {option.discount && (
                            <span className="ml-2 bg-success/10 text-success text-xs font-bold px-2 py-0.5 rounded">
                              {option.discount}
                            </span>
                          )}
                          <p className="text-sm text-muted-foreground">+ Free Delivery Included</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-foreground">${option.price.toFixed(2)}</span>
                        <p className="text-sm text-muted-foreground line-through">${option.originalPrice.toFixed(2)}</p>
                      </div>
                    </div>
                    {option.tag && (
                      <div
                        className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                          option.tag === "MOST POPULAR"
                            ? "bg-accent text-accent-foreground"
                            : "bg-sale text-sale-foreground"
                        }`}
                      >
                        {option.tag}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* Quantity Counter */}
              <div className="flex items-center border-2 border-border rounded-xl overflow-hidden">
                <button
                  onClick={decrementQuantity}
                  className="w-12 h-14 flex items-center justify-center hover:bg-muted transition-colors"
                  disabled={selectedBundle !== 0}
                >
                  <Minus className="w-5 h-5 text-foreground" />
                </button>
                <div className="w-16 h-14 flex items-center justify-center border-x-2 border-border">
                  <span className="font-bold text-lg text-foreground">{quantity}</span>
                </div>
                <button
                  onClick={incrementQuantity}
                  className="w-12 h-14 flex items-center justify-center hover:bg-muted transition-colors"
                  disabled={selectedBundle !== 0}
                >
                  <Plus className="w-5 h-5 text-foreground" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <Button variant="hero" size="xl" className="flex-1 text-base">
                Add to Cart — ${totalPrice}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>Fast Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>Money-Back Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
