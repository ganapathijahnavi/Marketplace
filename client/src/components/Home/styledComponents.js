import styled from 'styled-components';

// Main container
export const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

// Hero Section
export const HeroSection = styled.section`
  min-height: 85vh;
  margin-top: 10vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  max-width: 900px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  padding: 16px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  background: #2e7d32;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(46, 125, 50, 0.3);

  &:hover {
    background: #1b5e20;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(46, 125, 50, 0.4);
  }
`;

export const SecondaryButton = styled.button`
  padding: 16px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: #667eea;
    transform: translateY(-2px);
  }
`;

// Stats Section
export const StatsSection = styled.section`
  padding: 4rem 2rem;
  background: #f8f9fa;
`;

export const StatsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

export const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
`;

export const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  color: #2e7d32;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  font-size: 1.2rem;
  color: #666;
  font-weight: 500;
`;

// Features Section
export const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background: white;
`;

export const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;
  color: #2e7d32;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

export const FeatureCard = styled.div`
  padding: 2.5rem;
  background: #f8f9fa;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-color: #2e7d32;
  }
`;

export const FeatureIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

export const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

// CTA Section
export const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
  text-align: center;
`;

export const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CTAText = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

