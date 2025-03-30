import { motion } from "framer-motion";
import springImage from "../../assets/spring.png";

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f8f8f8] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">What We Do</h2>

          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
            Change is inevitable. Navigating it successfully? That's a skill.
          </p>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At <span className="font-semibold text-primary">Fixed to Flow</span>, we help small teams, businesses, and leaders not just <span className="italic">cope</span> with change, but actively <span className="font-semibold">leverage</span> it.
            </p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-16 text-center md:text-left bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="md:grid md:grid-cols-12 gap-0">
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Transform Fixed Mindsets Into Fluid Adaptation</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We empower teams and organizations to embrace change with confidence, turning challenges into opportunities for growth and innovation.
                </p>
                <div className="mt-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/70"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
              <div className="md:col-span-5 bg-gradient-to-br from-primary/5 to-primary/20">
                <div className="h-full flex items-center justify-center p-8">
                  <img 
                    src={springImage} 
                    alt="Transformation visualization" 
                    className="w-full h-auto object-contain max-h-72" 
                  />
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