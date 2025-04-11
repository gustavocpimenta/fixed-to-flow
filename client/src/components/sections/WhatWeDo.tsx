import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">What We Do</h2>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We help small teams, businesses, and leaders not just <span className="italic">cope</span> with change, but actively <span className="font-semibold">leverage</span> it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;