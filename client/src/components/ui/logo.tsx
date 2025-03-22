import React from 'react';

interface LogoProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  darkMode?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  width = "auto", 
  height = "40",
  darkMode = false
}) => {
  return (
    <img 
      src="/assets/Vertical 01.png"
      alt="Fixed to Flow Logo"
      width={width}
      height={height}
      className={`${className} ${darkMode ? 'brightness-0 invert' : ''}`}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default Logo;
