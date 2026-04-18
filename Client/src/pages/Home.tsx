import { Link } from "react-router-dom";
import {
    Truck,
    Route,
    Fuel,
    ShieldCheck,
    Clock3,
    ArrowRight,
    MapPinned,
    BarChart3,
    CheckCircle2,
} from "lucide-react";
import {
    Code2,
    BriefcaseBusiness,
    Layers3,
} from "lucide-react";
import { Globe, ExternalLink } from "lucide-react";


const Home = () => {
    const features = [
        {
            icon: <Route size={22} />,
            title: "Smart Route Planning",
            desc: "Generate fastest and safest routes with optimized truck navigation.",
        },
        {
            icon: <Fuel size={22} />,
            title: "Fuel Stop Logic",
            desc: "Auto-detect fueling stations based on trip distance and load needs.",
        },
        {
            icon: <Clock3 size={22} />,
            title: "ELD Time Logs",
            desc: "Automatic driving hours, rest breaks and cycle calculations.",
        },
        {
            icon: <ShieldCheck size={22} />,
            title: "DOT Compliance",
            desc: "Keep drivers aligned with duty status and legal driving rules.",
        },
    ];

    const skills = [
        "React.js + TypeScript Frontend Development",
        "Node.js + Express.js Backend Engineering",
        "MongoDB Database Design & Optimization",
        "Redux Toolkit State Management",
        "Tailwind CSS + Premium Responsive UI Design",
        "REST API Development & Third-Party Integration",
        "Real-Time Apps using Socket.IO",
        "Authentication (JWT / Role Based Access)",
        "Admin Panel & Dashboard Architecture",
        "E-Commerce Platform Development",
        "MERN Stack Full Project Deployment",
        "Data Structures & Algorithms (430+ Problems)",
    ];

    const stats = [
        { number: "50K+", label: "Trips Planned" },
        { number: "99.9%", label: "Accuracy" },
        { number: "24/7", label: "System Active" },
        { number: "1000+", label: "Fleet Users" },
    ];

    return (
        <div className=" bg-gradient-to-b from-slate-100 via-white to-slate-100 text-slate-900 overflow-hidden">

            {/* HERO */}
            <section className="relative max-w-7xl mx-auto px-3 pt-25 sm:pt-30 pb-15 overflow-hidden">
                {/* PREMIUM BACKGROUND GLOW */}
                <div className="absolute -top-10 left-0 w-72 h-72 bg-blue-200/40 blur-[120px] rounded-full" />
                <div className="absolute top-20 right-0 w-80 h-80 bg-cyan-200/40 blur-[140px] rounded-full" />
                <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-slate-200/50 blur-[130px] rounded-full" />

                <div className="relative grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        {/* BADGE */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200 shadow-[0_10px_35px_rgba(15,23,42,0.06)] text-xs  font-semibold text-slate-700">
                            <CheckCircle2 size={16} className="text-emerald-500" />
                            Trusted by Owners, Dispatchers & Drivers
                        </div>

                        {/* TITLE */}
                        <h1 className="mt-6 font-serif text-2xl sm:text-4xl font-bold leading-[1.05] tracking-tight text-slate-950">
                            Transform Every Trip <br />
                            <span className="text-slate-500">
                                Into Smart Performance
                            </span>
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-8 font-serif">
                            TripLog Pro empowers transport businesses with intelligent route
                            planning, automated fueling stops, ELD compliance logs,
                            real-time analytics, and operational insights all within one
                            premium digital platform designed for modern fleet growth.
                        </p>

                        {/* CTA */}
                        <div className="mt-5 flex flex-col sm:flex-row gap-4">

                            <Link
                                to="/planner"
                                className="group px-7 py-4 rounded bg-slate-950 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_25px_55px_rgba(15,23,42,0.18)] hover:-translate-y-1 hover:shadow-[0_35px_70px_rgba(15,23,42,0.22)] transition-all duration-300"
                            >
                                <MapPinned size={18} />
                                Start Planning
                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition"
                                />
                            </Link>

                            <Link
                                to="/results"
                                className="px-7 py-4 rounded bg-white border border-slate-200 text-slate-900 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300"
                            >
                                <BarChart3 size={18} />
                                View Dashboard
                            </Link>

                        </div>

                        {/* EXTRA TEXT */}
                        <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm text-slate-600 font-serif">

                            <div className="flex items-start gap-3">
                                <CheckCircle2 size={16} className="text-blue-600 mt-1 shrink-0" />
                                Reduce route delays and unnecessary mileage.
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 size={16} className="text-blue-600 mt-1 shrink-0" />
                                Improve fleet visibility and dispatch control.
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 size={16} className="text-blue-600 mt-1 shrink-0" />
                                Keep drivers compliant with legal work-hour rules.
                            </div>

                            <div className="flex items-start gap-3">
                                <CheckCircle2 size={16} className="text-blue-600 mt-1 shrink-0" />
                                Lower operating cost with optimized fuel planning.
                            </div>

                        </div>

                        {/* STATS */}
                        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">

                            {stats.map((item, i) => (
                                <div
                                    key={i}
                                    className="rounded bg-white/90 backdrop-blur-xl border border-slate-200 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-300"
                                >
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif">
                                        {item.number}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-6">
                                        {item.label}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative">
                        {/* MAIN CARD */}
                        <div className="relative rounded bg-white/85 backdrop-blur-2xl border border-slate-200 p-5 sm:p-6 shadow-[0_35px_90px_rgba(15,23,42,0.10)] overflow-hidden">

                            {/* HEADER */}
                            <div className="flex items-center justify-between pb-4 border-b border-slate-100">

                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                                        Live Operations
                                    </p>

                                    <h3 className="font-serif text-lg sm:text-2xl font-bold text-slate-950 mt-1">
                                        Route Intelligence Panel
                                    </h3>
                                </div>

                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-slate-950 text-white flex items-center justify-center shadow-lg">
                                    <Truck size={20} className="sm:w-[22px] sm:h-[22px]" />
                                </div>

                            </div>

                            {/* MIDDLE CUT SLIDER PANEL */}
                            <div className="mt-5 relative h-[300px] sm:h-[380px] rounded overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200">

                                {/* MAP BG */}
                                <div className="absolute inset-0 opacity-50 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />

                                {/* CUT LEFT PANEL */}
                                <div className="absolute left-0 top-0 bottom-0 hidden sm:block w-[50%] bg-white/90 backdrop-blur-xl p-5 shadow-md">

                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                                        Today Summary
                                    </p>

                                    <div className="mt-5 space-y-4">

                                        <div className="rounded bg-slate-100 p-4">
                                            <p className="text-sm text-slate-500">
                                                Distance
                                            </p>
                                            <h4 className="text-lg font-bold font-serif mt-1">
                                                1,240 mi
                                            </h4>
                                        </div>

                                        <div className="rounded bg-slate-100 p-4">
                                            <p className="text-sm text-slate-500">
                                                Fuel Stops
                                            </p>
                                            <h4 className="text-lg font-bold font-serif mt-1">
                                                2 Stops
                                            </h4>
                                        </div>

                                        <div className="rounded bg-slate-100 p-4">
                                            <p className="text-sm text-slate-500">
                                                Arrival ETA
                                            </p>
                                            <h4 className="text-lg font-bold font-serif mt-1">
                                                18h 20m
                                            </h4>
                                        </div>

                                    </div>

                                </div>

                                {/* MOBILE SUMMARY ONLY */}
                                <div className="absolute left-3 right-3 top-3 sm:hidden rounded bg-white/90 backdrop-blur-xl p-3 shadow-md z-20">
                                    <div className=" grid grid-cols-3 gap-2 text-center">

                                        <div>
                                            <p className="text-[10px] text-slate-500">
                                                Distance
                                            </p>
                                            <h4 className="text-xs font-bold">
                                                1,240 mi
                                            </h4>
                                        </div>

                                        <div>
                                            <p className="text-[10px] text-slate-500">
                                                Stops
                                            </p>
                                            <h4 className="text-xs font-bold">
                                                2
                                            </h4>
                                        </div>

                                        <div>
                                            <p className="text-[10px] text-slate-500">
                                                ETA
                                            </p>
                                            <h4 className="text-xs font-bold">
                                                18h
                                            </h4>
                                        </div>

                                    </div>
                                </div>

                                {/* ROUTE MAP */}
                                <svg
                                    className="absolute z-50 inset-0 w-full h-full"
                                    viewBox="0 0 500 420"
                                    preserveAspectRatio="none"
                                >

                                    {/* ROUTE PATH */}
                                    <path
                                        d="M180 70 C280 40, 310 260, 450 320"
                                        fill="none"
                                        stroke="#0f172a"
                                        strokeWidth="5"
                                        strokeDasharray="10 10"
                                        strokeLinecap="round"
                                    />

                                    {/* START POINT GLOW */}
                                    <circle
                                        cx="180"
                                        cy="70"
                                        r="10"
                                        fill="#34d399"
                                        opacity="0.25"
                                    >
                                        <animate
                                            attributeName="r"
                                            values="8;14;8"
                                            dur="2s"
                                            repeatCount="indefinite"
                                        />
                                        <animate
                                            attributeName="opacity"
                                            values="0.35;0.1;0.35"
                                            dur="2s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>

                                    {/* START DOT */}
                                    <circle
                                        cx="180"
                                        cy="70"
                                        r="6"
                                        fill="#10b981"
                                        stroke="white"
                                        strokeWidth="3"
                                    />

                                    {/* START LABEL */}
                                    <foreignObject
                                        x="140"
                                        y="85"
                                        width="90"
                                        height="34"
                                    >
                                        <div className="w-fit px-2 py-1 rounded-full bg-white/95 text-[10px] font-bold text-slate-800 border border-slate-200 shadow-md whitespace-nowrap">
                                            Ahmedabad
                                        </div>
                                    </foreignObject>

                                    {/* END POINT GLOW */}
                                    <circle
                                        cx="450"
                                        cy="320"
                                        r="10"
                                        fill="#fb7185"
                                        opacity="0.25"
                                    >
                                        <animate
                                            attributeName="r"
                                            values="8;14;8"
                                            dur="2s"
                                            repeatCount="indefinite"
                                        />
                                        <animate
                                            attributeName="opacity"
                                            values="0.35;0.1;0.35"
                                            dur="2s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>

                                    {/* END DOT */}
                                    <circle
                                        cx="450"
                                        cy="320"
                                        r="6"
                                        fill="#f43f5e"
                                        stroke="white"
                                        strokeWidth="3"
                                    />

                                    {/* END LABEL */}
                                    <foreignObject
                                        x="410"
                                        y="335"
                                        width="80"
                                        height="34"
                                    >
                                        <div className="w-fit px-2 py-1 rounded-full bg-white/95 text-[10px] font-bold text-slate-800 border border-slate-200 shadow-md whitespace-nowrap">
                                            Haliyad
                                        </div>
                                    </foreignObject>

                                </svg>

                            </div>

                            {/* FOOTER CARDS */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-5">

                                <div className="rounded bg-slate-100 p-3 sm:p-4">
                                    <p className="text-xs sm:text-sm text-slate-500">
                                        Efficiency Score
                                    </p>
                                    <h4 className="text-base sm:text-lg font-bold font-serif mt-1">
                                        94%
                                    </h4>
                                </div>

                                <div className="rounded bg-slate-100 p-3 sm:p-4">
                                    <p className="text-xs sm:text-sm text-slate-500">
                                        Compliance Status
                                    </p>
                                    <h4 className="text-base sm:text-lg font-bold font-serif mt-1 text-emerald-600">
                                        Active
                                    </h4>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="relative max-w-7xl mx-auto px-3 py-15 overflow-hidden">
                {/* HEADER */}
                <div className="relative text-center max-w-4xl mx-auto">
                    <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200 shadow-sm text-xs  font-semibold uppercase  text-slate-500">
                        Core Features
                    </p>

                    <h2 className="mt-6 text-2xl sm:text-4xl font-serif font-bold text-slate-950 leading-tight">
                        Everything Modern Fleet Teams Need
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-8 max-w-2xl mx-auto font-serif">
                        Designed for logistics leaders, dispatchers, and drivers who demand
                        speed, visibility, compliance, and measurable operational growth.
                    </p>

                </div>

                {/* FEATURE GRID */}
                <div className="relative mt-12 grid sm:grid-cols-2 xl:grid-cols-4 gap-5">

                    {features.map((item, i) => (
                        <div
                            key={i}
                            className="group relative rounded bg-white/85 backdrop-blur-2xl border border-slate-200 p-7 shadow-[0_20px_55px_rgba(15,23,42,0.06)] hover:-translate-y-2 hover:shadow-[0_30px_75px_rgba(15,23,42,0.10)] transition-all duration-500 overflow-hidden"
                        >

                            {/* CARD GLOW */}
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            {/* ICON */}
                            <div className="w-14 h-14 rounded bg-gradient-to-br from-slate-950 via-slate-800 to-slate-700 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>

                            {/* TITLE */}
                            <h3 className="mt-6 text-xl font-bold text-slate-950 font-serif">
                                {item.title}
                            </h3>

                            {/* DESC */}
                            <p className="mt-4 text-sm text-slate-500 leading-7">
                                {item.desc}
                            </p>

                            {/* BOTTOM LINK */}
                            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-700 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                Learn More
                                <span>→</span>
                            </div>

                            {/* FLOAT SHAPE */}
                            <div className="absolute -bottom-9 -right-9 w-25 h-25 rounded-full bg-slate-100 group-hover:bg-blue-200 transition-all duration-500" />

                        </div>
                    ))}

                </div>

                {/* EXTRA SECTION */}
                <div className="relative mt-20 grid lg:grid-cols-2 gap-5">

                    {/* LEFT PREMIUM CARD */}
                    <div className="rounded bg-slate-950 text-white p-5 sm:p-10 shadow-[0_35px_80px_rgba(15,23,42,0.18)]">

                        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                            Why Choose TripLog Pro
                        </p>

                        <h3 className="mt-4 text-2xl sm:text-4xl font-serif font-bold leading-tight">
                            Precision Planning For Every Mile
                        </h3>

                        <p className="mt-5 text-slate-300 leading-8 text-sm sm:text-base">
                            Replace outdated manual planning with intelligent automation,
                            premium analytics, and route visibility that helps your business
                            move faster and smarter.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4">

                            <div className="rounded bg-white/5 border border-white/10 p-4">
                                <h4 className="text-2xl font-bold">94%</h4>
                                <p className="text-sm text-slate-400 mt-1">
                                    Route Efficiency
                                </p>
                            </div>

                            <div className="rounded bg-white/5 border border-white/10 p-4">
                                <h4 className="text-2xl font-bold">24/7</h4>
                                <p className="text-sm text-slate-400 mt-1">
                                    Live Monitoring
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT LIGHT CARD */}
                    <div className="rounded bg-white border border-slate-200 p-5 sm:p-10 shadow-[0_25px_65px_rgba(15,23,42,0.06)]">

                        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                            Expected Results
                        </p>

                        <h3 className="mt-4 text-2xl sm:text-4xl font-serif font-bold text-slate-950 leading-tight">
                            Growth You Can Measure
                        </h3>

                        <div className="mt-8 space-y-5">

                            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                                <span className="text-slate-600 sm:text-base text-sm">
                                    Lower Fuel Costs
                                </span>
                                <span className="text-lg sm:text-xl font-bold text-slate-950">
                                    -32%
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                                <span className="text-slate-600 sm:text-base text-sm">
                                    Faster Dispatch Time
                                </span>
                                <span className="text-lg sm:text-xl font-bold text-slate-950">
                                    3x
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                                <span className="text-slate-600 sm:text-base text-sm">
                                    Compliance Accuracy
                                </span>
                                <span className="text-lg sm:text-xl font-bold text-emerald-600">
                                    99%
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-slate-600 sm:text-base text-sm">
                                    Better Visibility
                                </span>
                                <span className="text-lg sm:text-xl font-bold text-slate-950">
                                    Full Control
                                </span>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <section className="relative max-w-7xl mx-auto px-3 py-15 overflow-hidden">
                {/* BG EFFECT */}
                <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/30 blur-[140px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/30 blur-[140px] rounded-full" />

                {/* ================= HEADER ================= */}
                <div className="relative text-center max-w-4xl mx-auto">

                    <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold uppercase text-slate-500">
                        Professional Profile
                    </p>

                    <h2 className="mt-5 text-2xl sm:text-4xl font-serif font-bold text-slate-950 leading-tight">
                        Developer Excellence & Growth Potential
                    </h2>

                    <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-8 font-serif">
                        High-performance engineering, premium interfaces, scalable backend systems,
                        and business-ready product execution.
                    </p>

                </div>

                {/* ================= DEVELOPER DETAILS ================= */}
                <div className="relative mt-10">
                    {/* LEFT PROFILE CARD */}
                    <div className="relative rounded bg-white border border-slate-200 p-5 sm:p-10 shadow-[0_25px_70px_rgba(15,23,42,0.06)] overflow-hidden">

                        {/* LIGHT EFFECT */}
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60" />

                        {/* ICON */}
                        <div className="relative w-14 h-14 rounded bg-slate-950 text-white flex items-center justify-center shadow-lg">
                            <Code2 size={24} />
                        </div>

                        {/* NAME */}
                        <h3 className="mt-6 text-2xl sm:text-4xl font-serif font-bold text-slate-950">
                            Khilan Kanani
                        </h3>

                        {/* ROLE */}
                        <p className="mt-2 text-sm uppercase tracking-[0.30em] text-slate-500 font-semibold">
                            Full Stack Developer
                        </p>

                        {/* ABOUT */}
                        <p className="mt-5 text-slate-600 leading-8 text-sm sm:text-base">
                            Passionate Full Stack Developer focused on creating premium digital
                            products with scalable backend architecture and modern responsive UI.
                            Experienced in developing production-grade web platforms using modern
                            technologies and performance-first engineering.
                        </p>

                        {/* STACK */}
                        <div className="mt-8 grid sm:grid-cols-3 gap-4">

                            {skills.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 rounded bg-slate-50 border border-slate-200 p-4 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <CheckCircle2
                                        size={18}
                                        className="text-emerald-500 mt-0.5 shrink-0"
                                    />

                                    <span className="text-sm text-slate-700 font-medium">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="relative mt-15 text-center">

                    <div className="rounded bg-slate-950 text-white px-6 py-14 sm:px-10">

                        <div className="w-14 h-14 rounded bg-white/10 mx-auto flex items-center justify-center">
                            <Layers3 size={24} />
                        </div>

                        <h3 className="mt-6 text-2xl sm:text-4xl font-serif font-bold">
                            Ready To Build Something Great?
                        </h3>

                        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-6 sm:leading-8 ">
                            Let’s create modern applications, scalable systems and
                            premium digital products with performance-first engineering.
                        </p>

                        <Link
                            to="/planner"
                            className="inline-flex items-center gap-2 mt-8 px-7 py-4 rounded bg-white text-slate-950 font-semibold hover:-translate-y-1 transition-all duration-300"
                        >
                            Start Project
                            <ArrowRight size={18} />
                        </Link>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;