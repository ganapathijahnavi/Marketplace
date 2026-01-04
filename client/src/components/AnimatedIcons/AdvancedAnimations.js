import React from 'react';
import styled from 'styled-components';

// Advanced animated carbon cycle icon
const AnimatedCarbonCycle = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        @keyframes float-smooth {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes draw-circle {
          from { strokeDashoffset: 376; }
          to { strokeDashoffset: 0; }
        }
      `}</style>
    </defs>
    
    {/* Outer rotating circle */}
    <circle 
      cx="60" cy="60" r="55" 
      fill="none" 
      stroke="#2e7d32" 
      strokeWidth="2" 
      opacity="0.3"
      style={{ animation: 'rotate-slow 20s linear infinite' }}
      strokeDasharray="376"
    />
    
    {/* Inner pulsing circle */}
    <circle 
      cx="60" cy="60" r="45" 
      fill="none" 
      stroke="#4caf50" 
      strokeWidth="1.5" 
      opacity="0.5"
      style={{ animation: 'rotate-slow 15s linear infinite reverse' }}
    />
    
    {/* Center core */}
    <circle 
      cx="60" cy="60" r="25" 
      fill="#2e7d32" 
      opacity="0.8"
      style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
    />
    
    {/* Floating particles */}
    <g style={{ animation: 'float-smooth 4s ease-in-out infinite' }}>
      <circle cx="85" cy="35" r="5" fill="#4caf50" opacity="0.7" />
      <circle cx="85" cy="85" r="5" fill="#66bb6a" opacity="0.6" />
      <circle cx="35" cy="85" r="5" fill="#2e7d32" opacity="0.8" />
      <circle cx="35" cy="35" r="5" fill="#1b5e20" opacity="0.7" />
    </g>
    
    {/* Center text/symbol */}
    <text x="60" y="70" textAnchor="middle" fontSize="40" fill="white" fontWeight="bold">♻</text>
  </svg>
);

// Animated particles background
const AnimatedParticles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  span {
    position: absolute;
    display: block;
    animation: float 8s infinite ease-in-out;
  }
  
  span:nth-child(1) {
    width: 8px;
    height: 8px;
    background: rgba(46, 125, 50, 0.5);
    left: 10%;
    top: 20%;
    animation-delay: 0s;
  }
  
  span:nth-child(2) {
    width: 6px;
    height: 6px;
    background: rgba(76, 175, 80, 0.6);
    left: 20%;
    top: 60%;
    animation-delay: 1s;
  }
  
  span:nth-child(3) {
    width: 7px;
    height: 7px;
    background: rgba(46, 125, 50, 0.4);
    left: 80%;
    top: 30%;
    animation-delay: 2s;
  }
  
  span:nth-child(4) {
    width: 6px;
    height: 6px;
    background: rgba(76, 175, 80, 0.5);
    left: 90%;
    top: 70%;
    animation-delay: 1.5s;
  }
  
  span:nth-child(5) {
    width: 8px;
    height: 8px;
    background: rgba(27, 94, 32, 0.6);
    left: 30%;
    top: 10%;
    animation-delay: 2.5s;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) translateX(0px);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) translateX(100px);
      opacity: 0;
    }
  }
`;

// Animated wave background
const AnimatedWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(180deg, transparent 0%, rgba(46, 125, 50, 0.05) 100%);
  overflow: hidden;

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @keyframes wave {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

// Glowing text effect
const GlowingText = styled.span`
  position: relative;
  background: linear-gradient(120deg, #2e7d32, #4caf50, #2e7d32);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: glowShift 4s ease infinite;

  @keyframes glowShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

// Pulse button animation
const PulseButton = styled.button`
  animation: pulse-button 2s ease-in-out infinite;

  @keyframes pulse-button {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(46, 125, 50, 0.7);
    }
    50% {
      box-shadow: 0 0 0 10px rgba(46, 125, 50, 0);
    }
  }

  &:hover {
    animation: none;
  }
`;

// Floating icon container
const FloatingIconContainer = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  animation: float-icon 4s ease-in-out infinite;

  @keyframes float-icon {
    0%, 100% {
      transform: translateY(-50%) translateX(0px);
    }
    50% {
      transform: translateY(-60%) translateX(20px);
    }
  }

  @media (max-width: 768px) {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    margin-top: 30px;
    margin-bottom: -50px;
  }
`;

export {
  AnimatedCarbonCycle,
  AnimatedParticles,
  AnimatedWave,
  GlowingText,
  PulseButton,
  FloatingIconContainer
};
