const express = require('express');
const router = express.Router();
const { generateTrip, getTrips, } = require("../controllers/TripController");

router.post("/generate", generateTrip);
router.get("/all", getTrips)

module.exports = router;