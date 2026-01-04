import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  padding-top: 4rem;
`;

export const Container = styled.div`
  max-width: 550px;
  width: 100%;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  padding: 1.5rem;
  position: relative;
  z-index: 1;
  max-height: 90vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4caf50;
    border-radius: 3px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: #2e7d32;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  padding: 10px 14px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

export const CalculateButton = styled.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, #66bb6a 0%, #43a047 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ResultBox = styled.div`
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border-radius: 12px;
  border: 2px solid #4caf50;
  text-align: center;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ResultTitle = styled.h3`
  color: #2e7d32;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
`;

export const ResultValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1b5e20;
  margin-bottom: 0.3rem;
`;

export const ResultLabel = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const InfoText = styled.p`
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 8px;
  padding: 0.8rem;
  color: #856404;
  font-size: 0.85rem;
  margin-top: 0.8rem;
  line-height: 1.4;
`;

export const OffsetButton = styled.button`
  margin-top: 1rem;
  padding: 12px 24px;
  background: #ff9800;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f57c00;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 152, 0, 0.3);
  }
`;

