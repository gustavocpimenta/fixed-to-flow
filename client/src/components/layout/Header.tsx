import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import fixedToFlowLogo from "@/assets/Horizontal 02.png";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling 100px
      const scrollThreshold = 100;
      setIsVisible(window.scrollY >= scrollThreshold);
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
      isVisible
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 translate-y-0 opacity-100'
        : 'bg-white py-5 -translate-y-full opacity-0 pointer-events-none'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 focus:outline-none"
            aria-label="Go to top"
          >
            <div className="w-48 h-10 relative overflow-hidden">
              <img
                src={fixedToFlowLogo}
                alt="Fixed to Flow logo"
                className="w-full h-full object-contain"
              />
            </div>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-1">
              {[
                { label: "What We Do", handler: onNavigate.whatWeDo },
                { label: "Why Us", handler: onNavigate.whyUs },
                { label: "Contact", handler: onNavigate.contact }
              ].map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  onClick={() => handleNavClick(item.handler)}
                  className="px-4 py-2 text-gray-700 hover:text-primary transition-colors text-lg hover:bg-transparent"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100/10"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`block w-full h-0.5 transition-all transform bg-gray-700 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block w-full h-0.5 transition-all bg-gray-700 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-full h-0.5 transition-all transform bg-gray-700 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg overflow-hidden transition-all duration-300">
          <div className="container mx-auto px-4 pt-2 pb-4">
            {[
              { label: "What We Do", handler: onNavigate.whatWeDo },
              { label: "Why Us", handler: onNavigate.whyUs },
              { label: "Contact", handler: onNavigate.contact }
            ].map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                onClick={() => handleNavClick(item.handler)}
                className="block w-full text-left my-2 px-4 py-3 text-gray-700 hover:text-primary rounded-lg font-medium transition-colors text-lg hover:bg-transparent"
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