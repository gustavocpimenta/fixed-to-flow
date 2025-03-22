import { motion } from "framer-motion";
import { Compass, Lightbulb, Users, Brain, BarChart } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Readiness",
      description: "Prepare your team with the skills and mindset to leverage artificial intelligence effectively in your business operations."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Adaptability Training",
      description: "Build resilience through structured programs that enhance your team's ability to navigate change with confidence."
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Strategic Direction",
      description: "Develop clear pathways for future growth that embrace change as an opportunity rather than an obstacle."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Facilitation",
      description: "Transform rigid thinking into fluid creativity that drives continuous improvement and breakthrough ideas."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Alignment",
      description: "Create cohesive teams that move together through transitions with shared purpose and minimal friction."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#f8f8f8] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">What We Do</h2>
          <p className="text-xl text-gray-600">
            Change is inevitable. Navigating it successfully? That's the skill we help you master.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="mb-16 text-center md:text-left bg-white rounded-2xl shadow-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="md:flex md:gap-8 items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Transform Fixed Mindsets Into Fluid Adaptation</h3>
                <p className="text-lg text-gray-700 mb-6">
                  At <span className="font-semibold text-primary">Fixed to Flow</span>, we help teams, businesses, and leaders not just <span className="font-semibold">cope</span> with change, but actively <span className="font-semibold">leverage</span> it as a competitive advantage.
                </p>
                <p className="text-lg text-gray-700">
                  Through <span className="font-semibold">strategy, training, and AI-powered tools</span>, we ensure you and your team are <span className="font-semibold">future-focused and adaptable</span> in an evolving world.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-video bg-gradient-to-tr from-primary/90 to-primary rounded-xl flex items-center justify-center shadow-lg">
                  <div className="text-white text-center p-8">
                    <div className="font-bold text-3xl mb-2">Fixed → Flow</div>
                    <p className="opacity-90">The journey from resistance to resilience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
