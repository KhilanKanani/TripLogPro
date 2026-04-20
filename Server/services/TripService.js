const axios = require("axios");

const MAX_CYCLE = 70;
const FUEL_STOP_MILES = 1000;

const geocodeLocation = async (place) => {
    const { data } = await axios.get("https://nominatim.openstreetmap.org/search",
        {
            params: {
                q: place,
                format: "json",
                limit: 1,
            },
            headers: {
                "User-Agent": "TripLogPro/1.0",
            },
        }
    );

    if (!data.length) return null;

    return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
    };
};

const getRoute = async (from, to) => {
    const { data } = await axios.get(`https://router.project-osrm.org/route/v1/driving/${from.lon},${from.lat};${to.lon},${to.lat}`,
        {
            params: {
                overview: "full",
                geometries: "geojson",
                steps: true,
            },
        }
    );

    if (!data.routes || !data.routes.length) {
        return null;
    }

    return data.routes[0];
};

const createLogs = (hours) => {
    let left = hours;
    let day = 1;
    let logs = [];

    while (left > 0) {
        const drive = left >= 11 ? 11 : left;

        logs.push({
            day,
            drivingHours: drive,
            onDutyHours: drive + 1,
            offDutyHours: 24 - (drive + 1),
            sleeperHours: 10,
        });

        left -= drive;
        day++;
    }

    return logs;
};

const buildTripData = ({ currentLocation, pickupLocation, dropoffLocation, currentCycleUsedHours, route1, route2, }) => {

    /* INDIVIDUAL DISTANCE */
    const distanceToPickup = +(route1.distance / 1000).toFixed(1);

    const distanceToDropoff = +(route2.distance / 1000).toFixed(1);

    /* TOTAL DISTANCE */
    const totalMeters = route1.distance + route2.distance;

    const distanceKm = +(totalMeters / 1000).toFixed(1);

    const distanceMiles = +(totalMeters / 1609.34).toFixed(1);

    /* TIME */
    const driveHours = Math.ceil((route1.duration + route2.duration) / 3600);

    /* FUEL STOP */
    const fuelStops = Math.floor(distanceMiles / FUEL_STOP_MILES);

    const cycleLeft = MAX_CYCLE - Number(currentCycleUsedHours);

    /* STOPS */
    const stopsAndRests = [];

    for (let i = 1; i <= fuelStops; i++) {
        stopsAndRests.push({
            stopType: "Fuel Stop",
            location: `Stop ${i}`,
            afterMiles: i * FUEL_STOP_MILES,
            restHours: 0.5,
        });
    }

    /* INSTRUCTIONS */
    const routeInstructions = [];

    route1.legs[0].steps.forEach((step) => {
        routeInstructions.push(
            step.maneuver
                ?.instruction ||
            "Continue"
        );
    }
    );

    route2.legs[0].steps.forEach((step) => {
        routeInstructions.push(
            step.maneuver
                ?.instruction ||
            "Continue"
        );
    }
    );

    /* ROUTE PATH */
    const routePath = [...route1.geometry.coordinates, ...route2.geometry.coordinates,];

    return {
        currentLocation,
        pickupLocation,
        dropoffLocation,
        currentCycleUsedHours,

        distanceToPickup,
        distanceToDropoff,
        distanceKm,

        cycleLeft,

        routeInstructions,
        routePath,
        stopsAndRests,

        dailyLogSheets: createLogs(driveHours),
    };
};

module.exports = { geocodeLocation, getRoute, buildTripData, };