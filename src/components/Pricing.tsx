import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "For individual developers and small projects",
    quota: "10 GPU hours/month",
    features: [
      "A100 GPU access",
      "Basic monitoring",
      "Community support",
      "Public models only",
      "Shared resources"
    ],
    overageRate: "$3.50/hour"
  },
  {
    name: "Starter",
    price: "499",
    description: "For startups and growing teams",
    quota: "200 GPU hours/month",
    features: [
      "Priority GPU access",
      "Advanced monitoring",
      "Email support",
      "Custom model deployment",
      "Dedicated resources"
    ],
    overageRate: "$2.75/hour"
  },
  {
    name: "Team",
    price: "1,999",
    description: "For organizations with multiple projects",
    quota: "1,000 GPU hours/month",
    features: [
      "Priority GPU access",
      "Advanced monitoring & alerts",
      "24/7 support",
      "Team management",
      "Private registry",
      "Resource quotas"
    ],
    overageRate: "$2.50/hour"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale AI operations",
    quota: "Custom quota",
    features: [
      "Dedicated GPU clusters",
      "Custom SLA",
      "24/7 priority support",
      "SSO & RBAC",
      "Audit logging",
      "Custom integrations"
    ],
    overageRate: "Custom pricing"
  }
];

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Predictable Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start with a monthly quota of GPU hours. Only pay for additional usage beyond your plan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                plan.name === "Team" ? "ring-2 ring-accent scale-105" : ""
              }`}
            >
              <div className="p-8 border-b">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  {plan.price === "Custom" ? (
                    <span className="text-4xl font-bold">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </>
                  )}
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
                <div className="mt-4 p-2 bg-secondary rounded-lg">
                  <p className="text-sm font-medium">
                    Includes {plan.quota}
                    <br />
                    <span className="text-gray-600">
                      Then {plan.overageRate}
                    </span>
                  </p>
                </div>
              </div>
              <div className="p-8 flex flex-col h-full">
                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-accent mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
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
