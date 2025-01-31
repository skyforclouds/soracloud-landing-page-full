import { motion } from "framer-motion";
import { Terminal, Zap, Shield, BarChart } from "lucide-react";

const features = [
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "Simple API",
    description: "Intuitive API design that feels natural to developers.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Optimized resource allocation with minimal latency.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure by Default",
    description: "Enterprise-grade security with zero configuration.",
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Real-time Metrics",
    description: "Comprehensive insights into your GPU utilization.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Built for Developer Productivity
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage GPU resources at scale, wrapped in a
            developer-friendly interface.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 text-accent">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;