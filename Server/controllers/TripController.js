const axios = require("axios");
const Trip = require("../models/TripModel");

const generateTrip = async (req, res) => {
    try {
        const { current, pickup, dropoff, vehicleType, fuelCapacity, cycleUsed, } = req.body;

        if (!current || !pickup || !dropoff || !vehicleType) {
            return res.status(400).json({
                success: false,
                message: "All required fields missing",
            });
        }

        const apiKey = process.env.GOOGLE_MAP_KEY;

        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(pickup)}&destination=${encodeURIComponent(dropoff)}&key=${apiKey}`;

        const response = await axios.get(url);

        if (response.data.status !== "OK") {
            return res.status(400).json({
                success: false,
                message: response.data.status,
            });
        }

        const route = response.data.routes[0];
        const leg = route.legs[0];

        const distanceKm = +(leg.distance.value / 1000).toFixed(1);
        const durationText = leg.duration.text;

        let mileage = 10;
        let avgSpeed = 50;

        switch (vehicleType) {
            case "Bike":
                mileage = 45;
                avgSpeed = 55;
                break;

            case "Scooter":
                mileage = 38;
                avgSpeed = 50;
                break;

            case "Car":
                mileage = 18;
                avgSpeed = 65;
                break;

            case "Mini Truck":
                mileage = 12;
                avgSpeed = 58;
                break;

            case "Pickup Truck":
                mileage = 10;
                avgSpeed = 55;
                break;

            case "Container Truck":
                mileage = 7;
                avgSpeed = 52;
                break;

            case "Trailer Truck":
                mileage = 5;
                avgSpeed = 48;
                break;

            default:
                mileage = 10;
                avgSpeed = 50;
        }

        const fuelRequired = +(distanceKm / mileage).toFixed(1);

        const fuelStops = Math.max(0, Math.ceil(fuelRequired / Number(fuelCapacity)) - 1);

        const fuelCost = Math.ceil(fuelRequired * 95);

        const cycleLeft = Math.max(0, 70 - Number(cycleUsed || 0));

        const driveHours = distanceKm / avgSpeed;

        const totalHours = Math.ceil(driveHours);

        const estimatedArrival =
            totalHours > 24
                ? `${Math.floor(
                    totalHours / 24
                )} Day ${totalHours % 24} Hr`
                : `${totalHours} Hr`;

        const trip = await Trip.create({
            userId,

            current,
            pickup,
            dropoff,

            vehicleType,
            fuelCapacity,
            cycleUsed,

            distanceKm,
            durationText,
            estimatedArrival,
            routePath: route.overview_polyline.points,

            mileage,
            fuelRequired,
            fuelStops,
            fuelCost,

            avgSpeed,
            cycleLeft,

            status: "Active",
        });

        return res.status(201).json({
            success: true,
            message: "Trip generated successfully",
            trip,
        });
    }
    
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getTrips = async (req, res) => {
    try {
        const trips = await Trip.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: trips.length,
            trips,
        });
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { generateTrip, getTrips, };