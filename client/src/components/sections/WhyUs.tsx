import { motion } from "framer-motion";
import gusImage from "../../assets/gus.png";
import vodafoneLogo from "../../assets/client_logos/vodafone.png";
import lisboaUniLogo from "../../assets/client_logos/universidade_lisboa.png";
import segurancaSocialLogo from "../../assets/client_logos/seguranca_social.png";
import randstadLogo from "../../assets/client_logos/randstad.png";
import seedrsLogo from "../../assets/client_logos/seedrs.png";
import montepioLogo from "../../assets/client_logos/montepio.png";
import adeoLogo from "../../assets/client_logos/adeo.png";
import lorealLogo from "../../assets/client_logos/loreal.png";
import lisboaCMLogo from "../../assets/client_logos/cml.png";
import galpLogo from "../../assets/client_logos/galp.png";
import claroLogo from "../../assets/client_logos/claro.png";
import bcpLogo from "../../assets/client_logos/bcp.png";
import tecnicoLogo from "../../assets/client_logos/tecnico.png";
import landingLogo from "../../assets/client_logos/lannding.png";
import bpLogo from "../../assets/client_logos/bp.png";

const WhyUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f8f8f8] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 -mt-[150px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Lived Experience
            </motion.span>

            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-8 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Why Work With Us
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We bring firsthand experience buiding systems and products  — and empowering people to adapt to what comes next.
            </motion.p>
          </div>

          <motion.div 
            className="mb-16 text-center md:text-left bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-4 p-8 flex flex-col justify-center items-center">
                <div className="w-full max-w-[45%] lg:max-w-[64%] flex justify-center"> {/* Reduced by 20% */}
                  <img 
                    src={gusImage} 
                    alt="Gus, Fixed to Flow Founder" 
                    className="rounded-xl mx-auto object-cover" 
                  />
                </div>

              </div>

              <div className="lg:col-span-8 p-8 lg:p-12 bg-white rounded-3xl shadow-lg">
                <div className="h-full flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="mb-8">
                      <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">FOUNDER STORY</span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Meet Gus</h3>
                    </div>

                    

                    <div className="space-y-6">
                      <p className="text-base leading-relaxed text-gray-600">
                        Gus has spent decades bringing ideas to life — building digital products, designing meaningful systems, and supporting people as they navigate complex change.
                      </p>

                      <p className="text-base leading-relaxed text-gray-600">
                        His journey moves through radical diversity: boardrooms and backstreets, startups and soul-searching gatherings. One foot in vision, the other in reality, he's as at ease helping leaders craft bold strategies as he is backing young people chasing second chances.
                      </p>

                      <p className="text-base leading-relaxed text-gray-600">
                        Adaptability isn't a tagline for Gus — it's a way of life. That's what makes him a trusted mentor for those navigating shifting ground (with just enough wit to make the trip worthwhile).
                      </p>
                      
                      <div className="flex space-x-3 mt-4">
                        <a href="https://www.linkedin.com/in/gustavocpimenta/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a href="https://x.com/gustavocpimenta" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto mt-16">
          <p className="text-gray-500 mb-6 text-center text-xl font-medium">Trusted by</p>
          <div className="flex flex-col gap-6 md:gap-8 items-center">
            {/* First Row - 3 logos on mobile, 5 on desktop */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center justify-center"
              >
                <img src={vodafoneLogo} alt="Vodafone" className="h-[46px] md:h-auto object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="flex items-center justify-center"
              >
                <img src={lisboaUniLogo} alt="Universidade de Lisboa" className="h-[46px] md:h-auto object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <img src={segurancaSocialLogo} alt="Segurança Social" className="h-[46px] md:h-auto object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="hidden md:flex items-center justify-center"
              >
                <img src={randstadLogo} alt="Randstad" className="h-[40px] md:h-auto object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="hidden md:flex items-center justify-center"
              >
                <img src={seedrsLogo} alt="Seedrs" className="h-[40px] md:h-auto object-contain" />
              </motion.div>
            </div>
            
            {/* Second Row - 3 logos on mobile, 5 on desktop */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="flex items-center justify-center"
              >
                <img src={randstadLogo} alt="Randstad" className="md:hidden h-[46px] md:h-auto object-contain" />
                <img src={montepioLogo} alt="Montepio" className="hidden md:block h-[40px] md:h-auto object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="flex items-center justify-center"
              >
                <img src={seedrsLogo} alt="Seedrs" className="md:hidden h-[46px] md:h-auto object-contain" />
                <img src={adeoLogo} alt="Adeo" className="hidden md:block h-[40px] md:h-auto object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.45 }}
                className="flex items-center justify-center"
              >
                <img src={montepioLogo} alt="Montepio" className="md:hidden h-[46px] md:h-auto object-contain" />
                <img src={lorealLogo} alt="L'Oréal" className="hidden md:block h-[40px] md:h-auto object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="hidden md:flex items-center justify-center"
              >
                <img src={lisboaCMLogo} alt="Câmara Municipal de Lisboa" className="h-[40px] md:h-auto object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.55 }}
                className="hidden md:flex items-center justify-center"
              >
                <img src={galpLogo} alt="Galp" className="h-[40px] md:h-auto object-contain" />
              </motion.div>
            </div>
            
            {/* Third Row - 3 logos on mobile, 5 on desktop */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="flex items-center justify-center"
              >
                <img src={adeoLogo} alt="Adeo" className="md:hidden h-[46px] md:h-auto object-contain" />
                <img src={claroLogo} alt="Claro" className="hidden md:block h-[40px] md:h-auto object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.65 }}
                className="flex items-center justify-center"
              >
                <img src={lorealLogo} alt="L'Oréal" className="md:hidden h-[46px] md:h-auto object-contain" />
                <img src={bcpLogo} alt="Millennium BCP" className="hidden md:block h-[40px] md:h-auto object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="flex items-center justify-center"
              >
                <img src={lisboaCMLogo} alt="Câmara Municipal de Lisboa" className="md:hidden h-[46px] md:h-auto object-contain" />
                <img src={bpLogo} alt="BP" className="hidden md:block h-[40px] md:h-auto object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.75 }}
                className="hidden md:flex items-center justify-center"
              >
                <img src={tecnicoLogo} alt="Técnico Lisboa" className="h-[40px] md:h-auto object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="hidden md:flex items-center justify-center"
              >
                <img src={landingLogo} alt="Landing.Jobs" className="h-[40px] md:h-auto object-contain" />
              </motion.div>
            </div>
            
            {/* Fourth Row - Mobile only (3 logos) */}
            <div className="grid grid-cols-3 gap-4 md:hidden">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.75 }}
                className="flex items-center justify-center"
              >
                <img src={galpLogo} alt="Galp" className="h-[46px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="flex items-center justify-center"
              >
                <img src={claroLogo} alt="Claro" className="h-[46px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.85 }}
                className="flex items-center justify-center"
              >
                <img src={bcpLogo} alt="Millennium BCP" className="h-[46px] object-contain" />
              </motion.div>
            </div>
            
            {/* Fifth Row - Mobile only (3 logos) */}
            <div className="grid grid-cols-3 gap-4 md:hidden">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.9 }}
                className="flex items-center justify-center"
              >
                <img src={bpLogo} alt="BP" className="h-[46px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.95 }}
                className="flex items-center justify-center"
              >
                <img src={tecnicoLogo} alt="Técnico Lisboa" className="h-[46px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.0 }}
                className="flex items-center justify-center"
              >
                <img src={landingLogo} alt="Landing.Jobs" className="h-[46px] object-contain" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;