const express = require("express");
const router = express.Router();
const Partner = require("../models/Partner");

// GET all partners
router.get("/api", async (req, res) => {
  try {
    const data = await Partner.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
