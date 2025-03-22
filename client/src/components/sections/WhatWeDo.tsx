import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What We Do</h2>
            <p className="text-xl text-center mb-10">Change is inevitable. Navigating it successfully? That's a skill.</p>
          </motion.div>
          
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-6">At <span className="font-semibold text-primary">Fixed to Flow</span>, we help small teams, businesses, and leaders not just <span className="font-semibold">cope</span> with change, but actively <span className="font-semibold">leverage</span> it.</p>
            <p className="text-lg mb-6">Through <span className="font-semibold">strategy, training, and AI-powered tools</span>, we ensure you and your team are <span className="font-semibold">AI-ready, future-focused, and adaptable</span> in an evolving world.</p>
          </motion.div>
          
          <div className="flow-divider my-12"></div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
