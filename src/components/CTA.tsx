import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your AI Development?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join leading organizations using Soracloud to build and scale their AI applications.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="secondary">Schedule Demo</Button>
          <Button size="lg">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;