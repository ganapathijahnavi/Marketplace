import React from 'react';
import styled from 'styled-components';

// Gorgeous Animated Globe with continents and rotation
const AnimatedGlobe = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        @keyframes globe-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes globe-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes orbit-movement {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(8px, -8px); }
          50% { transform: translate(0, 12px); }
          75% { transform: translate(-8px, -8px); }
        }
        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(46, 125, 50, 0.4)); }
          50% { filter: drop-shadow(0 0 15px rgba(76, 175, 80, 0.8)); }
        }
      `}</style>
    </defs>
    
    {/* Outer glow */}
    <circle 
      cx="60" cy="60" r="58" 
      fill="none" 
      stroke="#4caf50" 
      strokeWidth="1" 
      opacity="0.3"
      style={{ animation: 'globe-pulse 3s ease-in-out infinite' }}
    />
    
    {/* Atmosphere glow */}
    <circle 
      cx="60" cy="60" r="55" 
      fill="none" 
      stroke="#2e7d32" 
      strokeWidth="0.5" 
      opacity="0.5"
    />
    
    {/* Main globe group rotating */}
    <g style={{ animation: 'globe-spin 12s linear infinite', transformOrigin: '60px 60px' }}>
      {/* Ocean/background */}
      <circle 
        cx="60" cy="60" r="50" 
        fill="#1e88e5" 
        opacity="0.6"
      />
      
      {/* Continents - simplified landmasses */}
      <path 
        d="M 45 40 Q 50 35 55 40 Q 52 45 45 45 Z" 
        fill="#2e7d32" 
        opacity="0.9"
      />
      <path 
        d="M 65 50 Q 72 48 75 55 Q 72 62 65 60 Z" 
        fill="#4caf50" 
        opacity="0.8"
      />
      <path 
        d="M 50 65 Q 55 68 60 70 Q 58 75 50 73 Z" 
        fill="#2e7d32" 
        opacity="0.85"
      />
      <path 
        d="M 70 70 Q 78 72 80 80 Q 75 85 70 82 Z" 
        fill="#66bb6a" 
        opacity="0.7"
      />
      
      {/* Cloud formations */}
      <ellipse cx="35" cy="50" rx="8" ry="5" fill="rgba(255,255,255,0.4)" />
      <ellipse cx="75" cy="45" rx="7" ry="4" fill="rgba(255,255,255,0.35)" />
    </g>
    
    {/* Orbital particles */}
    <g style={{ animation: 'orbit-movement 8s ease-in-out infinite' }}>
      <circle cx="75" cy="45" r="3" fill="#4caf50" opacity="0.8" />
      <circle cx="78" cy="60" r="2.5" fill="#2e7d32" opacity="0.7" />
      <circle cx="50" cy="75" r="2" fill="#66bb6a" opacity="0.6" />
    </g>
    
    {/* Center indicator dot */}
    <circle 
      cx="60" cy="60" r="4" 
      fill="#2e7d32"
      style={{ animation: 'globe-pulse 2s ease-in-out infinite' }}
    />
  </svg>
);

// Gorgeous Animated Verification Badge with checkmark and seal
const AnimatedVerification = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        @keyframes seal-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes seal-pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes checkmark-draw {
          0% { 
            strokeDashoffset: 100;
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% { 
            strokeDashoffset: 0;
            opacity: 1;
          }
        }
        @keyframes badge-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
        }
        @keyframes star-sparkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </defs>
    
    {/* Outer rotating seal ring */}
    <circle 
      cx="60" cy="60" r="55" 
      fill="none" 
      stroke="#2e7d32" 
      strokeWidth="2"
      style={{ animation: 'seal-spin 8s linear infinite' }}
      opacity="0.6"
    />
    
    {/* Inner rotating ring (reverse direction) */}
    <circle 
      cx="60" cy="60" r="50" 
      fill="none" 
      stroke="#4caf50" 
      strokeWidth="1.5"
      style={{ animation: 'seal-spin 6s linear infinite reverse' }}
      opacity="0.5"
    />
    
    {/* Main badge background */}
    <g style={{ animation: 'badge-float 3s ease-in-out infinite' }}>
      {/* Shield shape */}
      <path 
        d="M 60 20 L 80 35 L 80 65 Q 60 85 60 85 Q 40 85 40 65 L 40 35 Z" 
        fill="#2e7d32" 
        opacity="0.9"
      />
      
      {/* Shield highlight */}
      <path 
        d="M 60 20 L 80 35 L 80 65 Q 60 85 60 85 Q 40 85 40 65 L 40 35 Z" 
        fill="url(#shieldGradient)" 
        opacity="0.5"
      />
      
      {/* Checkmark */}
      <path 
        d="M 50 60 L 58 68 L 72 48" 
        stroke="white" 
        strokeWidth="3" 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="100"
        style={{ animation: 'checkmark-draw 1.5s ease-out forwards' }}
      />
    </g>
    
    {/* Sparkle stars around badge */}
    <g style={{ opacity: 0.8 }}>
      <circle cx="35" cy="45" r="2" fill="#4caf50" style={{ animation: 'star-sparkle 1.5s ease-in-out infinite' }} />
      <circle cx="85" cy="45" r="2" fill="#4caf50" style={{ animation: 'star-sparkle 1.5s ease-in-out infinite 0.3s' }} />
      <circle cx="60" cy="25" r="1.5" fill="#66bb6a" style={{ animation: 'star-sparkle 1.5s ease-in-out infinite 0.6s' }} />
      <circle cx="60" cy="95" r="1.5" fill="#66bb6a" style={{ animation: 'star-sparkle 1.5s ease-in-out infinite 0.9s' }} />
    </g>
    
    {/* Certification text arc (optional) */}
    <text x="60" y="110" textAnchor="middle" fontSize="10" fill="#2e7d32" opacity="0.7" fontWeight="bold">
      VERIFIED
    </text>
    
    <defs>
      <linearGradient id="shieldGradient" x1="40" y1="20" x2="80" y2="85">
        <stop offset="0%" stopColor="white" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
  </svg>
);

// Gorgeous Animated Data Tracker with rising bars
const AnimatedDataTracker = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        @keyframes bar-rise {
          0% { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
        @keyframes bar-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes glow-effect {
          0%, 100% { filter: drop-shadow(0 0 3px rgba(46, 125, 50, 0.3)); }
          50% { filter: drop-shadow(0 0 10px rgba(76, 175, 80, 0.7)); }
        }
        @keyframes grid-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </defs>
    
    {/* Background circle */}
    <circle cx="60" cy="60" r="55" fill="#f0f5f0" opacity="0.5" />
    
    {/* Grid background */}
    <g opacity="0.2">
      <line x1="30" y1="90" x2="90" y2="90" stroke="#2e7d32" strokeWidth="0.5" />
      <line x1="30" y1="75" x2="90" y2="75" stroke="#2e7d32" strokeWidth="0.5" />
      <line x1="30" y1="60" x2="90" y2="60" stroke="#2e7d32" strokeWidth="0.5" />
      <line x1="30" y1="45" x2="90" y2="45" stroke="#2e7d32" strokeWidth="0.5" />
    </g>
    
    {/* Rising bars */}
    {/* Bar 1 */}
    <g style={{ animation: 'glow-effect 3s ease-in-out infinite' }}>
      <rect 
        x="35" y="55" width="10" height="35" 
        fill="#2e7d32" 
        rx="2"
        style={{ animation: 'bar-rise 1.5s ease-out forwards' }}
      />
      <rect 
        x="35" y="55" width="10" height="35" 
        fill="#4caf50" 
        rx="2"
        opacity="0.4"
        style={{ animation: 'bar-pulse 2s ease-in-out infinite' }}
      />
    </g>
    
    {/* Bar 2 */}
    <g style={{ animation: 'glow-effect 3s ease-in-out infinite 0.3s' }}>
      <rect 
        x="50" y="35" width="10" height="55" 
        fill="#4caf50" 
        rx="2"
        style={{ animation: 'bar-rise 1.5s ease-out 0.3s forwards' }}
      />
      <rect 
        x="50" y="35" width="10" height="55" 
        fill="#66bb6a" 
        rx="2"
        opacity="0.4"
        style={{ animation: 'bar-pulse 2s ease-in-out 0.3s infinite' }}
      />
    </g>
    
    {/* Bar 3 */}
    <g style={{ animation: 'glow-effect 3s ease-in-out infinite 0.6s' }}>
      <rect 
        x="65" y="45" width="10" height="45" 
        fill="#2e7d32" 
        rx="2"
        style={{ animation: 'bar-rise 1.5s ease-out 0.6s forwards' }}
      />
      <rect 
        x="65" y="45" width="10" height="45" 
        fill="#4caf50" 
        rx="2"
        opacity="0.4"
        style={{ animation: 'bar-pulse 2s ease-in-out 0.6s infinite' }}
      />
    </g>
    
    {/* Top indicator line */}
    <line x1="30" y1="30" x2="80" y2="30" stroke="#2e7d32" strokeWidth="1" opacity="0.5" />
    <circle cx="80" cy="30" r="2.5" fill="#2e7d32" />
  </svg>
);

export {
  AnimatedGlobe,
  AnimatedVerification,
  AnimatedDataTracker
};
