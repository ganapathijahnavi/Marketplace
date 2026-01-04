import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  PageWrapper,
  Container,
  ImageSection,
  ProjectImage,
  DetailsSection,
  Title,
  Info,
  Price,
  ImpactScore,
  Button,
  ReviewSection,
  ReviewItem,
  ReviewTitle,
  TextArea,
  HeartRow,
  HeartButton,
} from "./styledComponents";

const ProjectDetails = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // Fetch single project
  useEffect(() => {
    axios
      .get(`http://localhost:5100/api/projects/${id}`)
      .then((res) => setProject(res.data))
      .catch((err) => console.error("Error fetching project", err));
  }, [id]);

  // Fetch reviews
  useEffect(() => {
    axios
      .get(`http://localhost:5100/api/reviews/${id}`)
      .then((res) => setReviews(res.data))
      .catch((err) => console.error("Error fetching reviews", err));
  }, [id]);

  const handleBuyCredits = async () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      alert("Please login to buy carbon credits");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5100/api/orders",
        {
          projectId: id,
          creditsPurchased: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Carbon credits purchased successfully!");
    } catch (err) {
      alert("Failed to purchase credits");
    }
  };

  const handleReviewSubmit = async () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      alert("Login required to submit review");
      return;
    }

    const numericRating = Number(rating);
    if (Number.isNaN(numericRating) || numericRating < 1 || numericRating > 5) {
      alert("Please select a rating between 1 and 5 hearts");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5100/api/reviews",
        {
          projectId: id,
          rating: numericRating * 2,
          comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRating(0);
      setComment("");

      const updatedReviews = await axios.get(
        `http://localhost:5100/api/reviews/${id}`
      );
      setReviews(updatedReviews.data);
      alert("Review submitted successfully");
    } catch (err) {
      alert(
        err?.response?.data?.message ||
        err?.message ||
        "Failed to submit review"
      );
    }
  };

  if (!project) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <PageWrapper>
      <Container>
        <ImageSection>
          <ProjectImage
            src={
              project.image ||
              "https://images.unsplash.com/photo-1509395176047-4a66953fd231"
            }
            alt={project.name}
          />
        </ImageSection>

        <DetailsSection>
          <Title>{project.name}</Title>
          <Info>Category: {project.category}</Info>
          <Info>Location: {project.location}</Info>
          <Info>Certification: {project.certification}</Info>

          <ImpactScore>Impact Score: {project.impactScore}/10</ImpactScore>
          <Price>₹{project.pricePerCredit} / credit</Price>

          <Button onClick={handleBuyCredits}>Buy Carbon Credits</Button>
        </DetailsSection>
      </Container>

      <ReviewSection>
        <ReviewTitle>Reviews</ReviewTitle>

        {reviews.map((rev) => (
          <ReviewItem key={rev._id}>
            <strong>Rating:</strong> {rev.rating}/10
            <p>{rev.comment}</p>
          </ReviewItem>
        ))}

        <HeartRow>
          {[1,2,3,4,5].map((value) => (
            <HeartButton
              key={value}
              type="button"
              active={rating >= value}
              onClick={() => setRating(value)}
              aria-label={`Rate ${value} out of 5`}
            >
              {rating >= value ? '❤' : '♡'}
            </HeartButton>
          ))}
          <span style={{ fontWeight: 600, color: '#e91e63' }}>
            {rating > 0 ? `${rating}/5 hearts` : 'Choose your rating'}
          </span>
        </HeartRow>

        <TextArea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <Button onClick={handleReviewSubmit}>Submit Review</Button>
      </ReviewSection>
    </PageWrapper>
  );
};

export default ProjectDetails;
