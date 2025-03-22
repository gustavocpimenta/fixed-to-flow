import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";

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
            For Leaders and Top Performers
          </motion.h2>
          
          <motion.div 
            className="mt-12 bg-accent/20 p-8 md:p-12 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <p className="text-lg mb-6">One-on-one mentoring for business leaders, founders, and professionals seeking clarity, decisive action, and accelerated growth through an experimental mindset.</p>
                <p className="text-lg">We help you <span className="font-semibold">embrace uncertainty, test bold ideas, and iterate rapidly</span>, ensuring you stay ahead while leveraging AI where it adds value.</p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-primary rounded-full p-4 shadow-lg">
                  <PlusCircle className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
