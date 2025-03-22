import { motion } from "framer-motion";

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">What We Do</h2>
          <p className="text-xl text-gray-600">
            Change is inevitable. Navigating it successfully? That's the skill we help you master.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="mb-16 text-center md:text-left bg-white rounded-2xl shadow-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="md:flex md:gap-8 items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Transform Fixed Mindsets Into Fluid Adaptation</h3>
                <p className="text-lg text-gray-700 mb-6">
                  We empower teams and organizations to embrace change with confidence, turning challenges into opportunities for growth and innovation.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/30 rounded-lg"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;