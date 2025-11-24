import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Lightbulb, Users } from "lucide-react";

const ServicesTab = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI strategy and adoption",
      description: "We help your organization build AI muscle: clear direction, real use cases, and the skills and guardrails to use AI responsibly and at scale."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "AI for leaders and change makers",
      description: "Small group programs where leaders use AI in real work, run guided experiments, and upgrade how they think and decide."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Mentoring",
      description: "One-to-one sparring for leaders and founders who want clarity, better decisions, and a trusted partner in times of change."
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
    <section className="pt-6 pb-20 text-white" style={{ margin: 0, border: 0, padding: "24px 0 80px 0" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
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

export default ServicesTab;