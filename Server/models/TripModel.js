const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema(
    {
        currentLocation: {
            type: String,
            required: true,
            trim: true,
        },

        pickupLocation: {
            type: String,
            required: true,
            trim: true,
        },

        dropoffLocation: {
            type: String,
            required: true,
            trim: true,
        },

        currentCycleUsedHours: {
            type: Number,
            required: true,
            min: 0,
            max: 70,
        },

        routeInstructions: {
            type: [String],
            default: [],
        },

        routePath: {
            type: [[Number]],
            default: [],
        },

        stopsAndRests: [
            {
                stopType: String,
                location: String,
                afterMiles: Number,
                restHours: Number,
            },
        ],

        dailyLogSheets: [
            {
                day: Number,
                drivingHours: Number,
                onDutyHours: Number,
                offDutyHours: Number,
                sleeperHours: Number,
            },
        ],
    },
    { timestamps: true, }
);

const TripModel = mongoose.model("Trip", TripSchema);
module.exports = TripModel;