import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    LocateFixed,
    MapPinned,
    Navigation,
    Truck,
    CalendarDays,
    Fuel,
    Clock3,
    Route,
    ArrowRight,
    Sparkles,
    CheckCircle2,
    ShieldCheck,
} from "lucide-react";
import { BACKEND_URL } from "../main";
import { toast } from "sonner";

const Planner = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        currentLocation: "",
        pickupLocation: "",
        dropoffLocation: "",
        currentCycleUsedHours: "",
    });

    const generateRoute = async () => {
        const toastId = toast.loading("Generating smart route...");

        try {
            setLoading(true);

            const { data } = await axios.post(`${BACKEND_URL}/api/trip/generate`, form, { withCredentials: true, });

            toast.success("Route generated successfully!", { id: toastId, });

            navigate("/map", {
                state: {
                    trip: data.trip
                },
            });
        }

        catch (error: any) {
            console.log(error);
            toast.error(error?.response?.data?.message || "Failed to generate route", { id: toastId, });
        }

        finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100">

            {/* Hero */}
            <section className="relative max-w-7xl mx-auto px-3 pt-25 sm:pt-30 pb-15 overflow-hidden">

                {/* BACKGROUND GLOW */}
                <div className="absolute -top-10 left-0 w-80 h-80 bg-blue-200/40 blur-[140px] rounded-full" />
                <div className="absolute top-10 right-0 w-96 h-96 bg-cyan-200/40 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-slate-200/40 blur-[140px] rounded-full" />

                <div className="relative grid lg:grid-cols-2 gap-8 xl:gap-15 items-start">
                    {/* LEFT CONTENT */}
                    <div className="pt-2">

                        {/* TAG */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200 shadow-sm text-xs font-semibold text-slate-600">
                            <Sparkles size={14} className="text-emerald-500" />
                            AI Logistics Planner
                        </div>

                        {/* TITLE */}
                        <h1 className="mt-6 text-2xl sm:text-4xl font-serif font-bold text-slate-950 leading-[1.05]">
                            Generate Smart
                            Routes With
                            Real Data
                        </h1>

                        {/* TEXT */}
                        <p className="mt-6 text-slate-600 text-sm sm:text-base leading-8 max-w-xl">
                            Use AI route planning, live distance calculations,
                            ETA forecasting, fuel stops, and premium logistics
                            dashboards built for modern fleets.
                        </p>

                        {/* FEATURES */}
                        <div className="mt-8 grid sm:grid-cols-2 gap-4">

                            {[
                                "Google Map Integration",
                                "Live Route Distance",
                                "AI Fuel Predictions",
                                "Fleet Ready Planner",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 rounded bg-white/80 backdrop-blur-xl border border-slate-200 px-4 py-3 shadow-sm"
                                >
                                    <CheckCircle2
                                        size={18}
                                        className="text-emerald-500 shrink-0"
                                    />

                                    <span className="text-sm font-medium text-slate-700">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                        {/* STATS */}
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">

                            {/* CARD 1 */}
                            <div className="group rounded bg-white/85 backdrop-blur-xl border border-slate-200 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                                <div className="flex items-center justify-between">

                                    <div>
                                        <h4 className="text-2xl font-black text-slate-950 leading-none">
                                            94%
                                        </h4>

                                        <p className="text-sm text-slate-500 mt-2 font-medium">
                                            Route Efficiency
                                        </p>
                                    </div>


                                </div>

                                <div className="mt-4 h-2 rounded-full bg-slate-100 overflow-hidden">
                                    <div className="h-full w-[94%] rounded-full bg-emerald-500" />
                                </div>

                            </div>

                            {/* CARD 2 */}
                            <div className="group rounded bg-white/85 backdrop-blur-xl border border-slate-200 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                                <div className="flex items-center justify-between">

                                    <div>
                                        <h4 className="text-2xl font-black text-slate-950 leading-none">
                                            22%
                                        </h4>

                                        <p className="text-sm text-slate-500 mt-2 font-medium">
                                            Fuel Saved
                                        </p>
                                    </div>

                                </div>

                                <div className="mt-4 h-2 rounded-full bg-slate-100 overflow-hidden">
                                    <div className="h-full w-[22%] rounded-full bg-cyan-500" />
                                </div>

                            </div>

                            {/* CARD 3 */}
                            <div className="group rounded bg-white/85 backdrop-blur-xl border border-slate-200 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                                <div className="flex items-center justify-between">

                                    <div>
                                        <h4 className="text-2xl font-black text-slate-950 leading-none">
                                            3X
                                        </h4>

                                        <p className="text-sm text-slate-500 mt-2 font-medium">
                                            Faster Planning
                                        </p>
                                    </div>

                                </div>

                                <div className="mt-4 h-2 rounded-full bg-slate-100 overflow-hidden">
                                    <div className="h-full w-[75%] rounded-full bg-violet-500" />
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT FORM PANEL */}
                    <div className="relative">

                        {/* FLOAT CARD */}
                        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-emerald-100 blur-3xl opacity-70" />

                        <div className="relative rounded bg-white/90 backdrop-blur-2xl border border-slate-200 p-5 sm:p-7 shadow-[0_40px_120px_rgba(15,23,42,0.10)]">

                            {/* HEADER */}
                            <div className="flex items-center justify-between pb-5 border-b border-slate-200">

                                <div>
                                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                                        Planner Panel
                                    </p>

                                    <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-11text-slate-950">
                                        Create Trip
                                    </h2>
                                </div>

                                <div className="w-12 h-12 rounded bg-slate-950 text-white flex items-center justify-center shadow-lg">
                                    <Truck size={20} />
                                </div>

                            </div>

                            {/* FORM */}
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    generateRoute();
                                }}
                                className="mt-6 space-y-5"
                            >

                                {/* CURRENT LOCATION */}
                                <div>
                                    <label className="text-sm font-semibold text-slate-700">
                                        Current Location
                                    </label>

                                    <div className="mt-2 flex items-center gap-3 rounded bg-slate-50 border border-slate-200 px-4 py-3">
                                        <LocateFixed size={18} className="text-slate-500" />

                                        <input
                                            required
                                            placeholder="Chicago, IL"
                                            value={form.currentLocation}
                                            className="w-full bg-transparent outline-none"
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    currentLocation: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                {/* PICKUP */}
                                <div>
                                    <label className="text-sm font-semibold text-slate-700">
                                        Pickup Location
                                    </label>

                                    <div className="mt-2 flex items-center gap-3 rounded bg-slate-50 border border-slate-200 px-4 py-3">
                                        <MapPinned size={18} className="text-slate-500" />

                                        <input
                                            required
                                            placeholder="Dallas, TX"
                                            value={form.pickupLocation}
                                            className="w-full bg-transparent outline-none"
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    pickupLocation: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                {/* DROPOFF */}
                                <div>
                                    <label className="text-sm font-semibold text-slate-700">
                                        Dropoff Location
                                    </label>

                                    <div className="mt-2 flex items-center gap-3 rounded bg-slate-50 border border-slate-200 px-4 py-3">
                                        <Navigation size={18} className="text-slate-500" />

                                        <input
                                            required
                                            placeholder="Atlanta, GA"
                                            value={form.dropoffLocation}
                                            className="w-full bg-transparent outline-none"
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    dropoffLocation: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                {/* CURRENT CYCLE USED */}
                                <div>
                                    <label className="text-sm font-semibold text-slate-700">
                                        Current Cycle Used (Hrs)
                                    </label>

                                    <div className="mt-2 flex items-center gap-3 rounded bg-slate-50 border border-slate-200 px-4 py-3">
                                        <Clock3 size={18} className="text-slate-500" />

                                        <input
                                            type="number"
                                            required
                                            min="0"
                                            max="70"
                                            placeholder="12"
                                            value={form.currentCycleUsedHours}
                                            className="w-full bg-transparent outline-none"
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    currentCycleUsedHours:
                                                        e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                {/* SUBMIT */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full mt-2 px-6 py-4 rounded bg-slate-950 text-white font-semibold flex items-center justify-center gap-2 hover:-translate-y-1 transition-all duration-300"
                                >
                                    {!loading && <Route size={18} />}

                                    {loading
                                        ? "Generating..."
                                        : "Generate Trip"}

                                    {!loading && <ArrowRight size={18} />}
                                </button>

                            </form>

                        </div>

                    </div>
                </div>
            </section>

            {/* LIVE BENEFITS */}
            <section className="max-w-7xl mx-auto px-3 py-15">

                {/* HEADER */}
                <div className="text-center mb-10">

                    <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold uppercase text-slate-500">
                        Benefits
                    </p>

                    <h2 className="mt-4 text-2xl sm:text-4xl font-serif font-bold text-slate-950 leading-tight">
                        Smart Features Built <br className="hidden sm:block" />
                        For Modern Logistics
                    </h2>

                    <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-8">
                        Powerful planning tools that help fleets reduce costs,
                        improve delivery speed, and generate intelligent routes
                        with real-time operational insights.
                    </p>

                </div>

                {/* CARDS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    {[
                        {
                            title: "AI Route Engine",
                            desc: "Find fastest and most cost-efficient delivery routes instantly.",
                            value: "Smart",
                            icon: <Route size={20} />,
                        },
                        {
                            title: "Fuel Optimizer",
                            desc: "Auto estimate fuel usage and refill stop planning.",
                            value: "Save 22%",
                            icon: <Fuel size={20} />,
                        },
                        {
                            title: "Driver Compliance",
                            desc: "Track cycle hours and maintain safe driving limits.",
                            value: "70 Hr Rule",
                            icon: <ShieldCheck size={20} />,
                        },
                        {
                            title: "Live ETA",
                            desc: "Accurate arrival prediction using route intelligence.",
                            value: "Real-Time",
                            icon: <Clock3 size={20} />,
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group rounded bg-white border border-slate-200 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >

                            {/* ICON */}
                            <div className="w-12 h-12 rounded bg-slate-950 text-white flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                                {item.icon}
                            </div>

                            {/* TAG */}
                            <p className="mt-5 text-xs uppercase tracking-[0.22em] text-slate-500 font-semibold">
                                {item.value}
                            </p>

                            {/* TITLE */}
                            <h3 className="mt-2 text-lg font-bold text-slate-950">
                                {item.title}
                            </h3>

                            {/* DESC */}
                            <p className="mt-2 text-sm text-slate-500 leading-7">
                                {item.desc}
                            </p>

                            {/* LINE */}
                            <div className="mt-5 h-[2px] w-0 bg-slate-950 group-hover:w-full transition-all duration-500" />

                        </div>
                    ))}

                </div>

            </section>

            {/* HOW IT WORKS */}
            <section className="max-w-7xl mx-auto px-3 py-15">

                {/* HEADER */}
                <div className="text-center mb-10">

                    <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold uppercase text-slate-500">
                        Process
                    </p>

                    <h2 className="mt-4 text-2xl sm:text-4xl font-serif font-bold text-slate-950 leading-tight">
                        How Planner Works
                    </h2>

                    <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-500 leading-8">
                        Generate routes in seconds with a seamless planning flow built
                        for logistics teams, dispatchers, and modern fleet operations.
                    </p>

                </div>

                {/* STEPS */}
                <div className="grid md:grid-cols-3 gap-5">

                    {[
                        {
                            step: "01",
                            title: "Enter Locations",
                            desc: "Add your current position, pickup point, and final destination.",
                        },
                        {
                            step: "02",
                            title: "Generate Route",
                            desc: "AI calculates distance, ETA, fuel stops, and trip insights.",
                        },
                        {
                            step: "03",
                            title: "Open Map View",
                            desc: "See the full route path on Google Map with live details.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group relative rounded bg-white border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                        >

                            {/* TOP GLOW */}
                            <div className="absolute -top-8 -right-8 w-24 h-24 bg-slate-100 rounded-full blur-2xl opacity-70 group-hover:scale-125 transition-all duration-500" />

                            {/* STEP NUMBER */}
                            <div className="relative">
                                <span className="text-5xl sm:text-6xl font-black text-slate-200 group-hover:text-slate-300 transition-all duration-300">
                                    {item.step}
                                </span>
                            </div>

                            {/* TITLE */}
                            <h3 className="relative mt-5 text-xl font-bold text-slate-950">
                                {item.title}
                            </h3>

                            {/* DESC */}
                            <p className="relative mt-3 text-sm text-slate-500 leading-7">
                                {item.desc}
                            </p>

                            {/* BOTTOM LINE */}
                            <div className="mt-6 h-[2px] w-12 bg-slate-950 group-hover:w-full transition-all duration-500" />

                        </div>
                    ))}

                </div>

            </section>

        </div>
    );
};

export default Planner; 