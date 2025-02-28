
import { motion } from "framer-motion";

const logos = [
  {
    name: "Google",
    src: "/placeholder.svg",
  },
  {
    name: "Meta",
    src: "/placeholder.svg",
  },
  {
    name: "Microsoft",
    src: "/placeholder.svg",
  },
  {
    name: "Amazon",
    src: "/placeholder.svg",
  },
  {
    name: "Apple",
    src: "/placeholder.svg",
  },
  {
    name: "OpenAI",
    src: "/placeholder.svg",
  },
  {
    name: "DeepMind",
    src: "/placeholder.svg",
  },
  {
    name: "Anthropic",
    src: "/placeholder.svg",
  },
];

const LogosCarousel = () => {
  return (
    <section className="py-8 bg-secondary/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-medium text-center mb-8 text-foreground">
          Trusted by AI developers and researchers
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex space-x-16 animate-[scroll_25s_linear_infinite]">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] h-16"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="h-8 w-auto opacity-50 hover:opacity-80 transition-all invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosCarousel;
