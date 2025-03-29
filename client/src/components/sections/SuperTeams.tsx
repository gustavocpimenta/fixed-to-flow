
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Component1Icon, Component2Icon, BadgeCheckIcon, ArrowRightCircleIcon } from "lucide-react";

const SuperTeams = () => {
  const services = [
    {
      icon: <Component1Icon className="w-6 h-6 text-primary" />,
      title: "Flow OS",
      description: "Your personalized operating system for navigating change with clarity and confidence. Build adaptive habits, systems, and mindsets that align with your unique rhythm and life direction."
    },
    {
      icon: <Component2Icon className="w-6 h-6 text-primary" />,
      title: "Flow Compass",
      description: "A self-discovery tool to map where you are, what's shifting, and where your energy wants to go next. Think of it as your inner GPS for meaningful change."
    },
    {
      icon: <BadgeCheckIcon className="w-6 h-6 text-primary" />,
      title: "AI North Star",
      description: "Leverage the power of AI to amplify your direction and decision-making. We co-create your personal or team North Star, blending human insight with smart AI support."
    },
    {
      icon: <ArrowRightCircleIcon className="w-6 h-6 text-primary" />,
      title: "Sparring Session",
      description: "One-on-one strategic sessions to challenge your thinking, unlock stuck patterns, and gain perspective. Fast, focused, and future-oriented."
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
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            For Super Teams and Bold Companies
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
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

export default SuperTeams;
