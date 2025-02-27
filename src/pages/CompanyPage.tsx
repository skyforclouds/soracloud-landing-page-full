
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Company</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're building the future of AI infrastructure
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              <div className="md:w-1/2 rounded-2xl overflow-hidden glass-effect p-1">
                <img 
                  src="/placeholder.svg" 
                  alt="Our story" 
                  className="w-full h-80 object-cover rounded-xl" 
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  SoraCloud was founded in 2023 by a team of AI researchers and cloud infrastructure experts who saw the need for better tooling in the rapidly evolving AI landscape.
                </p>
                <p className="text-muted-foreground">
                  Our mission is to make AI infrastructure accessible, efficient, and cost-effective for organizations of all sizes. We believe that by democratizing access to AI compute resources, we can accelerate innovation and help solve some of the world's most challenging problems.
                </p>
              </div>
            </motion.div>
          </section>
          
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
