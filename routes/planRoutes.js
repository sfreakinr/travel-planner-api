const express = require("express");
const { createPlan, getAllPlans, getPlanById, updatePlan, deletePlan } = require("../controllers/planController");

const router = express.Router();

router.post("/", createPlan);
router.get("/", getAllPlans);
router.get("/:id", getPlanById);
router.patch("/:id", updatePlan);
router.delete("/:id", deletePlan);

module.exports = router;
