import React from 'react';
import logoImage from '../../assets/Vertical 01.png';

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
      src={logoImage}
      alt="Fixed to Flow Logo"
      width={width}
      height={height}
      className={`${className} ${darkMode ? 'brightness-0 invert' : ''}`}
      style={{ objectFit: 'contain', maxWidth: '200px' }}
    />
  );
};

export default Logo;
