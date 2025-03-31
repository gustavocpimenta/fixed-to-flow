import { motion } from "framer-motion";
import { Lightbulb, Brain, Rocket, Users, ArrowRight } from "lucide-react";

const WhatWeDo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      icon: <Brain className="h-10 w-10" />,
      title: "AI Strategy & Integration",
      description: "We help you navigate the AI landscape, identifying the right tools and approaches to transform your business and workflows.",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <Rocket className="h-10 w-10" />,
      title: "Adaptive Leadership",
      description: "Build the mindset and capabilities needed to thrive in rapid change, turning uncertainty into opportunity.",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Future-Ready Workflows",
      description: "Create systems and processes that flex with changing conditions while maintaining clarity and momentum.",
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Team Transformation",
      description: "Equip your people with the skills, tools and mindsets to navigate change with confidence and creativity.",
      color: "from-pink-500/20 to-rose-500/20"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide mb-4">OUR APPROACH</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            From Fixed to <span className="text-primary">Flow</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We help small teams, businesses, and leaders not just <span className="italic">cope</span> with change, but actively <span className="font-semibold">leverage</span> it for growth, innovation, and sustainable success.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} transform rotate-1 scale-[1.02] opacity-70`}></div>
              <div className="relative p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-5 flex-grow">{service.description}</p>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center text-primary font-medium cursor-pointer group"
                >
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center px-8 py-4 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
            <span>See all our services</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;