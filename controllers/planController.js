const Plan = require("../models/Plan");

const createPlan = async (req, res) => {
  try {
    const { destination, startDate, endDate, activities } = req.body;

    if (!destination || !startDate || !endDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPlan = new Plan({ destination, startDate, endDate, activities });

    const savedPlan = await newPlan.save();
    res.status(201).json(savedPlan);
  } catch (error) {
    res.status(500).json({ message: "Error creating plan", error: error.message });
  }
};


const getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: "Error fetching plans", error: error.message });
  }
};

module.exports = { createPlan, getAllPlans };
