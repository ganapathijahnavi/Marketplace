import styled from "styled-components";

export const PageWrapper = styled.div`
  margin-top: 8vh;
  padding: 2rem;
  background: #f4fff4;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
`;

export const ImageSection = styled.div`
  flex: 1;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 10px;
`;

export const DetailsSection = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  color: #2e7d32;
  margin-bottom: 1rem;
`;

export const Info = styled.p`
  font-size: 15px;
  color: #444;
  margin-bottom: 6px;
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #2e7d32;
  margin-top: 1rem;
`;

export const ImpactScore = styled.p`
  font-weight: 600;
  color: #00796b;
  margin-top: 10px;
`;

export const Button = styled.button`
  margin-top: 1.2rem;
  padding: 10px 18px;
  background-color: #2e7d32;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #1b5e20;
  }
`;

export const ReviewSection = styled.div`
  margin-top: 3rem;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
`;

export const ReviewTitle = styled.h3`
  margin-bottom: 1rem;
  color: #2e7d32;
`;

export const ReviewItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

export const RatingInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 1rem;
`;

export const HeartRow = styled.div`
  display: flex;
  gap: 10px;
  margin: 12px 0 8px;
  align-items: center;
`;

export const HeartButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid ${({ active }) => (active ? "#e91e63" : "#ddd")};
  background: ${({ active }) => (active ? "#ffe6ee" : "#fff")};
  color: ${({ active }) => (active ? "#e91e63" : "#888")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.02);
    border-color: #e91e63;
    color: #e91e63;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 90px;
  margin-top: 10px;
  padding: 8px;
`;
