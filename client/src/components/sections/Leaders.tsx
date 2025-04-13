
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, Bot, Layers, Swords } from "lucide-react";

const Leaders = () => {
  const services = [
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Flow OS",
      description: "A meaningful system to master change. Aligned with how you naturally work."
    },
    {
      icon: <Compass className="w-8 h-8 text-primary" />,
      title: "Flow Compass",
      description: "A self-discovery tool to map where you are, what's shifting, and where your energy wants to go next. Think of it as your inner GPS for meaningful change."
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "AI Mentoring",
      description: "Stop feeling lost with AI. We'll build a clear, personal strategy—combining foundational know-how with tools and use cases that fit your goals."
    },
    {
      icon: <Swords className="w-8 h-8 text-primary" />,
      title: "Sparring Sessions",
      description: "We won't go easy on you. Tough love, sharp questions, and zero fluff — to challenge your thinking and unlock real movement."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            For Leaders and Change-Makers
          </motion.h2>
          
          <p className="text-lg text-gray-300 mt-4 mb-8 max-w-3xl mx-auto text-center font-bold">
            One-on-one mentoring to build clarity, decisive action, and experimental growth.
          </p>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
