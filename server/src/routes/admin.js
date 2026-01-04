const express = require('express');
const router = express.Router();
const models = require('../models/schema');
const Project = require('../models/Project');
const CarbonOrder = require('../models/Order');

router.get('/summary', async (req, res) => {
  try {
    const projectCount = await Project.countDocuments();
    const userCount = await models.Users.countDocuments();
    const orderCount = await CarbonOrder.countDocuments();

    res.json({ projectCount, userCount, orderCount });
  } catch (error) {
    console.error('Error fetching summary:', error);
    res.status(500).json({ message: 'Error fetching summary', error: error.message });
  }
});

module.exports = router;
