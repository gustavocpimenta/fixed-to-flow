import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
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

const Header = ({ onNavigate }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Button 
            variant="ghost" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-0 hover:bg-transparent"
          >
            <Logo color={isScrolled ? "#FF3E01" : "#FF3E01"} height={40} />
          </Button>

          <div className="hidden md:block">
            <nav className="flex space-x-8">
              <Button 
                variant="ghost" 
                onClick={() => onNavigate.whatWeDo()}
                className={`font-medium ${isScrolled ? 'text-dark hover:text-primary' : 'text-primary hover:text-primary-foreground'}`}
              >
                What We Do
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => onNavigate.superTeams()}
                className={`font-medium ${isScrolled ? 'text-dark hover:text-primary' : 'text-primary hover:text-primary-foreground'}`}
              >
                Super Teams
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => onNavigate.leaders()}
                className={`font-medium ${isScrolled ? 'text-dark hover:text-primary' : 'text-primary hover:text-primary-foreground'}`}
              >
                Leaders
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => onNavigate.whyUs()}
                className={`font-medium ${isScrolled ? 'text-dark hover:text-primary' : 'text-primary hover:text-primary-foreground'}`}
              >
                Why Us
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => onNavigate.nonProfit()}
                className={`font-medium ${isScrolled ? 'text-dark hover:text-primary' : 'text-primary hover:text-primary-foreground'}`}
              >
                Initiatives
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => onNavigate.contact()}
                className={`font-medium ${isScrolled ? 'text-dark hover:text-primary' : 'text-primary hover:text-primary-foreground'}`}
              >
                Contact
              </Button>
            </nav>
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              onClick={toggleMenu}
              className={`p-2 rounded-md ${isScrolled ? 'text-dark hover:bg-light hover:text-primary' : 'text-primary hover:bg-white/10 hover:text-white'}`}
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
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Button 
              variant="ghost" 
              onClick={() => handleNavClick(onNavigate.whatWeDo)}
              className="block w-full text-left py-2 text-dark hover:text-primary font-medium"
            >
              What We Do
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => handleNavClick(onNavigate.superTeams)}
              className="block w-full text-left py-2 text-dark hover:text-primary font-medium"
            >
              Super Teams
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => handleNavClick(onNavigate.leaders)}
              className="block w-full text-left py-2 text-dark hover:text-primary font-medium"
            >
              Leaders
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => handleNavClick(onNavigate.whyUs)}
              className="block w-full text-left py-2 text-dark hover:text-primary font-medium"
            >
              Why Us
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => handleNavClick(onNavigate.nonProfit)}
              className="block w-full text-left py-2 text-dark hover:text-primary font-medium"
            >
              Initiatives
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => handleNavClick(onNavigate.contact)}
              className="block w-full text-left py-2 text-dark hover:text-primary font-medium"
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
