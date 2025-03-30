import { motion } from "framer-motion";
import gusImage from "../../assets/gus.png";

const WhyUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Lived Experience
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Why Work With Us?
            </motion.h2>
            
            <motion.p
              className="text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto text-gray-300"
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
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-4 p-8 flex flex-col justify-center items-center lg:items-start">
                <div className="w-full max-w-[70%] lg:max-w-full"> {/* 30% smaller */}
                  <img 
                    src={gusImage} 
                    alt="Gus, Fixed to Flow Founder" 
                    className="rounded-xl shadow-xl mx-auto object-cover" 
                  />
                </div>
                
                <motion.div 
                  className="mt-8 text-center lg:text-left"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-3 text-primary">Gus</h3>
                  <p className="text-lg font-medium text-gray-300">Fixed to Flow Founder</p>
                  
                  <div className="mt-6 flex justify-center lg:justify-start space-x-4">
                    <motion.a 
                      href="#" 
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:col-span-8 p-8 lg:p-12 bg-gradient-to-br from-gray-800/70 to-gray-900/70">
                <div className="h-full flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="mb-6">
                      <svg className="w-12 h-12 text-primary/60 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path></svg>
                    </div>
                    
                    <p className="text-lg leading-relaxed mb-6 text-gray-200">
                      Gus has spent the past 20 years building digital products, designing meaningful 
                      productivity systems, and supporting top performers through change.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6 text-gray-200">
                      His path—shaped by radical diversity across personal and professional worlds—allows 
                      him to draw from a wide range of perspectives. Whether he's in the boardroom helping 
                      leaders craft strategic visions or on the street supporting young people hustling for 
                      their next opportunity, Gus feels equally at home.
                    </p>
                    
                    <p className="text-lg leading-relaxed text-gray-200">
                      He doesn't just talk about adaptability — he lives it. And that lived experience 
                      is what fuels his ability to guide others through complex, changing times.
                    </p>
                    
                    <div className="mt-12">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg shadow-lg inline-flex items-center transition-all"
                      >
                        Book a Consultation
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
