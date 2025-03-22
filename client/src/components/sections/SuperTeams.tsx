import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SuperTeams = () => {
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
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="card-hover h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Superpowers for Small Teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">We help small teams and startups integrate AI, streamline workflows, and <span className="font-semibold">work better, not harder</span>.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">AI for Small Teams</h4>
                      <p>We act as your AI champion, working alongside your team to implement AI solutions that enhance efficiency, optimize workflows, and connect strategy with execution—without losing the human touch.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">One-Week MVP Sprints</h4>
                      <p>Using AI-powered tools, we take your idea from concept to a fully functional MVP or POC in just one week. This rapid execution allows you to test real products in real-world conditions, reducing risk and accelerating learning.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="card-hover h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">Power Sessions and Future Thinking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">Hands-on sessions designed to <span className="font-semibold">equip teams with future-ready skills</span> and spark <span className="font-semibold">collaborative problem-solving</span>.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">AI Foundations for Leaders</h4>
                      <p>Understand AI's impact and turn it into business value.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">AI Workforce Readiness Workshops</h4>
                      <p>Practical sessions to equip teams with key AI skills, streamline workflows, and prepare for future challenges through scenario-based exercises.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Strategic & Future-Thinking Sessions</h4>
                      <p>Led by our network of expert facilitators, we guide teams through high-impact discussions, scenario planning, and decision-making frameworks to anticipate change and align strategies with the future.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperTeams;
