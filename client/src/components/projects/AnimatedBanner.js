import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-image: url('https://i0.wp.com/netzeroindia.org/wp-content/uploads/2025/04/carbon-credit.jpg');
  background-size: cover;
  background-position: center;
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(27, 94, 32, 0.15) 0%, rgba(46, 125, 50, 0.1) 50%, rgba(76, 175, 80, 0.05) 100%);
  z-index: 1;
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 80px;
  
  @media (max-width: 768px) {
    justify-content: center;
    padding: 40px;
  }
`;

const TextSection = styled.div`
  max-width: 600px;
  color: white;
`;

const BannerTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BannerSubtitle = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  opacity: 0.95;
  margin-bottom: 30px;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StatBox = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
  margin-top: 5px;
`;

// Floating particles background
const ParticlesBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
  
  span {
    position: absolute;
    display: block;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    animation: float-particles 15s infinite ease-in-out;
  }
  
  span:nth-child(1) {
    width: 60px;
    height: 60px;
    left: 10%;
    top: 20%;
    animation-delay: 0s;
  }
  
  span:nth-child(2) {
    width: 45px;
    height: 45px;
    left: 70%;
    top: 60%;
    animation-delay: 2s;
  }
  
  span:nth-child(3) {
    width: 75px;
    height: 75px;
    left: 50%;
    top: 10%;
    animation-delay: 4s;
  }
  
  span:nth-child(4) {
    width: 50px;
    height: 50px;
    left: 80%;
    top: 30%;
    animation-delay: 1s;
  }
  
  span:nth-child(5) {
    width: 40px;
    height: 40px;
    left: 20%;
    top: 70%;
    animation-delay: 3s;
  }
  
  @keyframes float-particles {
    0%, 100% {
      transform: translateY(0) translateX(0) scale(1);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100px) translateX(50px) scale(1.2);
      opacity: 0;
    }
  }
`;

const AnimationContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

// Animated shopping cart with credits
const AnimatedShoppingIcon = () => (
  <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        @keyframes cart-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes credit-float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.8; }
          50% { transform: translateY(-30px) scale(1.1); opacity: 1; }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes badge-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </defs>
    
    {/* Glowing background circle */}
    <circle 
      cx="175" cy="175" r="140" 
      fill="rgba(255, 255, 255, 0.1)"
      style={{ animation: 'glow-pulse 3s ease-in-out infinite' }}
    />
    
    {/* Rotating badge ring */}
    <circle 
      cx="175" cy="175" r="150" 
      fill="none" 
      stroke="rgba(255, 255, 255, 0.2)" 
      strokeWidth="2"
      strokeDasharray="10 5"
      style={{ animation: 'badge-spin 20s linear infinite' }}
    />
    
    {/* Floating credit cards */}
    <g style={{ animation: 'credit-float 4s ease-in-out infinite' }}>
      <rect x="80" y="100" width="80" height="50" rx="5" fill="rgba(255, 255, 255, 0.9)" />
      <rect x="85" y="110" width="30" height="5" rx="2" fill="#4caf50" />
      <rect x="85" y="120" width="50" height="4" rx="2" fill="#ddd" />
      <rect x="85" y="128" width="40" height="4" rx="2" fill="#ddd" />
    </g>
    
    <g style={{ animation: 'credit-float 4s ease-in-out infinite 1s' }}>
      <rect x="190" y="90" width="80" height="50" rx="5" fill="rgba(255, 255, 255, 0.85)" />
      <rect x="195" y="100" width="30" height="5" rx="2" fill="#2e7d32" />
      <rect x="195" y="110" width="50" height="4" rx="2" fill="#ddd" />
      <rect x="195" y="118" width="40" height="4" rx="2" fill="#ddd" />
    </g>
    
    {/* Shopping cart - main element */}
    <g style={{ animation: 'cart-bounce 3s ease-in-out infinite' }}>
      {/* Cart body */}
      <path 
        d="M 130 180 L 145 220 L 220 220 L 235 180 Z" 
        fill="white" 
        stroke="#2e7d32" 
        strokeWidth="3"
      />
      
      {/* Cart handle */}
      <path 
        d="M 120 180 L 130 180" 
        stroke="#2e7d32" 
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Cart grid pattern */}
      <line x1="150" y1="185" x2="147" y2="215" stroke="#4caf50" strokeWidth="2" />
      <line x1="165" y1="185" x2="162" y2="215" stroke="#4caf50" strokeWidth="2" />
      <line x1="180" y1="185" x2="177" y2="215" stroke="#4caf50" strokeWidth="2" />
      <line x1="195" y1="185" x2="192" y2="215" stroke="#4caf50" strokeWidth="2" />
      <line x1="210" y1="185" x2="207" y2="215" stroke="#4caf50" strokeWidth="2" />
      
      {/* Wheels */}
      <circle cx="160" cy="235" r="8" fill="#2e7d32" />
      <circle cx="205" cy="235" r="8" fill="#2e7d32" />
      <circle cx="160" cy="235" r="4" fill="white" />
      <circle cx="205" cy="235" r="4" fill="white" />
    </g>
    
    {/* Checkmark badge */}
    <circle cx="230" cy="200" r="25" fill="#4caf50" />
    <path 
      d="M 220 200 L 227 207 L 240 190" 
      stroke="white" 
      strokeWidth="4" 
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* CO2 reduction indicator */}
    <g style={{ animation: 'credit-float 3s ease-in-out infinite 0.5s' }}>
      <circle cx="130" cy="250" r="20" fill="rgba(255, 255, 255, 0.9)" />
      <text x="130" y="257" textAnchor="middle" fontSize="16" fill="#2e7d32" fontWeight="bold">-CO₂</text>
    </g>
  </svg>
);

const AnimatedBanner = () => {
  return (
    <BannerContainer>
      <BannerOverlay />
      
      <ParticlesBackground>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </ParticlesBackground>
      
      <BannerContent>
        <AnimationContainer>
          <AnimatedShoppingIcon />
        </AnimationContainer>
      </BannerContent>
    </BannerContainer>
  );
};

export default AnimatedBanner;
