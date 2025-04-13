import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import springWithBackground from "@/assets/spring_with_background.png";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-12 md:py-0">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 bottom-0 w-96 h-[67.2px] bg-primary/30 rounded-full filter blur-3xl -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute left-0 top-0 w-96 h-[67.2px] bg-primary/20 rounded-full filter blur-3xl -translate-x-1/2"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-4 md:gap-8 lg:gap-16 lg:flex-row lg:items-start">
            {/* Text content */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-[1.1]">
                <span className="text-primary block mb-2">Fixed to Flow</span>
                <span>Embrace change with confidence.</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-10 max-w-2xl mx-auto lg:mx-0">
                We empower people and businesses to amplify their adaptability to change.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="px-5 sm:px-8 py-5 sm:py-6 bg-primary hover:bg-primary/90 text-white text-sm sm:text-base font-medium rounded-full transition-all duration-300 shadow-lg shadow-primary/20 group"
                  onClick={() => {
                    const whatWeDoSection = document.getElementById('what-we-do');
                    if (whatWeDoSection) {
                      whatWeDoSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Discover How</span>
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-5 sm:px-8 py-5 sm:py-6 text-primary hover:bg-primary/5 text-sm sm:text-base border-primary/30 hover:border-primary/60 font-medium rounded-full transition-all duration-300"
                  onClick={onGetStarted}
                >
                  Get in Touch
                </Button>
              </div>
            </motion.div>

            {/* Visual element - Now visible on mobile too */}
            <motion.div 
              className="flex-1 relative mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-lg mx-auto">
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src={springWithBackground} 
                    alt="Fixed to Flow Spring" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;