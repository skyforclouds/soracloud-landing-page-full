
import { motion } from "framer-motion";
import { Check, Info, Plus, Trash } from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const plans = [
  {
    name: "Developer",
    price: "Free",
    description: "Get started with GPU orchestration",
    quota: "1,500 MGH",
    quotaValue: 1500,
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
    quotaValue: 40000,
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
    quotaValue: 100000,
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

const gpuOptions = [
  { name: "NVIDIA A100", mghPerHour: 8 },
  { name: "NVIDIA H100", mghPerHour: 16 },
  { name: "NVIDIA L4", mghPerHour: 2 },
  { name: "NVIDIA T4", mghPerHour: 1 },
  { name: "AMD MI250", mghPerHour: 7 },
  { name: "AMD MI100", mghPerHour: 5 },
];

const Pricing = () => {
  const [calculatedItems, setCalculatedItems] = useState<{
    id: string;
    gpuType: string;
    quantity: number;
    mghPerHour: number;
    totalMGH: number;
  }[]>([]);
  
  const [selectedGpu, setSelectedGpu] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  const totalMGH = calculatedItems.reduce((acc, item) => acc + item.totalMGH, 0);
  
  const addItem = () => {
    if (!selectedGpu) return;
    
    const selectedGpuOption = gpuOptions.find(gpu => gpu.name === selectedGpu);
    if (!selectedGpuOption) return;
    
    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      gpuType: selectedGpu,
      quantity: quantity,
      mghPerHour: selectedGpuOption.mghPerHour,
      totalMGH: selectedGpuOption.mghPerHour * quantity * 720, // Assuming 720 hours in a month (30 days)
    };
    
    setCalculatedItems([...calculatedItems, newItem]);
    setSelectedGpu("");
    setQuantity(1);
  };
  
  const removeItem = (id: string) => {
    setCalculatedItems(calculatedItems.filter(item => item.id !== id));
  };
  
  const getRecommendedPlan = () => {
    if (totalMGH === 0) return null;
    
    if (totalMGH <= plans[0].quotaValue) {
      return plans[0]; // Developer
    } else if (totalMGH <= plans[1].quotaValue) {
      return plans[1]; // Business
    } else {
      return plans[2]; // Enterprise
    }
  };
  
  const recommendedPlan = getRecommendedPlan();

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Simple, Predictable Pricing</h1>
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
              . Only pay for additional usage beyond your plan's quota.
            </p>
          </motion.div>
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
        
        {/* Pricing Calculator Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Pricing Calculator</h2>
          <p className="text-muted-foreground text-center mb-8">Estimate your monthly GPU usage and find the right plan for your needs.</p>
          
          <div className="glass-effect rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label htmlFor="gpu-type" className="block text-sm font-medium text-muted-foreground mb-2">
                  GPU Type
                </label>
                <Select value={selectedGpu} onValueChange={setSelectedGpu}>
                  <SelectTrigger id="gpu-type" className="w-full">
                    <SelectValue placeholder="Select GPU" />
                  </SelectTrigger>
                  <SelectContent>
                    {gpuOptions.map((gpu) => (
                      <SelectItem key={gpu.name} value={gpu.name}>
                        {gpu.name} ({gpu.mghPerHour} MGH/hr)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-muted-foreground mb-2">
                  Quantity
                </label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-full"
                />
              </div>
              
              <div className="flex items-end">
                <Button 
                  onClick={addItem} 
                  className="w-full"
                  disabled={!selectedGpu}
                >
                  <Plus className="mr-2 h-4 w-4" /> Add to Estimate
                </Button>
              </div>
            </div>
            
            {calculatedItems.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4 text-foreground">Your Configuration</h3>
                
                <div className="rounded-lg overflow-hidden border border-border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>GPU Type</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>MGH/Hour</TableHead>
                        <TableHead>Monthly MGH</TableHead>
                        <TableHead className="w-[80px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {calculatedItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.gpuType}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>{item.mghPerHour * item.quantity}</TableCell>
                          <TableCell>{item.totalMGH.toLocaleString()}</TableCell>
                          <TableCell>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => removeItem(item.id)}
                              className="text-muted-foreground hover:text-destructive"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-secondary/50 flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <p className="text-lg font-medium text-foreground">
                      Estimated Monthly Usage: <span className="text-accent">{totalMGH.toLocaleString()} MGH</span>
                    </p>
                  </div>
                  
                  {recommendedPlan && (
                    <div className="mt-4 md:mt-0">
                      <p className="text-muted-foreground">
                        Recommended Plan:
                        <span className="ml-2 font-medium text-foreground">
                          {recommendedPlan.name}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
