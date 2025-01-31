import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LogosCarousel from "../components/LogosCarousel";
import Features from "../components/Features";
import UseCases from "../components/UseCases";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="bg-white pt-16">
      <Navbar />
      <Hero />
      <LogosCarousel />
      <UseCases />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;