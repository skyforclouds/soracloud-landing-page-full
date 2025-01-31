import { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import UseCases from "../components/UseCases";
import CodeExample from "../components/CodeExample";
import Metrics from "../components/Metrics";

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
      <Features />
      <UseCases />
      <CodeExample />
      <Metrics />
    </main>
  );
};

export default Index;