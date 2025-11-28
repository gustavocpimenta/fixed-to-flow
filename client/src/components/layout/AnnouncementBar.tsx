
import { useState, useEffect } from 'react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const halfHeroHeight = viewportHeight / 2;
      setIsVisible(window.scrollY < halfHeroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-[60] text-white py-3 px-4 transition-all duration-500 transform ${
      isVisible 
        ? 'translate-y-0 opacity-100' 
        : 'translate-y-[-100%] opacity-0'
    }`} style={{ backgroundColor: '#202020' }}>
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base font-medium">
          <a 
            href="https://fixedtoflow.carrd.co/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Amplified by AI, Anchored in Humanity
          </a>
          {" | 7-day free email course."}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
