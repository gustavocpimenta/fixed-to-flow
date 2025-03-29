import { useRef } from 'react';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import SuperTeams from "@/components/sections/SuperTeams";
import Leaders from "@/components/sections/Leaders";
import WhyUs from "@/components/sections/WhyUs";
import NonProfit from "@/components/sections/NonProfit";
import Contact from "@/components/sections/Contact";

function App() {
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const superTeamsRef = useRef<HTMLDivElement>(null);
  const leadersRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
  const nonProfitRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header 
          onNavigate={{
            whatWeDo: () => scrollToSection(whatWeDoRef),
            superTeams: () => scrollToSection(superTeamsRef),
            leaders: () => scrollToSection(leadersRef),
            whyUs: () => scrollToSection(whyUsRef),
            nonProfit: () => scrollToSection(nonProfitRef),
            contact: () => scrollToSection(contactRef)
          }}
        />
        
        <main className="flex-grow">
          <Hero onGetStarted={() => scrollToSection(contactRef)} />
          <div ref={whatWeDoRef}>
            <WhatWeDo />
          </div>
          <div ref={superTeamsRef}>
            <SuperTeams />
          </div>
          <div ref={leadersRef}>
            <Leaders />
          </div>
          <div ref={whyUsRef}>
            <WhyUs />
          </div>
          <div ref={nonProfitRef}>
            <NonProfit />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </main>
        
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
