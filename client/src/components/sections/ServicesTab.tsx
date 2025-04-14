import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Rocket, Clock, Sparkles, Compass, Bot, Layers, Swords } from "lucide-react";

const ServicesTab = () => {
  const [activeTab, setActiveTab] = useState("businesses");

  const businessServices = [
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

  const peopleServices = [
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Flow OS",
      description: "Your personal system for navigating change with clarity. Build adaptive habits, systems, and mindsets aligned with your rhythm and direction."
    },
    {
      icon: <Compass className="w-8 h-8 text-primary" />,
      title: "Flow Compass",
      description: "A self-discovery tool to map where you are, what's shifting, and where your energy wants to go next. Think of it as your inner GPS for meaningful change."
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "AI Mentoring",
      description: "Stop feeling lost with AI. We'll build a clear, personal strategy — combining foundational know-how with tools and use cases that fit your goals."
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
    <section className="pt-[45px] pb-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Removed "Our Services" heading as requested */}

          <Tabs defaultValue="businesses" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-700">
                <TabsTrigger 
                  value="businesses"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  onClick={() => setActiveTab("businesses")}
                >
                  Businesses
                </TabsTrigger>
                <TabsTrigger 
                  value="people"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  onClick={() => setActiveTab("people")}
                >
                  People
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="businesses" className="mt-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  For Super Teams and Bold Companies
                </h3>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto font-bold">
                  Accelerating your team ability to adapt, build, and lead with AI.
                </p>
              </div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-12 grid md:grid-cols-2 gap-6"
              >
                {businessServices.map((service, index) => (
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
            </TabsContent>
            
            <TabsContent value="people" className="mt-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  For Leaders and Change-Makers
                </h3>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto font-bold">
                  One-on-one mentoring to build clarity, decisive action, and experimental growth.
                </p>
              </div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-12 grid md:grid-cols-2 gap-6"
              >
                {peopleServices.map((service, index) => (
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ServicesTab;