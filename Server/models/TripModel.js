const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },

        current: {
            type: String,
            required: true,
            trim: true,
        },

        pickup: {
            type: String,
            required: true,
            trim: true,
        },

        dropoff: {
            type: String,
            required: true,
            trim: true,
        },

        vehicleType: {
            type: String,
            required: true,
            enum: [
                "Bike",
                "Scooter",
                "Car",
                "Tanker",
                "Mini Truck",
                "Pickup Truck",
                "Container Truck",
                "Trailer Truck",
            ],
        },

        fuelCapacity: {
            type: Number,
            required: true,
            min: 1,
        },

        cycleUsed: {
            type: Number,
            default: 0,
            min: 0,
        },

        distanceKm: {
            type: Number,
            default: 0,
        },

        durationText: {
            type: String,
            default: "",
        },

        estimatedArrival: {
            type: String,
            default: "",
        },

        routePath: {
            type: String,
            default: "",
        },

        mileage: {
            type: Number,
            default: 0,
        },

        fuelRequired: {
            type: Number,
            default: 0,
        },

        fuelStops: {
            type: Number,
            default: 0,
        },

        fuelCost: {
            type: Number,
            default: 0,
        },

        avgSpeed: {
            type: Number,
            default: 0,
        },

        cycleLeft: {
            type: Number,
            default: 70,
        },

        status: {
            type: String,
            enum: [
                "Pending",
                "Active",
                "Completed",
                "Cancelled",
            ],
            default: "Active",
        },
    },
    { timestamps: true, }
);

TripSchema.index({ userId: 1 });
TripSchema.index({ createdAt: -1 });
TripSchema.index({ status: 1 });

const TripModel = mongoose.model("Trip", TripSchema);
module.exports = TripModel;