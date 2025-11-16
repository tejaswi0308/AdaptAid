const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Show login page
router.get("/", (req, res) => {
  res.render("login");
});

// Handle login/signup form
router.post("/send-otp", async (req, res) => {
  const { name, email, phone } = req.body;

  const fakeOTP = "1234";

  await User.create({ name, email, phone, otp: fakeOTP });

  res.send("OTP has been sent! (Fake OTP: 1234)");
});

module.exports = router;
