import { motion } from "framer-motion";
import { Check, Rocket, Users, Brain, Award, BarChart } from "lucide-react";

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/80 text-white text-sm font-medium mb-4">Our Transformation Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">From hesitance to breakthroughs</h2>
          <p className="text-xl text-gray-300">
            Our proven methodologies help individuals and organizations unlock their full potential.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Rocket className="h-8 w-8 text-primary" />,
                title: "Launch Your Change Journey",
                description: "Begin your transformation with our expert-guided initial assessment and personalized roadmap."
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Build Adaptable Teams",
                description: "Create resilient, flexible teams that thrive in changing environments and embrace new challenges."
              },
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "Develop Growth Mindset",
                description: "Shift from fixed to fluid thinking patterns that embrace possibilities instead of limitations."
              },
              {
                icon: <BarChart className="h-8 w-8 text-primary" />,
                title: "Measure Progress",
                description: "Track transformative results with our specialized metrics and evaluation tools."
              },
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "Celebrate Breakthroughs",
                description: "Recognize and reinforce positive changes to create sustainable momentum for success."
              },
              {
                icon: <Check className="h-8 w-8 text-primary" />,
                title: "Lock In Results",
                description: "Integrate new behaviors and mindsets permanently with our sustainability framework."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-xl p-6 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-16 p-8 rounded-xl bg-gradient-to-r from-amber-50 to-amber-100 text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">Learn and grow with confidence</h3>
                <p className="text-gray-700 mb-4">Our transformation programs are built to help you navigate change with clarity and purpose.</p>
                <div className="space-y-2">
                  {[
                    "Personal transformation coaching",
                    "Team adaptation workshops",
                    "Leadership fluidity training",
                    "Organizational change management"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="w-40 h-40 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary/40 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      Start Now
                    </div>
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