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
import biLogo from "../../assets/client_logos/bi.png";
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
              className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
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
              Why Work With Us?
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We bring two decades of hands-on experience navigating digital transformation 
              and human adaptation, offering you not just strategies but proven pathways 
              to thrive amid constant change.
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
              <div className="lg:col-span-4 p-8 flex flex-col justify-center items-center lg:items-start">
                <div className="w-full max-w-[56%] lg:max-w-[80%]"> {/* Increased by 15% */}
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
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Meet Gus, Fixed to Flow Founder</h3>
                    </div>

                    <div className="border-l-[3px] border-primary pl-6 mb-8 py-2">
                      <p className="text-lg italic text-gray-700">
                        "My mission is to help individuals and organizations navigate change with confidence and purpose."
                      </p>
                    </div>

                    <div className="space-y-6">
                      <p className="text-base leading-relaxed text-gray-600">
                        Gus has spent the past 20 years building digital products, designing meaningful 
                        productivity systems, and supporting top performers through change.
                      </p>

                      <p className="text-base leading-relaxed text-gray-600">
                        His path—shaped by radical diversity across personal and professional worlds—allows 
                        him to draw from a wide range of perspectives. Whether he's in the boardroom helping 
                        leaders craft strategic visions or on the street supporting young people hustling for 
                        their next opportunity, Gus feels equally at home.
                      </p>
                    </div>

                    <p className="text-base leading-relaxed text-gray-600">
                      He doesn't just talk about adaptability — he lives it. And that lived experience 
                      is what fuels his ability to guide others through complex, changing times.
                    </p>

                    <div className="mt-12">
                      <motion.a 
                        href="#" 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-all"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto mt-16">
          <p className="text-gray-500 mb-6 text-center">Trusted by leading organizations</p>
          <div className="flex flex-col gap-6 md:gap-8 items-center">
            {/* First Row - 5 logos */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center justify-center"
              >
                <img src={vodafoneLogo} alt="Vodafone" className="h-[40px] md:h-auto max-h-[60px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="flex items-center justify-center"
              >
                <img src={lisboaUniLogo} alt="Universidade de Lisboa" className="h-[40px] md:h-auto max-h-[60px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <img src={segurancaSocialLogo} alt="Segurança Social" className="h-[40px] md:h-auto max-h-[60px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="flex items-center justify-center"
              >
                <img src={randstadLogo} alt="Randstad" className="h-[40px] md:h-[50px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex items-center justify-center"
              >
                <img src={seedrsLogo} alt="Seedrs" className="h-[40px] md:h-[50px] object-contain" />
              </motion.div>
            </div>
            
            {/* Second Row - 5 logos */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="flex items-center justify-center"
              >
                <img src={montepioLogo} alt="Montepio" className="h-[40px] md:h-[50px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="flex items-center justify-center"
              >
                <img src={adeoLogo} alt="Adeo" className="h-[40px] md:h-[50px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.45 }}
                className="flex items-center justify-center"
              >
                <img src={lorealLogo} alt="L'Oréal" className="h-[40px] md:h-[50px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex items-center justify-center"
              >
                <img src={lisboaCMLogo} alt="Câmara Municipal de Lisboa" className="h-[40px] md:h-[50px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.55 }}
                className="flex items-center justify-center"
              >
                <img src={galpLogo} alt="Galp" className="h-[40px] md:h-[50px] object-contain" />
              </motion.div>
            </div>
            
            {/* Third Row - 5 logos */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="flex items-center justify-center"
              >
                <img src={claroLogo} alt="Claro" className="h-[40px] md:h-[50px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.65 }}
                className="flex items-center justify-center"
              >
                <img src={bcpLogo} alt="Millennium BCP" className="h-[40px] md:h-[50px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="flex items-center justify-center"
              >
                <img src={biLogo} alt="BI" className="h-[40px] md:h-[50px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.75 }}
                className="flex items-center justify-center"
              >
                <img src={tecnicoLogo} alt="Técnico Lisboa" className="h-[40px] md:h-[50px] object-contain" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="flex items-center justify-center"
              >
                <img src={landingLogo} alt="Landing.Jobs" className="h-[40px] md:h-[50px] object-contain" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;