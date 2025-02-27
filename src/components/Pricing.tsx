
import { motion } from "framer-motion";
import { ArrowRight, Check, Info } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const plans = [
  {
    name: "Developer",
    price: "Free",
    description: "Get started with GPU orchestration",
    quota: "1,500 MGH",
    features: [
      "1 workspace",
      "Community support"
    ],
    overageRate: "$0.05/MGH"
  },
  {
    name: "Business",
    price: "890",
    description: "Everything in Developer, plus:",
    quota: "40,000 MGH",
    features: [
      "Up to 10 workspaces",
      "Early access to new features",
      "Email support with specialists",
      "Priority support with dedicated engineer",
      "Advanced security controls",
      "Custom deployment options"
    ],
    overageRate: "$0.035/MGH"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Everything in Business, plus:",
    quota: "Custom MGH pricing including bulk discounts",
    features: [
      "Unlimited workspaces",
      "Implementation support + dedicated team",
      "Enterprise security package (SSO, audit logs)",
      "On-premise support",
      "Network isolation"
    ],
    overageRate: "Custom pricing"
  }
];

const Pricing = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Simple, Predictable Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start with a generous monthly quota of Managed GPU Hours (MGH)
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="inline-flex items-center ml-1 text-muted-foreground hover:text-foreground">
                    <Info className="h-4 w-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-secondary p-2 shadow-lg rounded-md border border-border max-w-xs text-foreground">
                  <p>Based on type and number of GPUs managed by SoraCloud</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            . Only pay for additional usage beyond your plan's quota.{" "}
            <Link to="/pricing" className="text-accent hover:underline inline-flex items-center">
              Go to pricing calculator
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-effect rounded-2xl overflow-hidden hover:bg-secondary/40 transition-all ${
                plan.name === "Business" ? "ring-2 ring-accent scale-105" : ""
              }`}
            >
              <div className="p-8 border-b border-border/50">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  {plan.price === "Custom" ? (
                    <span className="text-4xl font-bold text-foreground">Custom</span>
                  ) : plan.price === "Free" ? (
                    <span className="text-4xl font-bold text-foreground">Free</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                      <span className="text-muted-foreground ml-2">/month</span>
                    </>
                  )}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
                <div className="mt-4 p-2 bg-secondary/70 rounded-lg">
                  <p className="text-sm font-medium text-foreground">
                    Includes {plan.quota}
                    <br />
                    <span className="text-muted-foreground">
                      Then {plan.overageRate}
                    </span>
                  </p>
                </div>
              </div>
              <div className="p-8 flex flex-col h-full">
                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors">
                  {plan.name === "Enterprise" ? "Contact Sales" : "Request Access"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
