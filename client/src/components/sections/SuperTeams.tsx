
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Rocket, Clock, Users, Sparkles, Laptop } from "lucide-react";

const SuperTeams = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI for Small Teams",
      description: "We help small teams and startups integrate AI, streamline workflows, and work better, not harder."
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "One-Week MVP Sprints",
      description: "Using AI-powered tools, we take your idea from concept to MVP in just one week, allowing rapid testing and learning."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "AI Foundations for Leaders",
      description: "Understand AI's impact and turn it into business value through practical, hands-on learning."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "AI Workforce Readiness",
      description: "Practical sessions to equip teams with key AI skills and streamline workflows through scenario-based exercises."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Strategic Sessions",
      description: "Expert-led discussions and scenario planning to help teams anticipate change and align strategies with the future."
    },
    {
      icon: <Laptop className="w-8 h-8 text-primary" />,
      title: "Power Sessions",
      description: "Hands-on sessions designed to equip teams with future-ready skills and spark collaborative problem-solving."
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
            className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
