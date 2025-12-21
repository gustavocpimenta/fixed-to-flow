import { useRef, useEffect } from 'react';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import ServicesTab from "@/components/sections/ServicesTab";
import WhyUs from "@/components/sections/WhyUs";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
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

  // Handle hash navigation on page load
  useEffect(() => {
    if (window.location.hash === '#contact' && contactRef.current) {
      setTimeout(() => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <AnnouncementBar />
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
          
          {/* Combined section with continuous background */}
          <div className="bg-gray-900">
            <div ref={whatWeDoRef}>
              <WhatWeDo />
            </div>
            <div ref={superTeamsRef}>
              <ServicesTab />
            </div>
          </div>
          
          <div ref={whyUsRef}>
            <WhyUs />
          </div>
        </main>
        <div ref={contactRef} id="contact">
          <Footer />
        </div>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
