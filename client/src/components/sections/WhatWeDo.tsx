import { motion } from "framer-motion";
import springImage from "../../assets/spring.png";

const WhatWeDo = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="relative z-10">
          <div className="absolute -left-4 -top-6 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">Our Services</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 text-gray-900">What We Do</h2>
          </motion.div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed">
                <span className="block mb-3">Change is inevitable.</span> 
                <span className="block mb-3">Navigating it successfully?</span>
                <span className="block font-medium mb-8">That's a skill.</span>
              </div>
              
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="text-lg md:text-xl text-gray-800">
                  At <span className="font-semibold text-primary">Fixed to Flow</span>, we help small teams, businesses, and leaders not just <span className="italic">cope</span> with change, but actively <span className="font-bold text-primary">leverage</span> it.
                </p>
              </div>
              
              <div className="pt-8">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Discover Our Approach
                </motion.button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full h-full max-w-md p-6">
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/5 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full"></div>
              
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative z-10 transform hover:scale-105 transition-transform duration-300">
                <div className="p-1 bg-gradient-to-r from-primary/80 to-primary">
                  <div className="bg-white p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Transform Fixed Mindsets Into Fluid Adaptation</h3>
                    
                    <div className="mb-6 flex items-center justify-center">
                      <div className="w-full max-w-[200px] relative">
                        <img 
                          src={springImage} 
                          alt="Transform visualization" 
                          className="w-full h-auto" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-50"></div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      We empower teams and organizations to embrace change with confidence, turning challenges into opportunities for growth and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;