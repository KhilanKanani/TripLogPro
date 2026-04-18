import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
    useMap,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import {
    ArrowLeft,
    MapPin,
    Route,
    Clock3,
    Fuel,
    Wallet,
    Truck,
    ShieldCheck,
    Navigation,
} from "lucide-react";

/* ICON FIX */
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const Map = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const trip = state?.trip;

    const [routeLine, setRouteLine] = useState<any[]>([]);
    const [pickupPos, setPickupPos] =
        useState<any>(null);
    const [dropPos, setDropPos] =
        useState<any>(null);

    useEffect(() => {
        if (!trip) return;

        if (
            trip.routePath &&
            Array.isArray(trip.routePath)
        ) {
            const coords =
                trip.routePath.map(
                    (item: any) => [
                        item[1],
                        item[0],
                    ]
                );

            setRouteLine(coords);

            setPickupPos(coords[0]);

            setDropPos(
                coords[coords.length - 1]
            );
        }
    }, [trip]);

    if (!trip) {
        return (
            <div className="h-screen flex items-center justify-center text-xl font-bold">
                No Trip Found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100">

            {/* TOP NAV */}
            <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">

                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-[74px] flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <button
                            onClick={() =>
                                navigate(-1)
                            }
                            className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center"
                        >
                            <ArrowLeft
                                size={18}
                            />
                        </button>

                        <div>
                            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                                Smart Route
                            </p>

                            <h2 className="text-sm sm:text-lg font-bold text-slate-950">
                                {
                                    trip.pickup
                                }{" "}
                                →
                                {
                                    trip.dropoff
                                }
                            </h2>
                        </div>

                    </div>

                    <div className="hidden md:flex px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold">
                        Live Active
                    </div>

                </div>

            </div>

            {/* BODY */}
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 grid lg:grid-cols-[1.7fr_0.9fr] gap-6">

                {/* MAP CARD */}
                <div className="relative rounded-[32px] overflow-hidden bg-white border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                    <MapContainer
                        center={
                            pickupPos || [
                                22.3039,
                                70.8022,
                            ]
                        }
                        zoom={7}
                        style={{
                            height: "760px",
                            width: "100%",
                        }}
                    >
                        <TileLayer
                            attribution="&copy; OpenStreetMap"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {pickupPos && (
                            <Marker
                                position={
                                    pickupPos
                                }
                            >
                                <Popup>
                                    Pickup:{" "}
                                    {
                                        trip.pickup
                                    }
                                </Popup>
                            </Marker>
                        )}

                        {dropPos && (
                            <Marker
                                position={
                                    dropPos
                                }
                            >
                                <Popup>
                                    Dropoff:{" "}
                                    {
                                        trip.dropoff
                                    }
                                </Popup>
                            </Marker>
                        )}

                        {routeLine.length >
                            0 && (
                                <Polyline
                                    positions={
                                        routeLine
                                    }
                                    pathOptions={{
                                        color: "#2563eb",
                                        weight: 7,
                                    }}
                                />
                            )}

                        <FitRoute
                            pickup={
                                pickupPos
                            }
                            drop={dropPos}
                        />
                    </MapContainer>

                    {/* FLOAT ETA */}
                    <div className="absolute left-5 right-5 bottom-5 bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-xl p-5 flex items-center justify-between">

                        <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                                Estimated
                                Arrival
                            </p>

                            <h3 className="mt-1 text-xl font-bold text-slate-950">
                                {
                                    trip.durationText
                                }
                            </h3>
                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-lg">
                            <Navigation
                                size={22}
                            />
                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-4">

                    <StatCard
                        icon={
                            <MapPin
                                size={18}
                            />
                        }
                        title="Pickup"
                        value={
                            trip.pickup
                        }
                    />

                    <StatCard
                        icon={
                            <MapPin
                                size={18}
                            />
                        }
                        title="Dropoff"
                        value={
                            trip.dropoff
                        }
                    />

                    <StatCard
                        icon={
                            <Route
                                size={18}
                            />
                        }
                        title="Distance"
                        value={`${trip.distanceKm} km`}
                    />

                    <StatCard
                        icon={
                            <Clock3
                                size={18}
                            />
                        }
                        title="Duration"
                        value={
                            trip.durationText
                        }
                    />

                    <StatCard
                        icon={
                            <Fuel
                                size={18}
                            />
                        }
                        title="Fuel Stops"
                        value={
                            trip.fuelStops
                        }
                    />

                    <StatCard
                        icon={
                            <Wallet
                                size={18}
                            />
                        }
                        title="Fuel Cost"
                        value={`₹${trip.fuelCost}`}
                    />

                    <StatCard
                        icon={
                            <Truck
                                size={18}
                            />
                        }
                        title="Vehicle"
                        value={
                            trip.vehicleType
                        }
                    />

                    <StatCard
                        icon={
                            <ShieldCheck
                                size={18}
                            />
                        }
                        title="Cycle Left"
                        value={`${trip.cycleLeft} Hr`}
                    />

                </div>

            </div>

        </div>
    );
};

const FitRoute = ({
    pickup,
    drop,
}: any) => {
    const map = useMap();

    useEffect(() => {
        if (pickup && drop) {
            map.fitBounds(
                [pickup, drop],
                {
                    padding: [
                        50, 50,
                    ],
                }
            );
        }
    }, [pickup, drop]);

    return null;
};

const StatCard = ({
    icon,
    title,
    value,
}: any) => (
    <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-xl transition-all duration-300">

        <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900">
            {icon}
        </div>

        <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mt-4">
            {title}
        </p>

        <h3 className="text-sm sm:text-lg font-bold text-slate-950 mt-1 break-words">
            {value}
        </h3>

    </div>
);

export default Map;