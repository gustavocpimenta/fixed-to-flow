import { useRef } from 'react';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import ServicesTab from "@/components/sections/ServicesTab";
import WhyUs from "@/components/sections/WhyUs";
// import NonProfit from "@/components/sections/NonProfit";

function App() {
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const superTeamsRef = useRef<HTMLDivElement>(null);
  // Combined SuperTeams and Leaders into ServicesTab
  const whyUsRef = useRef<HTMLDivElement>(null);
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
            leaders: () => scrollToSection(superTeamsRef), // Both now use same ref
            whyUs: () => scrollToSection(whyUsRef),
            nonProfit: () => scrollToSection(whyUsRef), // Redirect to Why Us section
            contact: () => scrollToSection(contactRef)
          }}
        />
        
        <main className="flex-grow">
          <Hero onGetStarted={() => scrollToSection(contactRef)} />
          <div ref={whatWeDoRef}>
            <WhatWeDo />
          </div>
          <div ref={superTeamsRef}>
            <ServicesTab />
          </div>
          <div ref={whyUsRef}>
            <WhyUs />
          </div>
        </main>
        <div ref={contactRef}>
          <Footer />
        </div>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
