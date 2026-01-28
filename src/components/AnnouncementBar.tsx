import { motion } from "framer-motion";

const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container-custom py-2.5">
        <motion.p 
          className="text-center text-sm font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🎉 <span className="font-bold">LIMITED TIME OFFER</span> — Free Shipping on All Orders + 30-Day Money Back Guarantee
        </motion.p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
