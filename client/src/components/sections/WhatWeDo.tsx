import { motion } from "framer-motion";
import { CircleUser, Code, BarChart, Sparkles } from "lucide-react";

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            <span className="relative inline-block">
              <span className="relative z-10">What We</span>
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-2 left-0 h-3 bg-primary/20 z-0 rounded"
              ></motion.span>
            </span>
            {" "}
            <span className="text-primary">Do</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-20 max-w-5xl mx-auto">
          {/* Section 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1 order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <CircleUser className="text-primary mr-3 h-7 w-7" />
                <span>We transform leaders</span>
              </h3>
              <p className="text-gray-700 mb-6">
                We coach leaders to thrive in ambiguity, make clearer decisions under pressure, and build adaptive mindsets. Through personalized sessions, we help you develop the skills to lead effectively through rapid change.
              </p>
              <ul className="space-y-2">
                {['Personalized leadership coaching', 'Adaptive decision-making', 'Resilience building'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-primary/20 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 order-1 md:order-2 bg-gradient-to-br from-primary/10 to-primary/30 p-10 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-bl-full"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <motion.div 
                  initial={{ rotate: -5, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-xs h-64 bg-white rounded-xl shadow-xl flex items-center justify-center"
                >
                  <span className="text-5xl font-bold text-primary">1</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1 bg-gradient-to-br from-blue-500/10 to-purple-500/30 p-10 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/30 rounded-tr-full"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <motion.div 
                  initial={{ rotate: 5, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-xs h-64 bg-white rounded-xl shadow-xl flex items-center justify-center"
                >
                  <span className="text-5xl font-bold text-blue-500">2</span>
                </motion.div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Code className="text-blue-500 mr-3 h-7 w-7" />
                <span>We integrate AI</span>
              </h3>
              <p className="text-gray-700 mb-6">
                We help teams adopt AI tools in practical, human-centered ways. From strategy to implementation, we ensure AI amplifies your team's capabilities without losing the human touch that makes your work meaningful.
              </p>
              <ul className="space-y-2">
                {['AI readiness assessment', 'Workflow optimization', 'Custom implementation plans'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-blue-500/20 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1 order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <BarChart className="text-green-600 mr-3 h-7 w-7" />
                <span>We future-proof teams</span>
              </h3>
              <p className="text-gray-700 mb-6">
                We build resilient teams that can adapt to rapidly changing environments. Our workshops and trainings help teams develop agile mindsets, effective collaboration skills, and the confidence to navigate uncertainty.
              </p>
              <ul className="space-y-2">
                {['Team capability mapping', 'Adaptive workflows', 'Future scenario planning'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-5 h-5 bg-green-600/20 rounded-full flex-shrink-0 mt-1 mr-3"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 order-1 md:order-2 bg-gradient-to-br from-green-500/10 to-teal-500/30 p-10 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-bl-full"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <motion.div 
                  initial={{ rotate: -5, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-xs h-64 bg-white rounded-xl shadow-xl flex items-center justify-center"
                >
                  <span className="text-5xl font-bold text-green-600">3</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary rounded-lg blur-md opacity-70 -m-1"></div>
            <button className="relative bg-primary hover:bg-primary/90 text-white font-bold py-5 px-8 rounded-lg flex items-center shadow-xl">
              <span className="mr-2 text-lg">Get Started</span>
              <Sparkles className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;