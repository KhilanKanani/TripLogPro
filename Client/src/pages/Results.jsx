import {
    BarChart3,
    TrendingUp,
    Truck,
    Route,
    Fuel,
    Clock3,
    ShieldCheck,
    CheckCircle2,
    ArrowUpRight,
    Activity,
    Gauge,
    MapPinned,
    Loader2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../main";
import axios from "axios";

const Results = () => {

    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTrips = async () => {
        try {
            const { data } = await axios.get(`${BACKEND_URL}/api/trip/all`);

            if (data.success) {
                setTrips(data.trips);
            }
        }

        catch (error) {
            console.log(error);
        }

        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTrips();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 overflow-hidden">

            {/* HERO */}
            <section className="relative max-w-7xl mx-auto px-3 pt-25 sm:pt-30 pb-16">

                {/* GLOW */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/40 blur-[140px] rounded-full" />
                <div className="absolute top-10 right-0 w-80 h-80 bg-cyan-200/40 blur-[140px] rounded-full" />

                <div className="relative grid lg:grid-cols-2 gap-8 items-center">

                    {/* LEFT */}
                    <div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-600">
                            <BarChart3 size={14} className="text-emerald-500" />
                            Live Analytics Dashboard
                        </div>

                        <h1 className="mt-6 text-2xl sm:text-4xl font-serif font-bold text-slate-950 leading-tight">
                            Results & Performance <br />
                            Intelligence
                        </h1>

                        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-6 max-w-xl">
                            Track route efficiency, fuel savings, fleet growth,
                            trip performance, and real-time logistics insights
                            with a premium analytics dashboard.
                        </p>

                        {/* FEATURES */}
                        <div className="mt-8 space-y-3">

                            {[
                                "Live Route Metrics",
                                "Fuel Usage Reports",
                                "Trip Performance Analysis",
                                "Fleet Optimization Data",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 text-sm text-slate-700"
                                >
                                    <CheckCircle2
                                        size={16}
                                        className="text-emerald-500"
                                    />
                                    {item}
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* RIGHT METRICS PANEL */}
                    <div className="rounded bg-white border border-slate-200 p-5 sm:p-7 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">

                        <div className="flex items-center justify-between border-b border-slate-200 pb-5">

                            <div>
                                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                                    Monthly Results
                                </p>

                                <h2 className="text-2xl font-serif font-bold mt-2 text-slate-950">
                                    Performance Snapshot
                                </h2>
                            </div>

                            <div className="w-14 h-14 rounded bg-slate-950 text-white flex items-center justify-center">
                                <TrendingUp size={22} />
                            </div>

                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-4">

                            <div className="rounded bg-slate-100 p-4">
                                <Truck size={18} />
                                <p className="text-xs sm:text-sm text-slate-500 mt-3">
                                    Trips Completed
                                </p>
                                <h4 className="text-xl sm:text-2xl font-bold mt-1">
                                    1,248
                                </h4>
                            </div>

                            <div className="rounded bg-slate-100 p-4">
                                <Fuel size={18} />
                                <p className="text-xs sm:text-sm text-slate-500 mt-3">
                                    Fuel Saved
                                </p>
                                <h4 className="text-xl sm:text-2xl font-bold mt-1">
                                    22%
                                </h4>
                            </div>

                            <div className="rounded bg-slate-100 p-4">
                                <Clock3 size={18} />
                                <p className="text-xs sm:text-sm text-slate-500 mt-3">
                                    Avg Delivery
                                </p>
                                <h4 className="text-xl sm:text-2xl font-bold mt-1">
                                    3.2h
                                </h4>
                            </div>

                            <div className="rounded bg-slate-100 p-4">
                                <ShieldCheck size={18} />
                                <p className="text-xs sm:text-sm text-slate-500 mt-3">
                                    Compliance
                                </p>
                                <h4 className="text-xl sm:text-2xl font-bold mt-1 text-emerald-600">
                                    98%
                                </h4>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* KPI SECTION */}
            <section className="max-w-7xl mx-auto px-3 pb-10">

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    {[
                        {
                            icon: <Route size={20} />,
                            title: "Routes Planned",
                            value: "8,420",
                            growth: "+18%",
                        },
                        {
                            icon: <Gauge size={20} />,
                            title: "Efficiency Score",
                            value: "94%",
                            growth: "+7%",
                        },
                        {
                            icon: <MapPinned size={20} />,
                            title: "Miles Covered",
                            value: "1.8M",
                            growth: "+25%",
                        },
                        {
                            icon: <Activity size={20} />,
                            title: "Fleet Active",
                            value: "128",
                            growth: "+11%",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="rounded bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                        >
                            <div className="w-12 h-12 rounded bg-slate-950 text-white flex items-center justify-center">
                                {item.icon}
                            </div>

                            <p className="mt-5 text-sm text-slate-500">
                                {item.title}
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-slate-950">
                                {item.value}
                            </h3>

                            <div className="mt-3 inline-flex items-center gap-1 text-emerald-600 text-sm font-semibold">
                                <ArrowUpRight size={16} />
                                {item.growth}
                            </div>
                        </div>
                    ))}

                </div>

            </section>

            {/* REPORT TABLE */}
            <section className="max-w-7xl mx-auto px-3 pb-20">

                <div className="rounded bg-white border border-slate-200 shadow-sm overflow-hidden">

                    {/* HEADER */}
                    <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                        <div>
                            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                                Recent Reports
                            </p>

                            <h2 className="mt-2 text-2xl font-serif font-bold text-slate-950">
                                Route Activity Logs
                            </h2>
                        </div>

                        <div className="text-sm text-slate-500 font-medium">
                            Total Trips:{" "}
                            <span className="text-slate-950 font-bold">
                                {trips.length}
                            </span>
                        </div>

                    </div>

                    {/* LOADING */}
                    {loading ? (
                        <div className="p-16 flex justify-center">

                            <Loader2
                                size={34}
                                className="animate-spin text-slate-400"
                            />

                        </div>
                    ) : trips.length === 0 ? (

                        /* EMPTY */
                        <div className="p-16 text-center">

                            <h3 className="text-xl font-bold text-slate-900">
                                No Trips Found
                            </h3>

                            <p className="text-sm text-slate-500 mt-2">
                                Generate planner routes to see analytics.
                            </p>

                        </div>

                    ) : (

                        /* TABLE */
                        <div className="overflow-x-auto">

                            <table className="w-full min-w-[900px]">

                                <thead className="bg-slate-50">
                                    <tr className="text-left text-sm text-slate-500">

                                        <th className="px-6 py-4">
                                            Trip ID
                                        </th>

                                        <th className="px-6 py-4">
                                            Route
                                        </th>

                                        <th className="px-6 py-4">
                                            Distance Used
                                        </th>

                                        <th className="px-6 py-4">
                                            Cycle Used
                                        </th>

                                        <th className="px-6 py-4">
                                            Stops
                                        </th>

                                        <th className="px-6 py-4">
                                            Days
                                        </th>

                                        <th className="px-6 py-4">
                                            Created
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>

                                    {trips.map(
                                        (
                                            trip,
                                            i
                                        ) => (
                                            <tr
                                                key={
                                                    trip._id
                                                }
                                                className="border-t border-slate-100 hover:bg-slate-50 transition-all"
                                            >

                                                {/* ID */}
                                                <td className="px-6 py-4 font-semibold text-slate-950">
                                                    TRP-
                                                    {String(
                                                        i +
                                                        1001
                                                    )}
                                                </td>

                                                {/* ROUTE */}
                                                <td className="px-6 py-4 text-slate-700 font-medium">
                                                    {
                                                        trip.pickupLocation
                                                    }{" "}
                                                    →
                                                    {
                                                        trip.dropoffLocation
                                                    }
                                                </td>

                                                {/* DISTANCE */}
                                                <td className="px-6 py-4 text-slate-600">
                                                    {
                                                        trip.distanceKm
                                                    }{" "}
                                                    km
                                                </td>

                                                {/* CYCLE */}
                                                <td className="px-6 py-4 text-slate-600">
                                                    {
                                                        trip.currentCycleUsedHours
                                                    }{" "}
                                                    Hr
                                                </td>

                                                {/* STOPS */}
                                                <td className="px-6 py-4">

                                                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                                                        {trip.stopsAndRests
                                                            ?.length ||
                                                            0}{" "}
                                                        Stops
                                                    </span>

                                                </td>

                                                {/* DAYS */}
                                                <td className="px-6 py-4">

                                                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
                                                        {trip.dailyLogSheets
                                                            ?.length ||
                                                            1}{" "}
                                                        Days
                                                    </span>

                                                </td>

                                                {/* CREATED */}
                                                <td className="px-6 py-4 text-slate-500 text-sm">
                                                    {new Date(
                                                        trip.createdAt
                                                    ).toLocaleDateString()}
                                                </td>

                                            </tr>
                                        )
                                    )}

                                </tbody>

                            </table>

                        </div>
                    )}

                </div>

            </section>

        </div>
    );
};

export default Results;