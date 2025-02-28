
import { motion } from "framer-motion";
import { useState } from "react";
import RequestForm from "./RequestForm";

const CTA = () => {
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-medium mb-6 text-foreground">
              Ready to Accelerate Your AI Development?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join leading organizations using Soracloud to build and scale their AI applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openForm}
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
              >
                Request Access
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <RequestForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
};

export default CTA;
