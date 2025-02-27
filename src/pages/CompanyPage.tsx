
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
              <h2 className="text-3xl font-bold mb-4 text-foreground">Build stuff. Have fun.</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "/placeholder.svg",
                "/placeholder.svg",
                "/placeholder.svg",
                "/placeholder.svg", 
                "/placeholder.svg",
                "/placeholder.svg"
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="overflow-hidden rounded-xl glass-effect p-1"
                >
                  <img 
                    src={image} 
                    alt={`Team photo ${index + 1}`} 
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
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
