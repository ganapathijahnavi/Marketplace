const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Project Routes - CRUD Operations

/**
 * GET /projects - Retrieve all carbon projects
 * @returns {Array} List of all projects
 */
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: error.message });
  }
});

/**
 * GET /projects/:id - Retrieve a single project by ID
 * @param {string} id - Project ID (MongoDB ObjectId)
 * @returns {Object} Project details
 */
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    
    res.json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(404).json({ message: "Project not found" });
  }
});

/**
 * POST /projects - Create a new project (Admin only)
 * @param {Object} body - Project data
 * @returns {Object} Created project with ID
 */
router.post("/", async (req, res) => {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    
    res.status(201).json({ 
      message: "Project created successfully",
      project: savedProject 
    });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(400).json({ message: error.message });
  }
});

/**
 * PUT /projects/:id - Update project details (Admin only)
 * @param {string} id - Project ID
 * @param {Object} body - Updated project data
 * @returns {Object} Updated project
 */
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const updatedProject = await Project.findByIdAndUpdate(
      id, 
      req.body, 
      {
        new: true,           // Return updated document
        runValidators: true  // Run schema validators
      }
    );
    
    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }
    
    res.json({ 
      message: "Project updated successfully",
      project: updatedProject 
    });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(400).json({ message: error.message });
  }
});

/**
 * DELETE /projects/:id - Remove a project (Admin only)
 * @param {string} id - Project ID
 * @returns {Object} Success message
 */
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const project = await Project.findByIdAndDelete(id);
    
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
