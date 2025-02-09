const Plan = require("../models/Plan");

const createPlan = async (req, res) => {
    try {
        const newPlan = new Plan(req.body);
        await newPlan.save();
        res.status(201).json(newPlan);
    } catch (error) {
        res.status(500).json({ message: "Error creating plan", error });
    }
};

const getAllPlans = async (req, res) => {
    try {
        const plans = await Plan.find();
        res.status(200).json(plans);
    } catch (error) {
        res.status(500).json({ message: "Error fetching plans", error });
    }
};

const getPlanById = async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id);
        if (!plan) return res.status(404).json({ message: "Plan not found" });
        res.status(200).json(plan);
    } catch (error) {
        res.status(500).json({ message: "Error fetching plan", error });
    }
};

const updatePlan = async (req, res) => {
    try {
        const updatedPlan = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPlan) return res.status(404).json({ message: "Plan not found" });
        res.status(200).json(updatedPlan);
    } catch (error) {
        res.status(500).json({ message: "Error updating plan", error });
    }
};

const deletePlan = async (req, res) => {
    try {
        const deletedPlan = await Plan.findByIdAndDelete(req.params.id);
        if (!deletedPlan) return res.status(404).json({ message: "Plan not found" });
        res.status(200).json({ message: "Plan deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting plan", error });
    }
};

module.exports = { createPlan, getAllPlans, getPlanById, updatePlan, deletePlan };
