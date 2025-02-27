
import Navbar from "../components/Navbar";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const PricingPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <Pricing showCalculator={true} />
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
