
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Accelerate Your AI Development?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
          Join leading organizations using SoraCloud to build and scale their AI applications.
        </p>
        <div className="flex justify-center">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScFmbriWn_BYPFTQ_WtiBaU4KBn7JkUySxi3DCo24C9LvR36Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg">
              Request Access
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
