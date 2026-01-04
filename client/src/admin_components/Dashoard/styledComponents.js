import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const floatSlow = keyframes`
  0% { transform: translate3d(-10px, 0, 0) scale(1); }
  50% { transform: translate3d(25px, -12px, 0) scale(1.05); }
  100% { transform: translate3d(-15px, -18px, 0) scale(1); }
`;

const floatWide = keyframes`
  0% { transform: translate3d(10px, 0, 0) scale(1); }
  50% { transform: translate3d(-30px, 18px, 0) scale(1.08); }
  100% { transform: translate3d(20px, -12px, 0) scale(1); }
`;

export const Wrapper = styled.div`
  padding: 8vh 2rem 4rem;
  margin-top: 80px; /* adjust to match navbar height if fixed */
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  position: relative;
  background: linear-gradient(135deg, #e8f5e9 0%, #d8f2d5 45%, #c5e1a5 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 540px;
    height: 540px;
    top: -120px;
    right: -80px;
    background: radial-gradient(circle, rgba(102, 187, 106, 0.28), rgba(102, 187, 106, 0));
    filter: blur(30px);
    opacity: 0.55;
    animation: ${floatSlow} 16s ease-in-out infinite alternate;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 480px;
    height: 480px;
    bottom: -140px;
    left: -120px;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.22), rgba(102, 126, 234, 0));
    filter: blur(36px);
    opacity: 0.45;
    animation: ${floatWide} 18s ease-in-out infinite alternate;
    z-index: 1;
  }
`;

export const Heading = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  color: #2c3e50;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 2;
`;

export const StatCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 2;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const CardTitle = styled.h4`
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 0.8rem;
`;

export const CardValue = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  color: #2d3436;
  margin-bottom: 1.2rem;
`;

export const ActionButton = styled(Link)`
  display: inline-block;
  background-color: ${({ type }) => (type === 'add' ? '#28a745' : '#007bff')};
  color: #fff;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: ${({ type }) => (type === 'add' ? '#218838' : '#0056b3')};
  }
`;

