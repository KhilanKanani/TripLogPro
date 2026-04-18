import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    GoogleMap,
    useJsApiLoader,
    DirectionsRenderer,
    Marker,
} from "@react-google-maps/api";

import {
    ArrowLeft,
    Fuel,
    Clock3,
    Truck,
    ShieldCheck,
    Route,
    Wallet,
    Navigation,
} from "lucide-react";

const RouteMap = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const trip = state?.trip || {
        pickup: "Rajkot, Gujarat, India",
        dropoff: "Mumbai, Maharashtra, India",
        vehicleType: "Car",
        distanceKm: 450,
        durationText: "8 Hours",
        fuelStops: 1,
        fuelCost: 2400,
        cycleLeft: 68,
    };

    const [directions, setDirections] = useState<any>(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_KEY,
    });

    const center = useMemo(
        () => ({
            lat: 22.3039,
            lng: 70.8022,
        }),
        []
    );

    useEffect(() => {
        if (!isLoaded) return;

        const service =
            new window.google.maps.DirectionsService();

        service.route(
            {
                origin: trip.pickup,
                destination: trip.dropoff,
                travelMode:
                    window.google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (
                    status ===
                    window.google.maps.DirectionsStatus.OK
                ) {
                    setDirections(result);
                }
            }
        );
    }, [isLoaded]);

    if (!isLoaded) {
        return (
            <div className="h-screen flex items-center justify-center text-xl font-bold">
                Loading Google Map...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100">

            {/* TOP BAR */}
            <div className="sticky top-0 z-50 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-3 h-[72px] flex items-center justify-between">

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate(-1)}
                            className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center"
                        >
                            <ArrowLeft size={18} />
                        </button>

                        <div>
                            <p className="text-xs text-slate-500 uppercase tracking-[0.25em]">
                                Live Trip
                            </p>
                            <h2 className="font-bold text-slate-900">
                                {trip.pickup} → {trip.dropoff}
                            </h2>
                        </div>
                    </div>

                    <div className="hidden md:flex px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold">
                        Active
                    </div>

                </div>
            </div>

            {/* BODY */}
            <div className="max-w-7xl mx-auto px-3 py-6 grid lg:grid-cols-[1.7fr_0.9fr] gap-6">

                {/* MAP */}
                <div className="relative rounded-[30px] overflow-hidden border border-slate-200 bg-white shadow-sm">

                    <GoogleMap
                        mapContainerStyle={{
                            width: "100%",
                            height: "720px",
                        }}
                        center={center}
                        zoom={7}
                        options={{
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false,
                            zoomControl: true,
                        }}
                    >
                        {directions && (
                            <DirectionsRenderer
                                directions={directions}
                                options={{
                                    suppressMarkers: false,
                                    polylineOptions: {
                                        strokeColor: "#111827",
                                        strokeWeight: 6,
                                    },
                                }}
                            />
                        )}

                        {!directions && (
                            <Marker position={center} />
                        )}
                    </GoogleMap>

                    {/* FLOAT INFO CARD */}
                    <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 flex items-center justify-between">

                        <div>
                            <p className="text-xs text-slate-500 uppercase">
                                Estimated Arrival
                            </p>
                            <h3 className="font-bold text-slate-900 mt-1">
                                {trip.durationText}
                            </h3>
                        </div>

                        <div className="w-12 h-12 rounded-xl bg-slate-950 text-white flex items-center justify-center">
                            <Navigation size={20} />
                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-4">

                    <StatCard
                        icon={<Route size={18} />}
                        title="Distance"
                        value={`${trip.distanceKm} km`}
                    />

                    <StatCard
                        icon={<Clock3 size={18} />}
                        title="Duration"
                        value={trip.durationText}
                    />

                    <StatCard
                        icon={<Fuel size={18} />}
                        title="Fuel Stops"
                        value={trip.fuelStops}
                    />

                    <StatCard
                        icon={<Wallet size={18} />}
                        title="Fuel Cost"
                        value={`₹${trip.fuelCost}`}
                    />

                    <StatCard
                        icon={<Truck size={18} />}
                        title="Vehicle"
                        value={trip.vehicleType}
                    />

                    <StatCard
                        icon={<ShieldCheck size={18} />}
                        title="Cycle Left"
                        value={`${trip.cycleLeft} Hr`}
                    />

                </div>

            </div>
        </div>
    );
};

const StatCard = ({ icon, title, value }: any) => (
    <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm">
        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
            {icon}
        </div>

        <p className="text-sm text-slate-500 mt-4">
            {title}
        </p>

        <h3 className="text-xl font-bold text-slate-950 mt-1">
            {value}
        </h3>
    </div>
);

export default RouteMap;