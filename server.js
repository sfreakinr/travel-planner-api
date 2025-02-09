const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const planRoutes = require("./routes/planRoutes");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/plans", planRoutes);
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

  app.get("/", (req, res) => {
    res.send("Welcome to the Travel Planner API!");
  });
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
