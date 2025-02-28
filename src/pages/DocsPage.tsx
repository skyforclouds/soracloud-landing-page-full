
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ChevronRight, Book, Code, Terminal, Zap, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const docsCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics of Soracloud and set up your first project",
    icon: <Book className="w-8 h-8 text-accent" />,
    path: "/docs/getting-started",
  },
  {
    title: "API Reference",
    description: "Detailed documentation of our REST and GraphQL APIs",
    icon: <Code className="w-8 h-8 text-accent" />,
    path: "/docs/api",
  },
  {
    title: "CLI Tools",
    description: "Command-line tools for managing your Soracloud resources",
    icon: <Terminal className="w-8 h-8 text-accent" />,
    path: "/docs/cli",
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides for common tasks and use cases",
    icon: <Zap className="w-8 h-8 text-accent" />,
    path: "/docs/tutorials",
  },
  {
    title: "FAQs",
    description: "Answers to frequently asked questions about the platform",
    icon: <HelpCircle className="w-8 h-8 text-accent" />,
    path: "/docs/faqs",
  }
];

const DocsPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-foreground">Documentation</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Learn how to use SoraCloud to build, deploy, and scale your AI applications
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {docsCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-xl border-border/50 hover:bg-secondary/40 transition-all p-6"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-medium mb-2 text-foreground">{category.title}</h3>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <Link to={category.path} className="text-accent font-medium flex items-center">
                Read more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocsPage;
