
import { motion } from "framer-motion";

const CTA = () => {
  return (
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
            Ready to stop wrangling GPUs?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            SoraCloud gives you the tools to manage and optimize your AI infrastructure, so you can focus on building amazing AI products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScFmbriWn_BYPFTQ_WtiBaU4KBn7JkUySxi3DCo24C9LvR36Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
            >
              Request Access
            </a>
            <a
              href="/docs"
              className="px-8 py-3 border border-border rounded-lg hover:bg-secondary/60 transition-colors"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
