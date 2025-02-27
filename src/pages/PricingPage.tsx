
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const PricingPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
