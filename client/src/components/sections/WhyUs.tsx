import { motion } from "framer-motion";
import gusImage from "../../assets/gus.png";

const WhyUs = () => {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Lived Experience
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Why Work With Us?
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl leading-relaxed mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We bring two decades of hands-on experience navigating digital transformation and human adaptation, offering you not just strategies but proven pathways to thrive amid constant change.
          </motion.p>
          
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
                  src={gusImage} 
                  alt="Gus, Fixed to Flow Founder" 
                  className="rounded-lg shadow-xl mx-auto" 
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg mb-4">Gus has spent the past 20 years building digital products, designing meaningful productivity systems, and supporting top performers through change.</p>
                <p className="text-lg mb-4">His path--shaped by radical diversity across personal and professional worlds--allows him to draw from a wide range of perspectives. Whether he's in the boardroom helping leaders craft strategic visions or on the street supporting young people hustling for their next opportunity, Gus feels equally at home.</p>
                <p className="text-lg">He doesn't just talk about adaptability — he lives it. And that lived experience is what fuels his ability to guide others through complex, changing times.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
