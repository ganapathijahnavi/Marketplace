import styled from 'styled-components';

export const AboutWrapper = styled.section`
  background: #f8f9fa;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  max-width: 1100px;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const AboutSection = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.95);
  padding: 50px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  text-align: left;
  backdrop-filter: blur(10px);
`;

export const Heading = styled.h2`
  font-size: 2.2rem;
  color: #2e7d32;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

export const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 20px;
  font-family: 'Inter', sans-serif;
`;
