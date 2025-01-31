import { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CodeExample from "../components/CodeExample";
import Metrics from "../components/Metrics";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="bg-white">
      <Hero />
      <Features />
      <CodeExample />
      <Metrics />
    </main>
  );
};

export default Index;