import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
`;

export const StyledNavbarBrand = styled(Navbar.Brand)`
  font-weight: bold;
  font-size: 1.5rem;
  color: #2c3e50;

  &:hover {
    color: #007bff;
    text-decoration: none;
  }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://rmi.org/wp-content/uploads/2025/07/green-grass-carbon-icons-istock-2203958101.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 10vh;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(232, 245, 233, 0.3) 0%, rgba(197, 225, 165, 0.25) 50%, rgba(165, 214, 167, 0.3) 100%);
    z-index: 1;
  }
`;

export const LoginCard = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
  padding: 40px;
  width: 400px;
  z-index: 3;
  position: relative;
`;

export const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: #2e7d32;
  margin-bottom: 20px;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #2e7d32;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;

  &:hover {
    background-color: #1b5e20;
  }
`;

export const TextLink = styled.p`
  text-align: center;
  margin-top: 15px;

  a {
    color: #2e7d32;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }
`;

