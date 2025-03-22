import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onNavigate: {
    whatWeDo: () => void;
    superTeams: () => void;
    leaders: () => void;
    whyUs: () => void;
    nonProfit: () => void;
    contact: () => void;
  };
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="fixed top-0 right-0 p-4 z-50">
      <img 
        src="/fixed-to-flow-logo.png" 
        alt="Fixed to Flow Logo" 
        className="h-12 w-auto"
      />
    </header>
  );
};

export default Header;

const Header = ({ onNavigate }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (handler: () => void) => {
    handler();
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 focus:outline-none group"
            aria-label="Go to top"
          >
            <div className="relative w-8 h-8 overflow-hidden">
              <span className="absolute inset-0 bg-primary rounded-sm transform -rotate-45 group-hover:scale-110 transition-transform duration-300"></span>
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">F</span>
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-primary' : 'text-white'} tracking-tight transition-colors duration-300`}>
              Fixed to Flow
            </span>
          </button>

          <div className="hidden md:block">
            <nav className="flex space-x-1">
              {[
                { label: "What We Do", handler: onNavigate.whatWeDo },
                { label: "Super Teams", handler: onNavigate.superTeams },
                { label: "Leaders", handler: onNavigate.leaders },
                { label: "Why Us", handler: onNavigate.whyUs },
                { label: "Initiatives", handler: onNavigate.nonProfit },
                { label: "Contact", handler: onNavigate.contact }
              ].map((item, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  onClick={item.handler}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary hover:bg-gray-100' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              onClick={toggleMenu}
              className={`p-2 rounded-full ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg overflow-hidden transition-all duration-300">
          <div className="container mx-auto px-4 pt-2 pb-4">
            {[
              { label: "What We Do", handler: onNavigate.whatWeDo },
              { label: "Super Teams", handler: onNavigate.superTeams },
              { label: "Leaders", handler: onNavigate.leaders },
              { label: "Why Us", handler: onNavigate.whyUs },
              { label: "Initiatives", handler: onNavigate.nonProfit },
              { label: "Contact", handler: onNavigate.contact }
            ].map((item, index) => (
              <Button 
                key={index}
                variant="ghost" 
                onClick={() => handleNavClick(item.handler)}
                className="block w-full text-left my-2 px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
