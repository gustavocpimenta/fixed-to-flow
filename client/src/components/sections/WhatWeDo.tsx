import { motion } from "framer-motion";
import dragonImage from "@/assets/dragon.png";

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-4"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">What We Do</h2>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-0 -mr-14">
              {/* Dragon image on the left */}
              <div className="md:w-5/12 flex justify-center">
                <div className="relative w-full max-w-md mx-auto md:mr-0 md:scale-110 md:origin-right">
                  <div className="rounded-xl overflow-hidden">
                    <img 
                      src={dragonImage} 
                      alt="Origami dragon" 
                      className="w-[110%] h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Text content on the right */}
              <div className="md:w-7/12 text-center md:text-left mt-6 md:mt-0 md:-ml-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                  Your Ally for Change
                </h3>
                <div className="text-lg md:text-xl text-gray-300 md:max-w-md">
                  <p>
                    <strong>Become AI-ready, future-focused, and adaptable — all while staying uniquely human. With our helping hand to guide the way.</strong>
                  </p>
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