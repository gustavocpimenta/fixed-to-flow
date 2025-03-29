import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NonProfit = () => {
  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Beyond Business</h2>
            <p className="text-lg text-center mb-12">Alongside our core services, we promote community-led initiatives—some open, others by invitation—that explore learning, storytelling, and the human side of change.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="card-hover h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">Reinvention Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Real-life stories of transformation, resilience, and reinvention.</p>
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
                  <CardTitle className="text-xl font-bold text-primary">Cozy Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Small dinners where diverse groups of people discuss discuss big topics.</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="card-hover h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">Fixed to Flow Newsletter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Thoughts and practices for living through change with intention.</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="card-hover h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">Personal Experiments Lab</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>A tool to design, test, and refine new habits through experimentation.</p>
                </CardContent>
              </Card>
            </motion.div>rue }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="card-hover h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">Personal Experiments Lab</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>A tool to design, test, and refine new habits through experimentation.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NonProfit;
