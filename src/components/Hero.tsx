import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-6">
          Now in Public Beta
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          The <em className="not-italic text-accent">Operating System</em> for Your AI Infrastructure
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Single control plane for your AI compute whether public cloud or on-prem. Serverless inference and multimodal AI applications out of the box, optimized for performance and cost.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
            Request Access
          </button>
          <button className="px-8 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            View Docs
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;