
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const PricingPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start with a monthly quota and only pay for what you use beyond that.
          </p>
        </motion.div>
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
