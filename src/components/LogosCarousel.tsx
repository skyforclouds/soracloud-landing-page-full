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
    <section className="py-12 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-12">
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
                  className="h-8 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
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