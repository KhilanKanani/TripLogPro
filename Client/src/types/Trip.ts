export interface TripFormData {
    current: string;
    pickup: string;
    dropoff: string;
    usedHours: number;
}

export interface TripResponse {
    distance: number;
    driveHours: number;
    fuelStops: number;
    remainingCycle: number;
}