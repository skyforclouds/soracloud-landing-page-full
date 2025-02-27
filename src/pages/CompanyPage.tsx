
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

const CompanyPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">We wrangle GPU infrastructure so you can focus on building AI products.</h1>
          <div className="mt-6 mb-8">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Briefcase className="w-5 h-5 mr-2" />
              We're hiring!
            </Button>
          </div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect p-8 rounded-xl"
          >
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We're engineers who love solving hard problems in GPU orchestration. Our backgrounds span hybrid cloud architecture, GPU hardware, systems programming, and robotics - but we're always learning from each other and the wider open source community.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Working across Singapore and India, our team brings together folks who've previously built large scale systems at companies like Meta, Nutanix, ByteDance, and Gojek. Many of us have spent substantial time in US and European tech ecosystems, and are now united back in Asia to build global tech from home.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We keep things simple: write good code, build reliable systems, and have fun doing it. If you're passionate about GPU infrastructure and enjoy diving deep into technical challenges, come join us!
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-20">
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're a diverse team of engineers, researchers, and designers passionate about building the future of AI infrastructure.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="w-32 h-32 rounded-full glass-effect mx-auto mb-4 overflow-hidden p-1">
                    <img 
                      src="/placeholder.svg" 
                      alt={`Team member ${index}`} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Team Member {index}</h3>
                  <p className="text-muted-foreground">Co-founder & {index % 2 === 0 ? 'CTO' : 'CEO'}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyPage;
