import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  PageWrapper,
  Container,
  Title,
  Subtitle,
  Form,
  FormGroup,
  Label,
  Input,
  CalculateButton,
  ResultBox,
  ResultTitle,
  ResultValue,
  ResultLabel,
  InfoText,
  OffsetButton
} from './styledComponents';
import FootprintAnimatedBg from './AnimatedBackground';

const FootprintCalculator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    travelKm: '',
    electricityUnits: '',
    flightsPerMonth: '',
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5100/api/footprint/calculate', {
        travelKm: Number(formData.travelKm),
        electricityUnits: Number(formData.electricityUnits),
        flightsPerMonth: Number(formData.flightsPerMonth),
      });

      setResult(response.data.estimatedCredits);
    } catch (error) {
      console.error('Calculation error:', error);
      alert('Failed to calculate carbon footprint. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOffsetNow = () => {
    navigate('/shopping');
  };

  return (
    <PageWrapper>
      <FootprintAnimatedBg />
      <Container>
        <Title>🌍 Carbon Footprint Calculator</Title>
        <Subtitle>Calculate your environmental impact and discover how many carbon credits you need to offset it</Subtitle>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>🚗 Travel Distance (km/month)</Label>
            <Input
              type="number"
              name="travelKm"
              placeholder="e.g., 500"
              value={formData.travelKm}
              onChange={handleChange}
              required
              min="0"
            />
          </FormGroup>

          <FormGroup>
            <Label>⚡ Electricity Usage (kWh/month)</Label>
            <Input
              type="number"
              name="electricityUnits"
              placeholder="e.g., 300"
              value={formData.electricityUnits}
              onChange={handleChange}
              required
              min="0"
            />
          </FormGroup>

          <FormGroup>
            <Label>✈️ Flight Frequency (flights/month)</Label>
            <Input
              type="number"
              name="flightsPerMonth"
              placeholder="e.g., 2"
              value={formData.flightsPerMonth}
              onChange={handleChange}
              required
              min="0"
            />
          </FormGroup>

          <CalculateButton type="submit" disabled={loading}>
            {loading ? 'Calculating...' : '🧮 Calculate My Footprint'}
          </CalculateButton>
        </Form>

        {result !== null && (
          <ResultBox>
            <ResultTitle>Your Carbon Footprint Result</ResultTitle>
            <ResultValue>{result.toFixed(2)}</ResultValue>
            <ResultLabel>Carbon Credits Needed to Offset</ResultLabel>
            
            <InfoText>
              💡 <strong>What does this mean?</strong><br />
              Based on your monthly activities, you need approximately <strong>{result.toFixed(2)} carbon credits</strong> to neutralize your carbon footprint. 
              Purchase credits from verified carbon offset projects to make a positive environmental impact!
            </InfoText>

            <OffsetButton onClick={handleOffsetNow}>
              🛒 Browse Carbon Projects
            </OffsetButton>
          </ResultBox>
        )}
      </Container>
    </PageWrapper>
  );
};

export default FootprintCalculator;
