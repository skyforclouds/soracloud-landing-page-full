
import { motion } from "framer-motion";
import { Terminal, Zap, Shield, BarChart } from "lucide-react";

const features = [
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "One-step setup",
    description: "Connect any compute resource with a single command and manage your entire AI infra stack from one dashboard.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Efficient compute",
    description: "Optimized with latest quantization and acceleration techniques for 5x performance boost",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Smart resource management",
    description: "Autoscaling and intelligent scheduling of batch jobs to maximize resource utilization",
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Built for enterprise",
    description: "Enterprise-grade security with role-based access control. Secure network isolation between workloads and teams. Full audit logging and reporting built in.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 glass-effect rounded-lg hover:bg-secondary/40 transition-all"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 text-accent">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
