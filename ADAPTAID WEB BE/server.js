const express = require("express");
const app = express();
const mongoose = require("mongoose");
const partnerRoutes = require("./routes/partnersRoutes");
const loginRoutes = require("./routes/loginRoutes");
const patientsRoutes = require("./routes/patients");
const cors = require("cors");
const path = require("path");

// EJS setup
app.set("view engine", "ejs");

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/adaptaid")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Static + JSON
app.use(express.json());
// Parse URL-encoded form bodies (from HTML forms)
app.use(express.urlencoded({ extended: true }));
// Enable CORS so front-end served from another port can call API
app.use(cors());

// Serve frontend static files (optional) — serves ADAPTAID WEB FE directory
app.use(express.static(path.join(__dirname, '..', 'ADAPTAID WEB FE')));

// Route for frontend page
app.get("/partners", (req, res) => {
  res.render("partners");
});

// API Route
app.use("/partners", partnerRoutes);
// Mount login routes (renders login page and handles form POST)
app.use("/login", loginRoutes);
// Mount patients API
app.use("/patients", patientsRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
