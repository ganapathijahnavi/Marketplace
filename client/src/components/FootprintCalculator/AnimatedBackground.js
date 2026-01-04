import React from 'react';
import styled, { keyframes } from 'styled-components';

// Smooth floating animation
const smoothFloat = keyframes`
  0%, 100% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-25px) translateX(15px) scale(1.08);
    opacity: 1;
  }
`;

// Gentle wave
const gentleWave = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
  }
`;

// Pulse animation
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.7;
  }
`;

// Rotate slowly
const rotateGently = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AnimatedBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
`;

// Gradient orb backgrounds
const GradientOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.gradient};
  width: ${props => props.size};
  height: ${props => props.size};
  top: ${props => props.top};
  left: ${props => props.left};
  animation: ${pulse} ${props => props.duration} ease-in-out infinite;
  animation-delay: ${props => props.delay};
  filter: blur(60px);
`;

// SVG-based leaf
const FloatingLeaf = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: 50px;
  height: 50px;
  animation: ${smoothFloat} ${props => props.duration} ease-in-out infinite;
  animation-delay: ${props => props.delay};
  opacity: 0.6;

  svg {
    width: 100%;
    height: 100%;
    fill: #4caf50;
  }
`;

// Minimalist circle
const MinimalCircle = styled.div`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  border: 2px solid rgba(76, 175, 80, 0.2);
  border-radius: 50%;
  top: ${props => props.top};
  left: ${props => props.left};
  animation: ${gentleWave} ${props => props.duration} ease-in-out infinite;
  animation-delay: ${props => props.delay};
`;

// Rotating ring
const RotatingRing = styled.div`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  border: 3px dashed rgba(46, 125, 50, 0.15);
  border-radius: 50%;
  top: ${props => props.top};
  left: ${props => props.left};
  animation: ${rotateGently} ${props => props.duration} linear infinite;
`;

// Abstract shape
const AbstractShape = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: ${props => props.top};
  left: ${props => props.left};
  animation: ${smoothFloat} ${props => props.duration} ease-in-out infinite;
  animation-delay: ${props => props.delay};
  opacity: 0.15;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #4caf50 0%, #2e7d32 100%);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation: ${rotateGently} 20s linear infinite;
  }
`;

const LeafSVG = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
  </svg>
);

const FootprintAnimatedBg = () => {
  return (
    <AnimatedBackground>
      {/* Large gradient orbs for depth */}
      <GradientOrb 
        size="500px"
        top="-10%"
        left="60%"
        duration="12s"
        delay="0s"
        gradient="radial-gradient(circle, rgba(76, 175, 80, 0.15) 0%, transparent 70%)"
      />
      <GradientOrb 
        size="450px"
        top="50%"
        left="-15%"
        duration="14s"
        delay="3s"
        gradient="radial-gradient(circle, rgba(46, 125, 50, 0.12) 0%, transparent 70%)"
      />
      <GradientOrb 
        size="400px"
        top="70%"
        left="75%"
        duration="16s"
        delay="6s"
        gradient="radial-gradient(circle, rgba(102, 187, 106, 0.1) 0%, transparent 70%)"
      />

      {/* Floating leaves */}
      <FloatingLeaf top="15%" left="10%" duration="8s" delay="0s">
        <LeafSVG />
      </FloatingLeaf>
      <FloatingLeaf top="25%" left="80%" duration="10s" delay="2s">
        <LeafSVG />
      </FloatingLeaf>
      <FloatingLeaf top="60%" left="20%" duration="9s" delay="4s">
        <LeafSVG />
      </FloatingLeaf>
      <FloatingLeaf top="70%" left="85%" duration="11s" delay="1s">
        <LeafSVG />
      </FloatingLeaf>
      <FloatingLeaf top="40%" left="50%" duration="12s" delay="3s">
        <LeafSVG />
      </FloatingLeaf>

      {/* Minimal circles */}
      <MinimalCircle size="150px" top="10%" left="70%" duration="7s" delay="0s" />
      <MinimalCircle size="120px" top="55%" left="15%" duration="9s" delay="2s" />
      <MinimalCircle size="100px" top="80%" left="65%" duration="8s" delay="4s" />

      {/* Rotating rings */}
      <RotatingRing size="200px" top="20%" left="25%" duration="25s" />
      <RotatingRing size="180px" top="65%" left="70%" duration="30s" />

      {/* Abstract organic shapes */}
      <AbstractShape top="30%" left="85%" duration="13s" delay="1s" />
      <AbstractShape top="75%" left="30%" duration="15s" delay="3s" />
    </AnimatedBackground>
  );
};

export default FootprintAnimatedBg;
