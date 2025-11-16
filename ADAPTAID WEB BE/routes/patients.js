const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

// Create a patient
router.post("/", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Avoid duplicate patients by email or phone
    const existing = await Patient.findOne({ $or: [{ email }, { phone }] });
    if (existing) {
      return res.status(409).json({ error: "Patient already exists" });
    }

    const patient = await Patient.create({ name, email, phone });
    return res.status(201).json({ message: "Patient saved", patient });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
