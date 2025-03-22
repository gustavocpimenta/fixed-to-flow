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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Initiatives</h2>
            <p className="text-lg text-center mb-12">At <span className="font-semibold text-primary">Fixed to Flow</span>, adaptability isn't just a skill—it's a shared journey. We reinvest in community-driven projects that foster learning, storytelling, and meaningful conversations.</p>
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
                  <p>A publication capturing real-life stories of transformation, resilience, and reinvention.</p>
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
                  <p>Intimate, thought-provoking gatherings where diverse minds discuss the future of work, adaptability, and the human side of change.</p>
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
                  <p>Curated insights, stories, and strategies for navigating change—straight to your inbox.</p>
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NonProfit;
