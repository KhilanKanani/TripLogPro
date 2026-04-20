const Trip = require("../models/TripModel");
const { geocodeLocation, getRoute, buildTripData, } = require("../services/TripService");

const generateTrip = async (req, res) => {
    try {
        const { currentLocation, pickupLocation, dropoffLocation, currentCycleUsedHours, } = req.body;

        if (!currentLocation || !pickupLocation || !dropoffLocation) {
            return res.status(400).json({
                success: false,
                message: "All fields required",
            });
        }

        const currentGeo = await geocodeLocation(currentLocation);

        const pickupGeo = await geocodeLocation(pickupLocation);

        const dropGeo = await geocodeLocation(dropoffLocation);

        if (!currentGeo || !pickupGeo || !dropGeo) {
            return res.status(400).json({
                success: false,
                message: "Invalid locations",
            });
        }

        const route1 = await getRoute(currentGeo, pickupGeo);

        const route2 = await getRoute(pickupGeo, dropGeo);

        if (!route1 || !route2) {
            return res.status(400).json({
                success: false,
                message: "Route not found",
            });
        }

        const tripData = buildTripData({
            currentLocation,
            pickupLocation,
            dropoffLocation,
            currentCycleUsedHours,

            route1,
            route2,
        });

        const trip = await Trip.create(tripData);

        return res.status(201).json({
            success: true,
            message: "Trip generated successfully",
            trip,
        });
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message:
                error.message,
        });
    }
};

const getTrips = async (req, res) => {
    try {
        const trips = await Trip.find().sort({ createdAt: -1, }).lean();

        return res.status(200).json({
            success: true,
            count: trips.length,
            trips,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message:
                error.message,
        });
    }
};

module.exports = { generateTrip, getTrips, };