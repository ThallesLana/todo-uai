import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyUse from "@/components/landing/WhyUse";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import * as React from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { hash } = useLocation();

  React.useEffect(() => {
    if (!hash) return;

    const el = document.querySelector(hash);
    if (!el) return;

    window.setTimeout(() => {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }, 0);
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <WhyUse />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
