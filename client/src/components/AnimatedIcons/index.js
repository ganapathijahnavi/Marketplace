import React from 'react';
import styled from 'styled-components';

// Simple SVG-based animations without external dependencies
const AnimatedCheckmark = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" stroke="#2e7d32" strokeWidth="2" />
    <path
      d="M15 30L25 40L45 20"
      stroke="#2e7d32"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        animation: 'drawCheck 0.6s ease-in-out forwards',
        strokeDasharray: '50',
        strokeDashoffset: '50'
      }}
    />
    <style>{`
      @keyframes drawCheck {
        to {
          strokeDashoffset: 0;
        }
      }
    `}</style>
  </svg>
);

const AnimatedLeaf = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g style={{ animation: 'float 3s ease-in-out infinite' }}>
      <path
        d="M25 5C25 5 15 15 15 25C15 32.7 19.8 39 25 39C30.2 39 35 32.7 35 25C35 15 25 5 25 5Z"
        fill="#2e7d32"
        fillOpacity="0.8"
      />
      <path
        d="M25 10C25 10 18 18 18 25C18 31 21.5 36 25 36C28.5 36 32 31 32 25C32 18 25 10 25 10Z"
        fill="#4caf50"
      />
    </g>
    <style>{`
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
    `}</style>
  </svg>
);

const AnimatedEarth = () => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" fill="#e3f2fd" stroke="#2e7d32" strokeWidth="2" />
    <g style={{ animation: 'spin 8s linear infinite' }}>
      <circle cx="30" cy="15" r="3" fill="#2e7d32" />
      <circle cx="42" cy="30" r="3" fill="#2e7d32" />
      <circle cx="30" cy="45" r="3" fill="#2e7d32" />
      <circle cx="18" cy="30" r="3" fill="#2e7d32" />
    </g>
    <circle cx="30" cy="30" r="28" fill="none" stroke="#2e7d32" strokeWidth="2" strokeDasharray="5 5" />
    <style>{`
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </svg>
);

export { AnimatedCheckmark, AnimatedLeaf, AnimatedEarth };

