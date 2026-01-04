import React from 'react';
import styled, { keyframes } from 'styled-components';

// Smooth wave animation
const wave = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
`;

// Gentle float animation
const gentleFloat = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-30px) scale(1.1);
    opacity: 0.9;
  }
`;

// Rotate animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Pulse glow
const pulseGlow = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
`;

// Gradient orbs
const GradientOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.gradient || 'radial-gradient(circle, rgba(76, 175, 80, 0.15) 0%, rgba(76, 175, 80, 0) 70%)'};
  width: ${props => props.size || '300px'};
  height: ${props => props.size || '300px'};
  top: ${props => props.top || '10%'};
  left: ${props => props.left || '10%'};
  animation: ${pulseGlow} ${props => props.duration || '8s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  filter: blur(40px);
`;

// Geometric shapes
const GeometricShape = styled.div`
  position: absolute;
  width: ${props => props.size || '80px'};
  height: ${props => props.size || '80px'};
  top: ${props => props.top || '20%'};
  left: ${props => props.left || '20%'};
  animation: ${wave} ${props => props.duration || '6s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0.15;
`;

const Circle = styled(GeometricShape)`
  border-radius: 50%;
  border: 3px solid #4caf50;
`;

const Square = styled(GeometricShape)`
  border: 3px solid #2e7d32;
  transform: rotate(45deg);
  animation: ${rotate} ${props => props.duration || '12s'} linear infinite;
`;

const Triangle = styled(GeometricShape)`
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 70px solid rgba(102, 187, 106, 0.2);
  animation: ${gentleFloat} ${props => props.duration || '7s'} ease-in-out infinite;
`;

// Dots pattern
const DotsGrid = styled.div`
  position: absolute;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  width: 200px;
  height: 200px;
  opacity: 0.1;
  animation: ${gentleFloat} 10s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  background: #2e7d32;
  border-radius: 50%;
  position: absolute;
`;

