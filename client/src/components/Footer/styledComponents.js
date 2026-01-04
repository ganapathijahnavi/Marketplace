import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);
  color: #ffffff;
  padding: 60px 20px 30px;
  margin-top: 80px;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #c8e6c9;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const FooterText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.95;
  margin-bottom: 8px;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    color: #c8e6c9;
    transform: translateX(5px);
  }
`;

export const FooterDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 20px 0;
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const FooterCredit = styled.p`
  font-size: 13px;
  opacity: 0.8;
  margin: 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

export const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #c8e6c9;
    color: #1b5e20;
    transform: translateY(-3px);
  }
`;
