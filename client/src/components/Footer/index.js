import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterText,
  FooterLinks,
  FooterLink,
  FooterBottom,
  FooterCredit,
  SocialLinks,
  SocialIcon
} from './styledComponents';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* About Section */}
        <FooterSection>
          <FooterTitle>About GreenVault</FooterTitle>
          <FooterText>
            Connecting individuals and businesses with verified carbon offset projects worldwide. Making climate action simple, transparent, and impactful.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="#" title="Facebook">f</SocialIcon>
            <SocialIcon href="#" title="Twitter">𝕏</SocialIcon>
            <SocialIcon href="#" title="LinkedIn">in</SocialIcon>
            <SocialIcon href="#" title="Instagram">📷</SocialIcon>
          </SocialLinks>
        </FooterSection>

        {/* Quick Links */}
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/shopping">Browse Projects</FooterLink>
            <FooterLink href="/footprint-calculator">Calculate Footprint</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
          </FooterLinks>
        </FooterSection>

        {/* Support */}
        <FooterSection>
          <FooterTitle>Support</FooterTitle>
          <FooterLinks>
            <FooterLink href="#faq">FAQ</FooterLink>
            <FooterLink href="#contact">Contact Us</FooterLink>
            <FooterLink href="#privacy">Privacy Policy</FooterLink>
            <FooterLink href="#terms">Terms of Service</FooterLink>
          </FooterLinks>
        </FooterSection>

        {/* Contact */}
        <FooterSection>
          <FooterTitle>Get In Touch</FooterTitle>
          <FooterText>Email: info@ecocredithub.com</FooterText>
          <FooterText>Phone: +1 (555) 123-4567</FooterText>
          <FooterText>Address: Climate Action Hub, Global City</FooterText>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <FooterCredit>
          © {new Date().getFullYear()} EcoCredit Hub. All rights reserved. | Scaling Climate Finance with Carbon Credits 🌱
        </FooterCredit>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