// Animated lines
const AnimatedLine = styled.div`
  position: absolute;
  width: ${props => props.width || '150px'};
  height: 2px;
  background: linear-gradient(90deg, transparent, #4caf50, transparent);
  top: ${props => props.top || '30%'};
  left: ${props => props.left || '10%'};
  opacity: 0.2;
  animation: ${wave} ${props => props.duration || '8s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

export const CartAnimatedBg = () => {
  return (
    <BackgroundContainer>
      {/* Gradient orbs */}
      <GradientOrb 
        size="400px" 
        top="5%" 
        left="-10%" 
        duration="10s"
        gradient="radial-gradient(circle, rgba(76, 175, 80, 0.12) 0%, rgba(46, 125, 50, 0) 70%)"
      />
      <GradientOrb 
        size="350px" 
        top="60%" 
        left="70%" 
        duration="12s"
        delay="2s"
        gradient="radial-gradient(circle, rgba(102, 187, 106, 0.1) 0%, rgba(76, 175, 80, 0) 70%)"
      />
      <GradientOrb 
        size="300px" 
        top="30%" 
        left="40%" 
        duration="14s"
        delay="4s"
        gradient="radial-gradient(circle, rgba(46, 125, 50, 0.08) 0%, rgba(27, 94, 32, 0) 70%)"
      />

      {/* Geometric shapes */}
      <Circle size="100px" top="15%" left="80%" duration="8s" />
      <Circle size="70px" top="70%" left="10%" duration="10s" delay="2s" />
      <Square size="90px" top="25%" left="15%" duration="15s" />
      <Square size="60px" top="80%" left="75%" duration="18s" delay="3s" />
      <Triangle top="50%" left="85%" duration="9s" delay="1s" />
      <Triangle top="10%" left="50%" duration="11s" delay="4s" />

      {/* Dots grids */}
      <DotsGrid top="20%" left="30%" delay="0s">
        {[...Array(25)].map((_, i) => (
          <Dot 
            key={i}
            style={{
              top: `${(Math.floor(i / 5) * 40)}px`,
              left: `${((i % 5) * 40)}px`
            }}
          />
        ))}
      </DotsGrid>
      <DotsGrid top="60%" left="60%" delay="3s">
        {[...Array(25)].map((_, i) => (
          <Dot 
            key={i}
            style={{
              top: `${(Math.floor(i / 5) * 40)}px`,
              left: `${((i % 5) * 40)}px`
            }}
          />
        ))}
      </DotsGrid>

      {/* Animated lines */}
      <AnimatedLine width="200px" top="25%" left="5%" duration="7s" />
      <AnimatedLine width="180px" top="55%" left="20%" duration="9s" delay="2s" />
      <AnimatedLine width="220px" top="75%" left="50%" duration="8s" delay="4s" />
    </BackgroundContainer>
  );
};

export const OrdersAnimatedBg = () => {
  return (
    <BackgroundContainer>
      {/* Different color scheme for orders */}
      <GradientOrb 
        size="450px" 
        top="10%" 
        left="60%" 
        duration="11s"
        gradient="radial-gradient(circle, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0) 70%)"
      />
      <GradientOrb 
        size="380px" 
        top="50%" 
        left="5%" 
        duration="13s"
        delay="3s"
        gradient="radial-gradient(circle, rgba(76, 175, 80, 0.12) 0%, rgba(76, 175, 80, 0) 70%)"
      />
      <GradientOrb 
        size="320px" 
        top="70%" 
        left="80%" 
        duration="15s"
        delay="1s"
        gradient="radial-gradient(circle, rgba(102, 187, 106, 0.08) 0%, rgba(102, 187, 106, 0) 70%)"
      />

      {/* Geometric shapes */}
      <Circle size="120px" top="20%" left="10%" duration="9s" />
      <Circle size="80px" top="65%" left="70%" duration="11s" delay="3s" />
      <Square size="100px" top="40%" left="85%" duration="16s" delay="1s" />
      <Square size="70px" top="75%" left="20%" duration="14s" delay="4s" />
      <Triangle top="15%" left="60%" duration="10s" delay="2s" />
      <Triangle top="85%" left="50%" duration="12s" />

      {/* Animated lines */}
      <AnimatedLine width="250px" top="30%" left="15%" duration="8s" delay="1s" />
      <AnimatedLine width="200px" top="60%" left="45%" duration="10s" delay="3s" />
      <AnimatedLine width="180px" top="85%" left="70%" duration="9s" delay="5s" />
    </BackgroundContainer>
  );
};

export const HistoryAnimatedBg = () => {
  return (
    <BackgroundContainer>
      {/* History page with warmer tones */}
      <GradientOrb 
        size="420px" 
        top="8%" 
        left="15%" 
        duration="12s"
        gradient="radial-gradient(circle, rgba(139, 195, 74, 0.1) 0%, rgba(139, 195, 74, 0) 70%)"
      />
      <GradientOrb 
        size="360px" 
        top="55%" 
        left="65%" 
        duration="14s"
        delay="2s"
        gradient="radial-gradient(circle, rgba(76, 175, 80, 0.11) 0%, rgba(76, 175, 80, 0) 70%)"
      />
      <GradientOrb 
        size="340px" 
        top="35%" 
        left="85%" 
        duration="16s"
        delay="4s"
        gradient="radial-gradient(circle, rgba(46, 125, 50, 0.09) 0%, rgba(46, 125, 50, 0) 70%)"
      />

      {/* Geometric shapes */}
      <Circle size="110px" top="12%" left="75%" duration="10s" delay="1s" />
      <Circle size="90px" top="68%" left="15%" duration="12s" delay="3s" />
      <Square size="95px" top="30%" left="25%" duration="17s" delay="2s" />
      <Square size="75px" top="82%" left="80%" duration="15s" />
      <Triangle top="45%" left="90%" duration="11s" delay="3s" />
      <Triangle top="8%" left="45%" duration="13s" delay="1s" />

      {/* Dots grids */}
      <DotsGrid top="25%" left="50%" delay="2s">
        {[...Array(25)].map((_, i) => (
          <Dot 
            key={i}
            style={{
              top: `${(Math.floor(i / 5) * 40)}px`,
              left: `${((i % 5) * 40)}px`
            }}
          />
        ))}
      </DotsGrid>

      {/* Animated lines */}
      <AnimatedLine width="230px" top="20%" left="10%" duration="9s" />
      <AnimatedLine width="210px" top="50%" left="35%" duration="11s" delay="2s" />
      <AnimatedLine width="190px" top="78%" left="55%" duration="10s" delay="4s" />
    </BackgroundContainer>
  );
};

// Login Page Animated Background
export const LoginAnimatedBg = () => {
  return (
    <BackgroundContainer>
      {/* Purple-green gradient theme for login */}
      <GradientOrb 
        size="480px" 
        top="5%" 
        left="70%" 
        duration="13s"
        gradient="radial-gradient(circle, rgba(102, 126, 234, 0.12) 0%, rgba(102, 126, 234, 0) 70%)"
      />
      <GradientOrb 
        size="420px" 
        top="60%" 
        left="10%" 
        duration="15s"
        delay="2s"
        gradient="radial-gradient(circle, rgba(46, 125, 50, 0.14) 0%, rgba(46, 125, 50, 0) 70%)"
      />
      <GradientOrb 
        size="380px" 
        top="40%" 
        left="50%" 
        duration="17s"
        delay="4s"
        gradient="radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, rgba(118, 75, 162, 0) 70%)"
      />

      {/* Geometric shapes */}
      <Circle size="130px" top="18%" left="15%" duration="11s" delay="1s" />
      <Circle size="95px" top="72%" left="80%" duration="13s" delay="3s" />
      <Square size="105px" top="35%" left="85%" duration="18s" delay="2s" />
      <Triangle top="65%" left="25%" duration="12s" delay="4s" />
      <Triangle top="10%" left="55%" duration="14s" />

      {/* Dots grids */}
      <DotsGrid top="22%" left="40%" delay="1.5s">
        {[...Array(25)].map((_, i) => (
          <Dot 
            key={i}
            style={{
              top: `${(Math.floor(i / 5) * 40)}px`,
              left: `${((i % 5) * 40)}px`
            }}
          />
        ))}
      </DotsGrid>

      {/* Animated lines */}
      <AnimatedLine width="240px" top="28%" left="12%" duration="10s" delay="0.5s" />
      <AnimatedLine width="220px" top="58%" left="60%" duration="12s" delay="2.5s" />
    </BackgroundContainer>
  );
};

// Registration Page Animated Background  
export const RegistrationAnimatedBg = () => {
  return (
    <BackgroundContainer>
      {/* Green-themed gradient for registration */}
      <GradientOrb 
        size="500px" 
        top="8%" 
        left="12%" 
        duration="14s"
        gradient="radial-gradient(circle, rgba(46, 125, 50, 0.15) 0%, rgba(46, 125, 50, 0) 70%)"
      />
      <GradientOrb 
        size="440px" 
        top="55%" 
        left="75%" 
        duration="16s"
        delay="3s"
        gradient="radial-gradient(circle, rgba(102, 187, 106, 0.13) 0%, rgba(102, 187, 106, 0) 70%)"
      />
      <GradientOrb 
        size="400px" 
        top="35%" 
        left="60%" 
        duration="18s"
        delay="1.5s"
        gradient="radial-gradient(circle, rgba(102, 126, 234, 0.11) 0%, rgba(102, 126, 234, 0) 70%)"
      />
      <GradientOrb 
        size="360px" 
        top="20%" 
        left="88%" 
        duration="20s"
        delay="4.5s"
        gradient="radial-gradient(circle, rgba(27, 94, 32, 0.09) 0%, rgba(27, 94, 32, 0) 70%)"
      />

      {/* Geometric shapes */}
      <Circle size="115px" top="15%" left="30%" duration="12s" delay="0.8s" />
      <Circle size="100px" top="70%" left="20%" duration="14s" delay="3.5s" />
      <Square size="110px" top="50%" left="85%" duration="19s" delay="2.2s" />
      <Square size="85px" top="80%" left="50%" duration="16s" delay="5s" />
      <Triangle top="25%" left="75%" duration="13s" delay="3.5s" />
      <Triangle top="60%" left="10%" duration="15s" delay="1s" />

      {/* Dots grids */}
      <DotsGrid top="18%" left="55%" delay="0.5s">
        {[...Array(25)].map((_, i) => (
          <Dot 
            key={i}
            style={{
              top: `${(Math.floor(i / 5) * 40)}px`,
              left: `${((i % 5) * 40)}px`
            }}
          />
        ))}
      </DotsGrid>
      <DotsGrid top="65%" left="40%" delay="3s">
        {[...Array(25)].map((_, i) => (
          <Dot 
            key={i}
            style={{
              top: `${(Math.floor(i / 5) * 40)}px`,
              left: `${((i % 5) * 40)}px`
            }}
          />
        ))}
      </DotsGrid>

      {/* Animated lines */}
      <AnimatedLine width="250px" top="32%" left="8%" duration="11s" delay="1s" />
      <AnimatedLine width="230px" top="62%" left="65%" duration="13s" delay="2.5s" />
      <AnimatedLine width="200px" top="85%" left="30%" duration="12s" delay="4.5s" />
    </BackgroundContainer>
  );
};

