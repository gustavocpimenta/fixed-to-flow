
import { motion } from "framer-motion";

const Leaders = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            For Leaders and Change Makers
          </motion.h2>
          
          <p className="text-lg text-gray-600 mt-4 mb-8 max-w-3xl mx-auto text-center">
            One-on-one mentoring for leaders and change makers seeking clarity, decisive action, and accelerated growth through an experimental mindset.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Flow OS */}
            <motion.div 
              className="bg-accent/20 p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4">Flow OS</h3>
              <p className="text-gray-700">Your personalized operating system for navigating change with clarity and confidence. Build adaptive habits, systems, and mindsets that align with your unique rhythm and life direction.</p>
            </motion.div>

            {/* Flow Compass */}
            <motion.div 
              className="bg-accent/20 p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4">Flow Compass</h3>
              <p className="text-gray-700">A self-discovery tool to map where you are, what's shifting, and where your energy wants to go next. Think of it as your inner GPS for meaningful change.</p>
            </motion.div>

            {/* AI Mentoring */}
            <motion.div 
              className="bg-accent/20 p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">AI Mentoring</h3>
              <p className="text-gray-700">Stop feeling lost with AI. We'll build a clear, personal strategy—combining foundational know-how with tools and use cases that fit your goals.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
