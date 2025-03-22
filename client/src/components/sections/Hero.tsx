import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0C0C0C] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute left-0 top-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl -translate-x-1/2"></div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
            {/* Text content */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                <span className="text-primary block mb-2">Fixed to Flow</span>
                <span>Embrace change with confidence</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto lg:mx-0">
                We empower people and businesses to amplify their adaptability to change in a transformative space designed for purpose.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="px-8 py-6 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-primary/20 group"
                  onClick={onGetStarted}
                >
                  <span>Discover How</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-6 bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-white/30 font-medium rounded-full transition-all duration-300"
                  onClick={onGetStarted}
                >
                  Get in Touch
                </Button>
              </div>
            </motion.div>
            
            {/* Visual element */}
            <motion.div 
              className="hidden lg:block flex-1 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-primary rounded-2xl"></div>
                <div className="absolute inset-0 bg-[#0C0C0C] rounded-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="/assets/spring_new.png" 
                    alt="Fixed to Flow Spring" 
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-24 md:mt-32 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <p className="text-white/60 mt-6 font-medium">
              A transformative space designed to help people embrace change with confidence
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
