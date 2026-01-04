import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 30px;
  }
`;

// Animated Tree Growing Icon
const AnimatedTree = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        @keyframes tree-grow {
          0% { transform: scaleY(0); opacity: 0; }
          100% { transform: scaleY(1); opacity: 1; }
        }
        @keyframes leaves-sway {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(3deg); }
          75% { transform: rotate(-3deg); }
        }
        @keyframes leaf-pop {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </defs>
    
    {/* Trunk */}
    <rect 
      x="45" y="40" width="10" height="35" 
      fill="#6d4c41" 
      rx="2"
      style={{ 
        transformOrigin: 'bottom',
        animation: 'tree-grow 1.5s ease-out forwards'
      }}
    />
    
    {/* Leaves/Crown */}
    <g style={{ 
      transformOrigin: '50px 40px',
      animation: 'leaves-sway 4s ease-in-out infinite'
    }}>
      {/* Bottom layer */}
      <circle cx="50" cy="40" r="18" fill="#2e7d32" style={{ animation: 'leaf-pop 0.8s ease-out 0.5s both' }} />
      {/* Middle layer */}
      <circle cx="50" cy="32" r="15" fill="#4caf50" style={{ animation: 'leaf-pop 0.8s ease-out 0.8s both' }} />
      {/* Top layer */}
      <circle cx="50" cy="25" r="12" fill="#66bb6a" style={{ animation: 'leaf-pop 0.8s ease-out 1.1s both' }} />
    </g>
    
    {/* Small leaves falling */}
    <circle cx="30" cy="50" r="2" fill="#4caf50" opacity="0.6" style={{ animation: 'leaf-pop 1s ease-out 1.5s both' }} />
    <circle cx="70" cy="45" r="2" fill="#66bb6a" opacity="0.5" style={{ animation: 'leaf-pop 1s ease-out 1.7s both' }} />
  </svg>
);

// Animated Wind Turbine
const AnimatedTurbine = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        @keyframes turbine-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes tower-build {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </defs>
    
    {/* Tower */}
    <rect 
      x="48" y="45" width="4" height="35" 
      fill="#78909c" 
      style={{ 
        transformOrigin: 'bottom',
        animation: 'tower-build 1s ease-out forwards'
      }}
    />
    
    {/* Turbine center */}
    <circle cx="50" cy="43" r="4" fill="#546e7a" />
    
    {/* Spinning blades */}
    <g style={{ 
      transformOrigin: '50px 43px',
      animation: 'turbine-spin 3s linear infinite'
    }}>
      {/* Blade 1 */}
      <ellipse cx="50" cy="25" rx="3" ry="18" fill="#eceff1" />
      {/* Blade 2 */}
      <ellipse cx="65" cy="52" rx="18" ry="3" fill="#cfd8dc" transform="rotate(120 50 43)" />
      {/* Blade 3 */}
      <ellipse cx="35" cy="52" rx="18" ry="3" fill="#b0bec5" transform="rotate(-120 50 43)" />
    </g>
    
    {/* Energy glow */}
    <circle 
      cx="50" cy="43" r="20" 
      fill="none" 
      stroke="#4caf50" 
      strokeWidth="1" 
      opacity="0.3"
      style={{ animation: 'glow-pulse 2s ease-in-out infinite' }}
    />
  </svg>
);

// Animated Recycling Symbol
const AnimatedRecycle = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        @keyframes recycle-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes arrow-draw {
          0% { strokeDashoffset: 100; }
          100% { strokeDashoffset: 0; }
        }
        @keyframes center-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </defs>
    
    {/* Rotating container */}
    <g style={{ 
      transformOrigin: '50px 50px',
      animation: 'recycle-rotate 8s linear infinite'
    }}>
      {/* Arrow 1 (top) */}
      <path 
        d="M 50 25 L 50 40 M 50 40 L 45 35 M 50 40 L 55 35"
        stroke="#2e7d32" 
        strokeWidth="3" 
        strokeLinecap="round"
        fill="none"
      />
      <path 
        d="M 50 25 Q 35 30 35 45"
        stroke="#2e7d32" 
        strokeWidth="3" 
        fill="none"
        strokeDasharray="100"
        style={{ animation: 'arrow-draw 2s ease-out forwards' }}
      />
      
      {/* Arrow 2 (bottom right) */}
      <path 
        d="M 65 60 L 60 70 M 60 70 L 65 68 M 60 70 L 58 65"
        stroke="#4caf50" 
        strokeWidth="3" 
        strokeLinecap="round"
        fill="none"
      />
      <path 
        d="M 65 45 Q 70 55 65 60"
        stroke="#4caf50" 
        strokeWidth="3" 
        fill="none"
        strokeDasharray="100"
        style={{ animation: 'arrow-draw 2s ease-out 0.5s forwards' }}
      />
      
      {/* Arrow 3 (bottom left) */}
      <path 
        d="M 35 60 L 40 70 M 40 70 L 42 65 M 40 70 L 35 68"
        stroke="#66bb6a" 
        strokeWidth="3" 
        strokeLinecap="round"
        fill="none"
      />
      <path 
        d="M 35 45 Q 30 55 35 60"
        stroke="#66bb6a" 
        strokeWidth="3" 
        fill="none"
        strokeDasharray="100"
        style={{ animation: 'arrow-draw 2s ease-out 1s forwards' }}
      />
    </g>
    
    {/* Center circle */}
    <circle 
      cx="50" cy="50" r="8" 
      fill="#2e7d32"
      style={{ animation: 'center-pulse 2s ease-in-out infinite' }}
    />
  </svg>
);

const AboutDecorations = () => {
  return (
    <IconContainer>
      <AnimatedTree />
      <AnimatedTurbine />
      <AnimatedRecycle />
    </IconContainer>
  );
};

export default AboutDecorations;
