
import { motion } from "framer-motion";
import { useState } from "react";
import RequestForm from "./RequestForm";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
    // Prevent body scrolling when form is open
    document.body.style.overflow = "hidden";
  };

  const closeForm = () => {
    setIsFormOpen(false);
    // Restore body scrolling when form is closed
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-accent/10 text-accent rounded-full mb-6">
            Coming Soon!
          </span>
          <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight text-foreground">
            The <em className="not-italic text-gradient">Operating System</em> for Your AI Infrastructure
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Single control plane for your AI compute whether public cloud or on-prem. Serverless inference and multimodal AI applications out of the box, optimized for performance and cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openForm}
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
            >
              Request Access
            </button>
            <button className="px-8 py-3 border border-border rounded-lg hover:bg-secondary/60 transition-colors">
              View Docs
            </button>
          </div>
        </motion.div>
      </section>

      <RequestForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
};

export default Hero;
