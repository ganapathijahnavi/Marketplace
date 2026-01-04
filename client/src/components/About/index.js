import React from 'react';
import {
  AboutWrapper,
  AboutContent,
  AboutSection,
  Heading,
  Paragraph
} from './styledComponents';
import EdgeWave from './EdgeWave';
import AboutDecorations from './AboutDecorations';

const About = () => {
  return (
    <>
      <EdgeWave />

      <AboutWrapper>
        <AboutContent>
          <AboutSection>
            <Heading>What Are Carbon Credits?</Heading>
            <Paragraph>
              Carbon credits represent verified emission reductions from renewable energy, reforestation, energy efficiency, and other climate projects. Each credit equals one metric ton of CO₂ removed or avoided.
            </Paragraph>
            <Paragraph>
              Verified by global standards like <strong>Verra</strong> and <strong>Gold Standard</strong>, these credits enable organizations to offset their carbon footprint with measurable, real-world impact.
            </Paragraph>
            <Paragraph>
              <strong>EcoCredit Hub</strong> connects you with high-quality, transparent carbon projects worldwide – making climate action simple, accessible, and impactful.
            </Paragraph>
          </AboutSection>
          <AboutDecorations />
        </AboutContent>
      </AboutWrapper>

      <EdgeWave flip />
    </>
  );
};

export default About;
