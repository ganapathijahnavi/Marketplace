import styled from "styled-components";

export const ProjectContainer = styled.div`
  border: 1px solid #cce5cc;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 15px;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const ProjectName = styled.h3`
  font-size: 18px;
  color: #2e7d32;
  margin: 10px 0 5px 0;
`;

export const ProjectPrice = styled.p`
  font-weight: bold;
  color: #2e7d32;
  margin-top: 6px;
`;

export const ImpactScore = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #00796b;
  margin: 4px 0;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2e7d32;
  }
`;
