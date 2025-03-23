import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import gusImage from "../../assets/gus_novo.jpg";

const WhyUs = () => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Designed for you</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Choose your path</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">1:1 Breakthrough</h3>
                <div className="bg-primary text-white text-sm font-bold px-3 py-1 rounded">
                  $2,500
                </div>
              </div>
              
              <p className="text-gray-600 mb-8">Perfect for individuals looking to quickly transform their adaptability to change and reach new heights in their professional life.</p>
              
              <div className="space-y-4 mb-8">
                {[
                  "6 personalized coaching sessions",
                  "Custom adaptability assessment",
                  "Tailored transformation roadmap",
                  "Weekly accountability check-ins",
                  "Access to premium resources",
                  "30-day follow-up support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-3 bg-black text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                <span>Apply Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Team Flow</h3>
                <div className="bg-primary text-white text-sm font-bold px-3 py-1 rounded">
                  $6,000
                </div>
              </div>
              
              <p className="text-gray-600 mb-8">Designed for teams of 5-10 members who want to develop collective adaptability and thrive through organizational change.</p>
              
              <div className="space-y-4 mb-8">
                {[
                  "3 facilitated team workshops",
                  "Team adaptability assessment",
                  "Customized team roadmap",
                  "Leader coaching sessions (4x)",
                  "Implementation support",
                  "90-day accountability program",
                  "Measurement and reporting"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-3 bg-black text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                <span>Request Info</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-24 bg-black text-white p-8 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img 
                  src={gusImage} 
                  alt="Gus, Fixed to Flow Founder" 
                  className="rounded-lg mx-auto" 
                />
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4">Meet Gus, Fixed to Flow Founder</h3>
                <p className="text-gray-300 mb-4">Gus has been in the game of building digital products, creating meaningful productivity systems, empowering change and supporting top performers for the past 20 years.</p>
                <p className="text-gray-300">This rare combination of skills and experiences enables Gus to provide valuable insights and guidance to anyone seeking to adapt to the current times.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
