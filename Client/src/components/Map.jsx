import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap, } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Navigation, MapPin, FileText, ShieldCheck, Gauge, Truck, ArrowLeft, } from "lucide-react";

/* LEAFLET ICON FIX */
delete (L.Icon.Default.prototype)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const Map = () => {
    const { state } = useLocation();

    const trip = state?.trip;
    const navigate = useNavigate()
    const [routeLine, setRouteLine] = useState([]);
    const [pickupPos, setPickupPos] = useState(null);
    const [dropPos, setDropPos] = useState(null);

    useEffect(() => {
        if (!trip) return;

        if (trip.routePath && Array.isArray(trip.routePath)) {
            const coords =
                trip.routePath.map((item) => [
                    item[1],
                    item[0],
                ]);

            setRouteLine(coords);
            setPickupPos(coords[0]);
            setDropPos(coords[coords.length - 1]);
        }
    }, [trip]);

    if (!trip)
        return (
            <div className="h-screen flex items-center justify-center text-xl font-bold">
                No Trip Found
            </div>
        );

    return (
        <div className="py-10 font-serif pt-10 min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200">

            {/* MAIN */}
            <div className="max-w-7xl mx-auto px-3">

                <button
                    onClick={() => navigate(-1)}
                    className="mb-5 cursor-pointer text-sm font-serif inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-blue-600 transition-all duration-300"
                >
                    <ArrowLeft size={18} />
                    <span>Back To Trip</span>
                </button>

                {/* MAP TOP ONLY */}
                <div className="rounded overflow-hidden border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
                    <MapContainer
                        center={
                            pickupPos || [
                                22.30,
                                70.80,
                            ]
                        }
                        zoom={7}
                        style={{
                            width: "100%",
                            height:
                                window.innerWidth <
                                    640
                                    ? "320px"
                                    : "620px",
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
                                    Pickup
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
                                    Dropoff
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
                            pickup={pickupPos}
                            drop={dropPos}
                        />
                    </MapContainer>
                </div>

                <div className="mt-5 bg-white/90 backdrop-blur-xl border border-slate-200 rounded shadow-xl p-3 sm:p-5 grid grid-cols-2 gap-3">
                    <MiniCard
                        icon={
                            <Gauge size={18} />
                        }
                        title="Cycle Used"
                        value={`${trip.currentCycleUsedHours || 0
                            } Hr`}
                    />

                    <MiniCard
                        icon={
                            <Truck size={18} />
                        }
                        title="Status"
                        value="Running"
                    />

                </div>

                {/* DETAILS BELOW */}
                <div className="grid xl:grid-cols-3 gap-5 mt-5">

                    {/* LEFT */}
                    <div className="xl:col-span-1 space-y-5">

                        <GlassCard
                            icon={
                                <MapPin size={18} />
                            }
                            title="Locations"
                        >
                            <InfoRow
                                label="Current"
                                value={
                                    trip.currentLocation
                                }
                            />
                            <InfoRow
                                label="Pickup"
                                value={
                                    trip.pickupLocation
                                }
                            />
                            <InfoRow
                                label="Dropoff"
                                value={
                                    trip.dropoffLocation
                                }
                            />
                        </GlassCard>

                        <GlassCard
                            icon={
                                <ShieldCheck size={18} />
                            }
                            title="Stops & Rests"
                        >
                            {trip.stopsAndRests
                                ?.length >
                                0 ? (
                                trip.stopsAndRests.map(
                                    (
                                        item,
                                        i
                                    ) => (
                                        <div
                                            key={
                                                i
                                            }
                                            className="rounded-2xl bg-slate-50 p-3 text-sm"
                                        >
                                            {
                                                item.stopType
                                            }{" "}
                                            •{" "}
                                            {
                                                item.afterMiles
                                            }{" "}
                                            Miles
                                        </div>
                                    )
                                )
                            ) : (
                                <p className="text-sm text-slate-500">
                                    No Stops
                                </p>
                            )}
                        </GlassCard>

                    </div>

                    {/* RIGHT */}
                    <div className="xl:col-span-2 space-y-5">

                        <GlassCard
                            icon={
                                <Navigation size={18} />
                            }
                            title="Route Instructions"
                        >
                            <div className="grid md:grid-cols-3 gap-3">

                                {trip.routeInstructions
                                    ?.length >
                                    0 ? (
                                    trip.routeInstructions.map(
                                        (
                                            item,
                                            i
                                        ) => (
                                            <div
                                                key={
                                                    i
                                                }
                                                className="rounded bg-slate-100 p-3 text-sm text-slate-700"
                                            >
                                                {i +
                                                    1}
                                                .{" "}
                                                {
                                                    item
                                                }
                                            </div>
                                        )
                                    )
                                ) : (
                                    <p>
                                        No Data
                                    </p>
                                )}

                            </div>
                        </GlassCard>

                        <GlassCard
                            icon={
                                <FileText size={18} />
                            }
                            title="Daily Logs"
                        >
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

                                {trip.dailyLogSheets
                                    ?.length >
                                    0 ? (
                                    trip.dailyLogSheets.map(
                                        (
                                            log,
                                            i
                                        ) => (
                                            <div
                                                key={
                                                    i
                                                }
                                                className="rounded bg-slate-100 p-4"
                                            >
                                                <p className="font-bold text-slate-950">
                                                    Day{" "}
                                                    {
                                                        log.day
                                                    }
                                                </p>

                                                <p className="text-sm  text-slate-500 mt-2">
                                                    Driving:{" "}
                                                    {
                                                        log.drivingHours
                                                    }{" "}
                                                    Hr
                                                </p>

                                                <p className="text-sm  text-slate-500">
                                                    Duty:{" "}
                                                    {
                                                        log.onDutyHours
                                                    }{" "}
                                                    Hr
                                                </p>

                                                <p className="text-sm  text-slate-500">
                                                    Off:{" "}
                                                    {
                                                        log.offDutyHours
                                                    }{" "}
                                                    Hr
                                                </p>

                                            </div>
                                        )
                                    )
                                ) : (
                                    <p>
                                        No Logs
                                    </p>
                                )}

                            </div>
                        </GlassCard>

                    </div>

                </div>

            </div>

        </div>
    );
};

/* CARD */
const GlassCard = ({ icon, title, children, }) => (
    <div className="rounded bg-white border border-slate-200 p-4 h-90 overflow-y-auto sm:p-6 shadow-[0_15px_50px_rgba(15,23,42,0.06)]">

        <div className="flex items-center gap-3 mb-5">

            <div className="w-11 h-11 rounded bg-slate-950 text-white flex items-center justify-center">
                {icon}
            </div>

            <h3 className="font-bold text-slate-950 text-lg">
                {title}
            </h3>

        </div>

        <div className="space-y-3">
            {children}
        </div>

    </div>
);

/* MINI TOP */
const MiniCard = ({ icon, title, value, }) => (
    <div className="rounded bg-white border border-slate-200 p-3">

        <div className="flex items-center gap-2 text-slate-600 text-xs uppercase tracking-[0.18em]">
            {icon}
            {title}
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-950 mt-2">
            {value}
        </h3>

    </div>
);

/* INFO */
const InfoRow = ({ label, value, }) => (
    <div className="rounded bg-slate-100 p-3">

        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            {label}
        </p>

        <h4 className="text-sm font-semibold text-slate-950 mt-1 break-words">
            {value}
        </h4>

    </div>
);

/* FIT MAP */
const FitRoute = ({ pickup, drop, }) => {
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

export default Map;