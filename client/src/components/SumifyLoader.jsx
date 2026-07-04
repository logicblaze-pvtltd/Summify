import React from 'react';

const SumifyLoader = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <svg 
        className="h-28 w-auto opacity-95" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 250 310"
      >
        <defs>
          <linearGradient id="sumifyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#47AF8F" />
            <stop offset="100%" stopColor="#067357" />
          </linearGradient>
          
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#47AF8F" />
            <stop offset="100%" stopColor="#067357" />
          </linearGradient>
          
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#73D9B7" floodOpacity="0.12" />
          </filter>
          
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes cycleLayer1 {
              0%, 100% { transform: translate(10px, 10px); opacity: 0.2; }
              33% { transform: translate(42px, 40px); opacity: 1; }
              66% { transform: translate(26px, 25px); opacity: 0.4; }
            }

            @keyframes cycleLayer2 {
              0%, 100% { transform: translate(26px, 25px); opacity: 0.4; }
              33% { transform: translate(10px, 10px); opacity: 0.2; }
              66% { transform: translate(42px, 40px); opacity: 1; }
            }

            @keyframes cycleLayer3 {
              0%, 100% { transform: translate(42px, 40px); opacity: 1; }
              33% { transform: translate(26px, 25px); opacity: 0.4; }
              66% { transform: translate(10px, 10px); opacity: 0.2; }
            }

            @keyframes lineLoad {
              0%, 100% { stroke-dasharray: 0, 100; opacity: 0; }
              25%, 55% { stroke-dasharray: 100, 0; opacity: 0.9; }
              75% { stroke-dasharray: 0, 100; opacity: 0; }
            }

            .doc-layer-1 { animation: cycleLayer1 2.5s infinite ease-in-out; }
            .doc-layer-2 { animation: cycleLayer2 2.5s infinite ease-in-out; }
            .doc-layer-3 { animation: cycleLayer3 2.5s infinite ease-in-out; }

            .line-1 { animation: lineLoad 2.5s infinite ease-in-out; animation-delay: 0.1s; }
            .line-2 { animation: lineLoad 2.5s infinite ease-in-out; animation-delay: 0.2s; }
            .line-3 { animation: lineLoad 2.5s infinite ease-in-out; animation-delay: 0.3s; }
            
            .brand-text {
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              font-weight: 800;
              letter-spacing: -0.5px;
            }
            
            .brand-subtext {
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              font-weight: 600;
              letter-spacing: 3.5px;
            }
          `}} />
        </defs>

        {/* Centralized group for smooth scaling */}
        <g transform="translate(45, 20)" filter="url(#softShadow)">
          {/* Back Layer */}
          <rect className="doc-layer-1" x="0" y="0" width="100" height="140" rx="14" fill="#067357" />
          
          {/* Middle Layer */}
          <rect className="doc-layer-2" x="0" y="0" width="100" height="120" rx="12" fill="url(#sumifyGradient)" />
          
          {/* Front Layer with Lines */}
          <g className="doc-layer-3">
            <rect x="0" y="0" width="100" height="100" rx="10" fill="#73D9B7" />
            
            {/* Animated Text/Data Lines */}
            <line className="line-1" x1="20" y1="28" x2="70" y2="28" stroke="#F5F6FB" strokeWidth="5.5" strokeLinecap="round" />
            <line className="line-2" x1="20" y1="45" x2="60" y2="45" stroke="#F5F6FB" strokeWidth="5.5" strokeLinecap="round" />
            <line className="line-3" x1="20" y1="62" x2="45" y2="62" stroke="url(#sumifyGradient)" strokeWidth="6.5" strokeLinecap="round" />
          </g>
        </g>

        {/* Brand Text Elements */}
        <g textAnchor="middle">
          {/* Main Title: Sumify */}
          <text 
            x="125" 
            y="255" 
            className="brand-text" 
            fontSize="58" 
            fill="url(#textGradient)"
          >
            Summify
          </text>
          
          {/* Subtitle: PDF SUMMARIZER */}
          <text 
            x="127" 
            y="298" 
            className="brand-subtext" 
            fontSize="24" 
            fill="#067357" 
            opacity="0.85"
          >
            PDF SUMMARIZER
          </text>
        </g>
      </svg>
    </div>
  );
};

export default SumifyLoader;