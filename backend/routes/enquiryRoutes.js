const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// Submit enquiry
router.post('/', async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    const savedEnquiry = await enquiry.save();
    res.status(201).json(savedEnquiry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
