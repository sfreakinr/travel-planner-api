const express = require("express");
const { createPlan, getAllPlans } = require("../controllers/planController");

const router = express.Router();

router.post("/", createPlan);  
router.get("/", getAllPlans);  

module.exports = router;
