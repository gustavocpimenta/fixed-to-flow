import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { motion } from "framer-motion";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="pt-28 pb-16 md:py-32 gradient-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo height={80} darkMode={true} className="mx-auto mb-8" />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We empower people and businesses to amplify their adaptability to change.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 text-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A transformative space designed to help people embrace change with confidence and purpose.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold transition-colors shadow-lg"
              onClick={onGetStarted}
            >
              Discover How
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 bg-white hover:bg-accent text-dark font-semibold transition-colors shadow-lg"
              onClick={onGetStarted}
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="flow-divider mt-16"></div>
    </section>
  );
};

export default Hero;
