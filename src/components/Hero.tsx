import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-6">
          Now in Beta
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Effortless GPU Orchestration
          <br /> for Modern Development
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Scale your GPU workloads seamlessly. Deploy faster, optimize resources,
          and focus on what matters most - your code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            View Documentation
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;