
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Optimizing Inference Performance for Large Language Models",
    excerpt: "Learn how to optimize your LLM inference for better performance and lower costs.",
    author: "Alex Johnson",
    date: "May 15, 2023",
    tags: ["AI", "Performance", "LLM"],
    image: "/placeholder.svg",
    slug: "optimizing-llm-inference"
  },
  {
    id: 2,
    title: "The Future of Multimodal AI on Serverless Infrastructure",
    excerpt: "Explore the possibilities of running multimodal AI models in serverless environments.",
    author: "Sarah Chen",
    date: "June 3, 2023",
    tags: ["Multimodal", "Serverless", "AI"],
    image: "/placeholder.svg",
    slug: "multimodal-ai-serverless"
  },
  {
    id: 3,
    title: "Building Scalable AI Pipelines with SoraCloud",
    excerpt: "A step-by-step guide to building scalable AI pipelines using SoraCloud's infrastructure.",
    author: "Michael Patel",
    date: "June 28, 2023",
    tags: ["Tutorials", "AI Pipelines", "Scaling"],
    image: "/placeholder.svg",
    slug: "scalable-ai-pipelines"
  },
  {
    id: 4,
    title: "Cost-Effective Strategies for AI Development",
    excerpt: "Discover how to reduce costs while maintaining performance in your AI development workflow.",
    author: "Emily Rodriguez",
    date: "July 12, 2023",
    tags: ["Cost Optimization", "Development", "Strategies"],
    image: "/placeholder.svg",
    slug: "cost-effective-ai-development"
  },
];

const BlogPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-foreground">Blog</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Insights, tutorials, and news about AI infrastructure and SoraCloud
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden border-border/50 hover:bg-secondary/40 transition-all"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-medium mb-2 text-foreground">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                      <span className="mx-2">·</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="text-accent flex items-center font-medium">
                      Read <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
