import React from 'react';
import {
  HomeContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
  StatsSection,
  StatsContainer,
  StatCard,
  StatNumber,
  StatLabel,
  FeaturesSection,
  SectionTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  CTASection,
  CTAContent,
  CTATitle,
  CTAText
} from "./styledComponents";
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import About from '../About';
import { AnimatedCheckmark, AnimatedLeaf } from '../AnimatedIcons';
import { 
  AnimatedCarbonCycle, 
  AnimatedParticles, 
  FloatingIconContainer 
} from '../AnimatedIcons/AdvancedAnimations';
import {
  AnimatedGlobe,
  AnimatedVerification,
  AnimatedDataTracker
} from '../AnimatedIcons/GorgeousAnimations';

const Home = () => {
  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <AnimatedParticles>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </AnimatedParticles>
        <HeroContent>
          <HeroTitle>Scaling Climate Finance with Carbon Credits</HeroTitle>
          <FloatingIconContainer>
            <AnimatedCarbonCycle />
          </FloatingIconContainer>
          <HeroSubtitle>
            Building an open, scalable, and impactful carbon market. Connect with verified environmental projects and make a measurable climate impact.
          </HeroSubtitle>
          <HeroButtons>
            <Link to='/shopping' style={{ textDecoration: 'none' }}>
              <PrimaryButton>Explore Projects</PrimaryButton>
            </Link>
            <Link to='/footprint-calculator' style={{ textDecoration: 'none' }}>
              <SecondaryButton>Calculate Footprint</SecondaryButton>
            </Link>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      {/* Stats Section */}
      <StatsSection>
        <StatsContainer>
          <StatCard>
            <StatNumber>1,000+</StatNumber>
            <StatLabel>tCO₂ Offset</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>150+</StatNumber>
            <StatLabel>Carbon Projects</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>500+</StatNumber>
            <StatLabel>Active Users</StatLabel>
          </StatCard>
        </StatsContainer>
      </StatsSection>

      {/* Features Section */}
      <FeaturesSection>
        <SectionTitle>Scale Up Your Positive Impact</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon><AnimatedLeaf /></FeatureIcon>
            <FeatureTitle>For Buyers</FeatureTitle>
            <FeatureDescription>
              Discover and purchase verified carbon credits with full price transparency and instant settlement from our global marketplace.
            </FeatureDescription>
            <Link to='/shopping'>
              <PrimaryButton style={{ marginTop: '1rem', fontSize: '14px', padding: '10px 20px' }}>
                Browse Projects
              </PrimaryButton>
            </Link>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon><AnimatedDataTracker /></FeatureIcon>
            <FeatureTitle>Track Your Impact</FeatureTitle>
            <FeatureDescription>
              Calculate your carbon footprint and discover how many credits you need to offset your environmental impact effectively.
            </FeatureDescription>
            <Link to='/footprint-calculator'>
              <PrimaryButton style={{ marginTop: '1rem', fontSize: '14px', padding: '10px 20px' }}>
                Calculate Now
              </PrimaryButton>
            </Link>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon><AnimatedVerification /></FeatureIcon>
            <FeatureTitle>Verified Projects</FeatureTitle>
            <FeatureDescription>
              Every credit on our platform represents real environmental impact from verified carbon offset projects worldwide.
            </FeatureDescription>
            <Link to='/login'>
              <PrimaryButton style={{ marginTop: '1rem', fontSize: '14px', padding: '10px 20px' }}>
                Get Started
              </PrimaryButton>
            </Link>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <CTATitle>Ready to Take Climate Action?</CTATitle>
          <CTAText>
            Join thousands of individuals and businesses making a real difference through verified carbon offset projects.
          </CTAText>
          <Link to='/signup' style={{ textDecoration: 'none' }}>
            <PrimaryButton>Create Account</PrimaryButton>
          </Link>
        </CTAContent>
      </CTASection>

      <About />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
