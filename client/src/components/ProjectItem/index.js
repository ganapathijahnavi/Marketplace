import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  ProjectContainer,
  ProjectName,
  ProjectPrice,
  ProjectImage,
  Button,
  ButtonContainer,
  ImpactScore,
} from "./styledComponents";

const ProjectItem = ({
  id,
  name,
  category,
  price,
  impactScore,
  img,
}) => {
  const handleBuyCredits = async () => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      alert("Please login to buy carbon credits.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5100/api/orders",
        {
          projectId: id,
          creditsPurchased: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        alert(`Carbon credits purchased for ${name}`);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Purchase error:", error);
      alert("Failed to purchase carbon credits.");
    }
  };

  const handleAddToCart = async () => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      alert("Please login to add to cart.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5100/api/cart/add",
        { projectId: id, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert(`Added ${name} to cart`);
    } catch (error) {
      console.error("Add to cart error:", error);
      alert("Failed to add to cart.");
    }
  };

  return (
    <ProjectContainer>
      <ProjectImage
        src={
          img ||
          "https://images.unsplash.com/photo-1509395176047-4a66953fd231"
        }
        alt={name}
      />

      <ProjectName>{name}</ProjectName>

      <p style={{ fontSize: "14px", color: "#666", margin: "6px 0" }}>
        Category: {category}
      </p>

      <ImpactScore>Impact Score: {impactScore}/10</ImpactScore>

      <ProjectPrice>₹{price} / credit</ProjectPrice>

      <ButtonContainer>
        <Link
          to={`/project-details/${id}`}
          className="btn btn-sm btn-outline-success"
          style={{ borderRadius: "5px", fontWeight: "500" }}
        >
          View Details
        </Link>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
        <Button onClick={handleBuyCredits}>Buy Credits</Button>
      </ButtonContainer>
    </ProjectContainer>
  );
};

export default ProjectItem;
