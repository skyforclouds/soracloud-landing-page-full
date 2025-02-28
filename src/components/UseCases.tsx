
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const useCases = [
  {
    title: "Serverless Inference",
    description: "High-performance inference endpoints that automatically scale with your traffic. Deploy faster and cheaper with the latest model optimization techniques.",
    image: "/placeholder.svg",
    imageAlt: "Serverless Inference Platform Screenshot"
  },
  {
    title: "Ready-made Multimodal AI Apps",
    description: "Launch compound AI applications for common use cases like document search and video content summarization out of the box. Customize with your data for turnkey enterprise AI apps hosted on your own infra.",
    image: "/placeholder.svg",
    imageAlt: "Multimodal AI Apps Dashboard"
  },
  {
    title: "Control Plane for Hybrid Cloud",
    description: "Unify your AI compute across public clouds and on-prem resources. Single interface, complete visibility over system health and performance, and granular control over resource allocation.",
    image: "/placeholder.svg",
    imageAlt: "Hybrid Cloud Control Panel"
  }
];

const UseCases = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extralight mb-4 text-foreground">
            Stop wrangling GPUs, start building AI
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We make your infra work for you. Prototype production-ready apps in minutes, not days or weeks.
          </p>
        </div>
        {useCases.map((useCase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 mb-20 last:mb-0`}
          >
            <div className="flex-1">
              <h3 className="text-2xl font-extralight mb-4 text-foreground">{useCase.title}</h3>
              <p className="text-muted-foreground mb-6">{useCase.description}</p>
              <button className="group inline-flex items-center text-accent hover:text-accent/90 transition-colors">
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="flex-1">
              <img
                src={useCase.image}
                alt={useCase.imageAlt}
                className="rounded-lg w-full glass-effect p-1"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
