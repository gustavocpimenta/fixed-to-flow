
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="pt-24 pb-12 text-white" style={{ margin: 0, border: 0 }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-0"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">What We Do</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-semibold">
            Amplified by AI, anchored in humanity.
          </p>
          <p className="text-lg md:text-xl text-gray-400">
            Supporting leaders, teams, and companies who want to integrate AI, strengthen human skills, and stay adaptable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
