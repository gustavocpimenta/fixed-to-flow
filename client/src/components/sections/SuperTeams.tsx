
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Rocket, Clock, Sparkles } from "lucide-react";

const SuperTeams = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI for Small Teams",
      description: "We help small teams and startups integrate AI, streamline workflows, and unlock smarter, faster ways of working."
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "One-Week MVP Sprints",
      description: "We use AI-powered tools to fast-track your concept, so you can test, learn, and evolve — fast."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "AI Foundations for Leaders",
      description: "A one-day workshop to build AI literacy, explore emerging scenarios, and cultivate tomorrow's essential skills."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Future Thinking Sessions",
      description: "Scenario planning and strategic sensemaking to help your team anticipate change and explore what's next."
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
    <section className="pt-4 pb-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-center text-white mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            For Super Teams and Bold Companies
          </motion.h2>
          
          <p className="text-lg text-gray-300 mt-4 mb-8 max-w-3xl mx-auto text-center font-bold">
            Accelerating your team ability to adapt, build, and lead with AI.
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
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gray-700/50 border-gray-600">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
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

export default SuperTeams;
