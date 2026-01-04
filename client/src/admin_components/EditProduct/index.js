import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  // Fetch categories
  useEffect(() => {
    axios
      .get("https://marketplace-1-thid.onrender.com/category")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  // Fetch existing project details
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `https://marketplace-1-thid.onrender.com/api/projects/${id}`
        );
        const projectData = {
          ...res.data,
          sdgGoals: Array.isArray(res.data.sdgGoals) ? res.data.sdgGoals.join(", ") : ""
        };
        setFormData(projectData);
      } catch (err) {
        console.error("Error fetching project:", err);
        alert("Failed to load project data");
      }
    };
    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("adminJwtToken");
      if (!token) {
        alert("⚠️ No admin token found.");
        return;
      }

      await axios.put(
        `https://marketplace-1-thid.onrender.com/api/projects/${id}`,
        {
          name: formData.name,
          description: formData.description,
          pricePerCredit: Number(formData.pricePerCredit),
          image: formData.image,
          category: formData.category,
          availableCredits: Number(formData.availableCredits),
          location: formData.location,
          certification: formData.certification,
          impactScore: Number(formData.impactScore),
          sdgGoals: formData.sdgGoals ? formData.sdgGoals.split(",").map(s => s.trim()) : [],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("✅ Carbon project updated successfully");
      navigate("/admin/all-products");
    } catch (err) {
      console.error(
        "Error updating project:",
        err.response?.data || err.message
      );
      alert("Failed to update project");
    }
  };

  const renderInput = (label, name, type = "text") => (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        <b>{label}</b>
      </label>
      <br />
      <input
        type={type}
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
        style={{ width: "100%", padding: "8px" }}
      />
    </div>
  );

  return (
    <div style={{ padding: "2rem", maxWidth: "650px", margin: "0 auto" }}>
      <h2>Edit Carbon Project</h2>

      <form onSubmit={handleSubmit}>
        {renderInput("Project Name", "name")}
        {renderInput("Description", "description")}
        {renderInput("Price per Credit", "pricePerCredit", "number")}
        {renderInput("Image URL", "image")}
        
        <div style={{ marginBottom: "1rem" }}>
          <label>
            <b>Category</b>
          </label>
          <br />
          <select
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        
        {renderInput("Available Credits", "availableCredits", "number")}
        {renderInput("Location", "location")}

        <div style={{ marginBottom: "1rem" }}>
          <label>
            <b>Certification</b>
          </label>
          <br />
          <select
            name="certification"
            value={formData.certification || ""}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="">Select Certification</option>
            <option value="VERRA">VERRA</option>
            <option value="Gold Standard">Gold Standard</option>
            <option value="None">None</option>
          </select>
        </div>

        {renderInput("Impact Score (0-10)", "impactScore", "number")}
        {renderInput("SDG Goals (comma-separated, e.g., 13, 15)", "sdgGoals")}

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Update Project
        </button>
      </form>
    </div>
  );
};

export default EditProduct;

