import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 100px auto;
  padding: 3rem;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 15px;
  color: #34495e;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: 0.3s;

  &:focus {
    border-color: #22aaff;
    outline: none;
  }
`;

const Select = styled.select`
  padding: 12px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;

  &:focus {
    border-color: #22aaff;
    outline: none;
  }
`;

const Button = styled.button`
  grid-column: span 2;
  background-color: #22aaff;
  color: white;
  padding: 16px;
  font-size: 17px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0d91e4;
  }
`;

const ProductSummary = styled.div`
  background-color: #f7fbff;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
  border-left: 5px solid #22aaff;
  border-radius: 10px;
`;

const ProductLine = styled.p`
  margin: 6px 0;
  font-size: 16px;
  color: #2c3e50;
`;

const TotalHighlight = styled.div`
  grid-column: span 2;
  background: #e8f6ff;
  border: 1px dashed #22aaff;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  font-size: 18px;
  font-weight: bold;
  color: #1a5276;
`;

// ✅ Component
const Checkout = () => {
  const { id } = useParams(); // product ID if from Buy Now
  const navigate = useNavigate();
  const token = localStorage.getItem('jwtToken');

  const [checkoutItems, setCheckoutItems] = useState([]);
  const [projectsDetails, setProjectsDetails] = useState([]);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    address: '',
    paymentMethod: 'UPI',
  });

  useEffect(() => {
    if (!token) return;

    // Load checkout items from localStorage
    const itemsStr = localStorage.getItem("checkoutItems");
    if (itemsStr) {
      const items = JSON.parse(itemsStr);
      setCheckoutItems(items);
      
      // Fetch project details for each item
      const fetchProjects = async () => {
        try {
          const projectPromises = items.map(item => 
            axios.get(`http://localhost:5100/api/projects/${item.projectId}`)
          );
          const responses = await Promise.all(projectPromises);
          setProjectsDetails(responses.map(res => res.data));
        } catch (err) {
          console.error('Error fetching project details:', err);
        }
      };
      fetchProjects();
    }
  }, [token]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    if (!token) return alert('Please log in');

    try {
      // Get checkout items from localStorage (set from MyCart)
      const checkoutItemsStr = localStorage.getItem("checkoutItems");
      if (!checkoutItemsStr) {
        alert("No items to checkout");
        return;
      }

      const checkoutItems = JSON.parse(checkoutItemsStr);
      console.log("📦 Placing orders for items:", checkoutItems);

      // Place order for each item (carbon credits are per-project)
      const orderPromises = checkoutItems.map(item => {
        console.log(`🔄 Ordering: Project ${item.projectId}, Quantity: ${item.quantity}`);
        return axios.post('http://localhost:5100/api/orders', {
          projectId: item.projectId,
          creditsPurchased: item.quantity
        }, {
          headers: { Authorization: `Bearer ${token}` }
        });
      });

      const results = await Promise.all(orderPromises);
      console.log("✅ All orders placed successfully:", results);

      // Clear cart after successful order
      await axios.delete('http://localhost:5100/api/cart', {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Clear checkout items from localStorage
      localStorage.removeItem("checkoutItems");

      alert('🎉 Order placed successfully!');
      navigate('/my-orders');
    } catch (err) {
      console.error('❌ Order failed:', err);
      console.error('Error response:', err.response?.data);
      console.error('Error message:', err.message);
      alert(`Failed to place order: ${err.response?.data?.message || err.message || 'Server error'}`);
    }
  };

  const calculateCartTotal = () => {
    return checkoutItems.reduce((sum, item, index) => {
      const project = projectsDetails[index];
      if (!project) return sum;
      return sum + (project.pricePerCredit * item.quantity);
    }, 0);
  };

  return (
    <Container>
      <Title>Complete Your Order</Title>

      {checkoutItems.length > 0 && projectsDetails.length > 0 && (
        <ProductSummary>
          <ProductLine><strong>Carbon Credit Orders:</strong></ProductLine>
          {checkoutItems.map((item, index) => {
            const project = projectsDetails[index];
            if (!project) return null;
            return (
              <ProductLine key={index}>
                {project.name} - {item.quantity} credits × ₹{project.pricePerCredit} = ₹{project.pricePerCredit * item.quantity}
              </ProductLine>
            );
          })}
          <ProductLine><strong>Total Amount:</strong> ₹{calculateCartTotal()}</ProductLine>
        </ProductSummary>
      )}

      <Form onSubmit={handleOrder}>
        <FormGroup>
          <Label>First Name</Label>
          <Input name="firstname" value={formData.firstname} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Last Name</Label>
          <Input name="lastname" value={formData.lastname} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Phone Number</Label>
          <Input name="phone" value={formData.phone} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Shipping Address</Label>
          <Input name="address" value={formData.address} onChange={handleChange} required />
        </FormGroup>

        <FormGroup>
          <Label>Payment Method</Label>
          <Select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="UPI">UPI</option>
            <option value="Net Banking">Net Banking</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
          </Select>
        </FormGroup>

        <TotalHighlight>
          Total: ₹{calculateCartTotal()}
        </TotalHighlight>

        <Button type="submit">Place Order</Button>
      </Form>
    </Container>
  );
};

export default Checkout;
