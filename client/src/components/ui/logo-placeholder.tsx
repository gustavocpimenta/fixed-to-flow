import React from 'react';

interface LogoProps {
  name: string;
  className?: string;
}

const LogoPlaceholder: React.FC<LogoProps> = ({ name, className = "h-12" }) => {
  // Map of company names to their SVG logo representations
  const logoMap: Record<string, React.ReactNode> = {
    'vodafone': (
      <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M50 15c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15z" fill="none" stroke="#666" strokeWidth="5"/>
        <text x="55" y="20" fontSize="12" fill="#666">vodafone</text>
      </svg>
    ),
    'universidade_lisboa': (
      <svg viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg" className={className}>
        <text x="5" y="30" fontSize="20" fontWeight="bold" fill="#000">U LISBOA</text>
        <text x="70" y="15" fontSize="8" fill="#000">UNIVERSIDADE</text>
        <text x="70" y="25" fontSize="8" fill="#000">DE LISBOA</text>
      </svg>
    ),
    'seguranca_social': (
      <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="50" cy="15" r="12" fill="#ddd" />
        <path d="M30 25 L50 15 L70 25" fill="none" stroke="#aaa" strokeWidth="4" />
        <text x="20" y="38" fontSize="8" textAnchor="middle" fill="#888">SEGURANÇA SOCIAL</text>
      </svg>
    ),
    'randstad': (
      <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M20 10 L30 10 L30 20" fill="none" stroke="#999" strokeWidth="2" />
        <path d="M40 10 L50 10 L50 20" fill="none" stroke="#999" strokeWidth="2" />
        <text x="55" y="18" fontSize="10" fill="#999">randstad</text>
      </svg>
    ),
    'seedrs': (
      <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="25" cy="15" r="10" fill="none" stroke="#666" strokeWidth="3"/>
        <text x="40" y="20" fontSize="14" fontWeight="bold" fill="#333">SEEDRS</text>
      </svg>
    ),
    'montepio': (
      <svg viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="20" y="15" width="15" height="15" fill="#eee" stroke="#aaa" />
        <text x="45" y="25" fontSize="12" fill="#333">Banco Montepio</text>
      </svg>
    ),
    'adeo': (
      <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M20 20 C25 10, 35 10, 40 15 C45 20, 55 20, 60 15" fill="none" stroke="#999" strokeWidth="2" />
        <line x1="20" y1="25" x2="60" y2="25" stroke="#999" strokeWidth="1" />
      </svg>
    ),
    'loreal': (
      <svg viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" className={className}>
        <text x="20" y="20" fontSize="16" fontWeight="bold" fontStyle="italic" fill="#000">L'ORÉAL</text>
      </svg>
    ),
    'cml': (
      <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M40 10 L60 10 L50 5 Z" fill="#333" />
        <path d="M35 15 L65 15 L50 30 Z" fill="#333" />
        <text x="50" y="38" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#000">LISBOA</text>
      </svg>
    ),
    'galp': (
      <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg" className={className}>
        <text x="20" y="22" fontSize="20" fontWeight="bold" fill="#999">galp</text>
      </svg>
    ),
    'claro': (
      <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg" className={className}>
        <text x="20" y="22" fontSize="16" fontWeight="bold" fontFamily="monospace" fill="#000">CLARO</text>
      </svg>
    ),
    'bp': (
      <svg viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="30" cy="20" r="10" fill="none" stroke="#999" strokeWidth="1" />
        <text x="50" y="15" fontSize="8" fill="#888">BANCO DE PORTUGAL</text>
        <path d="M25 15 L30 25 L35 15" fill="none" stroke="#999" strokeWidth="1" />
      </svg>
    ),
  };

  // Return the SVG if it exists, otherwise return a default placeholder
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {logoMap[name] || (
        <div className="bg-gray-200 rounded w-full h-full flex items-center justify-center text-gray-500 text-sm">
          {name}
        </div>
      )}
    </div>
  );
};

export default LogoPlaceholder;