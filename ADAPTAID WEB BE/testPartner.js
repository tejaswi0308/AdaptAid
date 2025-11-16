const mongoose = require("mongoose");
const Partner = require("./models/Partner");

// 1) Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/adaptaid")
  .then(async () => {
    console.log("MongoDB Connected!");

    // 2) Add a sample partner
    const p = await Partner.create({
      name: "ABC Foundation",
      type: "NGO",
      location: "Mumbai",
      contact: "9876543210",
      website: "https://abc.org"
    });

    console.log("Partner Saved:", p);

    mongoose.disconnect();
  })
  .catch(err => console.log("DB Error:", err));
