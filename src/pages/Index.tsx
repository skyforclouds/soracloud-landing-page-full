import { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import UseCases from "../components/UseCases";
import Pricing from "../components/Pricing";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="bg-white">
      <Hero />
      <UseCases />
      <Features />
      <Pricing />
    </main>
  );
};

export default Index;