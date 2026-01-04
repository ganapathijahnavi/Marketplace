import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 10vh auto;
  padding: 20px;
  text-align: start;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: rgb(62, 62, 62);
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: rgb(98, 90, 252);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgb(80, 72, 240);
  }
`;

const InputRowsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const AddProject = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    pricePerCredit: "",
    image: "",
    category: "",
    availableCredits: "",
    location: "",
    certification: "",
    impactScore: "",
    sdgGoals: "",
  });

  const [categories, setCategories] = useState([]);

  // Load project categories
  useEffect(() => {
    axios
      .get("http://localhost:5100/category")
      .then((res) => setCategories(res.data))
      .catch((err) =>
        console.error("Error loading categories:", err.message)
      );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      description,
      pricePerCredit,
      image,
      category,
      availableCredits,
      location,
      certification,
      impactScore,
      sdgGoals,
    } = formData;

    if (
      !name.trim() ||
      !description.trim() ||
      !image.trim() ||
      !category.trim() ||
      !location.trim() ||
      !certification.trim() ||
      pricePerCredit === "" ||
      availableCredits === "" ||
      impactScore === "" ||
      isNaN(pricePerCredit) ||
      isNaN(availableCredits) ||
      isNaN(impactScore)
    ) {
      return alert("⚠️ Please fill all fields with valid values");
    }

    const token = localStorage.getItem("adminJwtToken");
    if (!token) return alert("No admin token found.");

    try {
      await axios.post(
        "http://localhost:5100/api/projects",
        {
          name: name.trim(),
          description: description.trim(),
          pricePerCredit: Number(pricePerCredit),
          image: image.trim(),
          category: category.trim(),
          availableCredits: Number(availableCredits),
          location: location.trim(),
          certification: certification.trim(),
          impactScore: Number(impactScore),
          sdgGoals: sdgGoals.trim() ? sdgGoals.split(",").map(s => s.trim()) : [],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Carbon Project added successfully!");

      setFormData({
        name: "",
        description: "",
        pricePerCredit: "",
        image: "",
        category: "",
        availableCredits: "",
        location: "",
        certification: "",
        impactScore: "",
        sdgGoals: "",
      });
    } catch (err) {
      console.error("Add Project Error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Container>
      <Heading>Add Carbon Project</Heading>

      <Form onSubmit={handleSubmit}>
        <InputRowsContainer>
          <FormGroup>
            <Label>Project Name</Label>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <Label>Price per Credit</Label>
            <Input
              name="pricePerCredit"
              type="number"
              value={formData.pricePerCredit}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Available Credits</Label>
            <Input
              name="availableCredits"
              type="number"
              value={formData.availableCredits}
              onChange={handleChange}
            />
          </FormGroup>
        </InputRowsContainer>

        <InputRowsContainer>
          <FormGroup>
            <Label>Image URL</Label>
            <Input name="image" value={formData.image} onChange={handleChange} />
          </FormGroup>

          <FormGroup>
            <Label>Category</Label>
            <Select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Certification</Label>
            <Select
              name="certification"
              value={formData.certification}
              onChange={handleChange}
            >
              <option value="">Select Certification</option>
              <option value="VERRA">VERRA</option>
              <option value="Gold Standard">Gold Standard</option>
              <option value="None">None</option>
            </Select>
          </FormGroup>
        </InputRowsContainer>

        <InputRowsContainer>
          <FormGroup>
            <Label>Location</Label>
            <Input
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </FormGroup>
        </InputRowsContainer>

        <FormGroup>
          <Label>Description</Label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormGroup>

        <InputRowsContainer>
          <FormGroup>
            <Label>Impact Score (0-10)</Label>
            <Input
              name="impactScore"
              type="number"
              min="0"
              max="10"
              value={formData.impactScore}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>SDG Goals (comma-separated)</Label>
            <Input
              name="sdgGoals"
              placeholder="e.g., SDG 7, SDG 13, SDG 15"
              value={formData.sdgGoals}
              onChange={handleChange}
            />
          </FormGroup>
        </InputRowsContainer>

        <Button type="submit">Add Project</Button>
      </Form>
    </Container>
  );
};

export default AddProject;
