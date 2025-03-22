import { motion } from "framer-motion";
import gusImage from "../../assets/gus_novo.jpg";

const WhyUs = () => {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Work With Us?
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Our Approach</h3>
            <p className="text-lg text-center mb-12">We believe adaptability is a process, not a one-time fix. Our step-by-step approach ensures meaningful change and lasting impact.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-dark bg-opacity-50 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-full bg-primary h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-white">1</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Discovery Call</h4>
              <p>A focused conversation to uncover challenges, explore opportunities, and set a direction.</p>
            </motion.div>
            
            <motion.div 
              className="bg-dark bg-opacity-50 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="rounded-full bg-primary h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-white">2</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Tailored Strategy</h4>
              <p>A dynamic roadmap designed for action, experimentation, and real-world impact.</p>
            </motion.div>
            
            <motion.div 
              className="bg-dark bg-opacity-50 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="rounded-full bg-primary h-12 w-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-white">3</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Ongoing Support & Iteration</h4>
              <p>We fine-tune strategies, test bold ideas, and ensure continuous growth through rapid learning cycles.</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Meet Gus, Fixed to Flow Founder</h3>
            
            <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
              <div className="md:w-1/3">
                <img 
                  src="/gus_novo.jpg" 
                  alt="Gus, Fixed to Flow Founder" 
                  className="rounded-lg shadow-xl mx-auto" 
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg mb-4">Gus has been in the game of building digital products, creating meaningful productivity systems, empowering change and supporting top performers for the past 20 years.</p>
                <p className="text-lg mb-4">His life path was marked by vast professional and personal experiences, which allowed him to adopt an approach based on radical diversity and leverage knowledge from different "worlds" and areas of expertise.</p>
                <p className="text-lg mb-4">Gus's background is his secret sauce; he doesn't merely preach adaptability, he has been living it throughout his life. Whether he's in a boardroom helping leaders craft strategic visions or on the street helping young people hustling for their next opportunity, Gus feels equally at home.</p>
                <p className="text-lg">This rare combination of skills and experiences enables Gus to provide valuable insights and guidance to anyone seeking to adapt to the current times.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
