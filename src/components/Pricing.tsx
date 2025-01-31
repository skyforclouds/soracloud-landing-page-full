import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Usage-Based Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pay only for what you use, with transparent per-hour pricing
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8 border-b">
            <h3 className="text-2xl font-bold mb-2">Managed GPU Hours</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold">$2.50</span>
              <span className="text-gray-600 ml-2">/ hour</span>
            </div>
            <p className="text-gray-600">For A100 GPUs. Other GPU types available.</p>
          </div>
          <div className="p-8">
            <ul className="space-y-4">
              {[
                "No minimum commitment",
                "Per-second billing",
                "Automatic scaling",
                "24/7 monitoring & support",
                "Enterprise SLA available"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-accent mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full mt-8 px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;