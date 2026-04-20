import { Link } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-slate-950 text-white overflow-hidden">

            {/* PREMIUM GLOW */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

            <div className="relative max-w-7xl mx-auto px-3 pt-15 pb-8">

                {/* TOP GRID */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10 border-b border-white/10 pb-10">

                    {/* BRAND */}
                    <div>
                        <img
                            src="TriplogPro.png"
                            alt="TripLog Pro"
                            className="h-12 w-auto object-contain"
                        />

                        <p className="mt-5 text-sm text-slate-400 leading-7">
                            TripLog Pro is a modern logistics platform built for
                            smarter route planning, fleet visibility, and premium
                            transport operations.
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-lg font-serif font-bold">
                            Quick Links
                        </h3>

                        <div className="mt-5 space-y-4 text-sm">

                            <Link
                                to="/"
                                className="block text-slate-400 hover:text-white transition"
                            >
                                Home
                            </Link>

                            <Link
                                to="/planner"
                                className="block text-slate-400 hover:text-white transition"
                            >
                                Planner
                            </Link>

                            <Link
                                to="/results"
                                className="block text-slate-400 hover:text-white transition"
                            >
                                Results
                            </Link>

                            <Link
                                to="/contact"
                                className="block text-slate-400 hover:text-white transition"
                            >
                                Contact
                            </Link>

                        </div>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h3 className="text-lg font-serif font-bold">
                            Services
                        </h3>

                        <div className="mt-5 space-y-4 text-sm text-slate-400">

                            <p>Smart Route Planning</p>
                            <p>Fleet Dashboard</p>
                            <p>Fuel Optimization</p>
                            <p>ELD Compliance Logs</p>
                            <p>Transport Analytics</p>

                        </div>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="text-lg font-serif font-bold">
                            Contact
                        </h3>

                        <div className="mt-5 space-y-4 text-sm">

                            <div className="flex items-start gap-3 text-slate-400">
                                <Mail size={16} className="mt-1 shrink-0" />
                                khilankanani50@gmail.com
                            </div>

                            <div className="flex items-start gap-3 text-slate-400">
                                <Phone size={16} className="mt-1 shrink-0" />
                                +91 74349 25771
                            </div>

                            <div className="flex items-start gap-3 text-slate-400">
                                <MapPin size={16} className="mt-1 shrink-0" />
                                Haliyad, Gujarat, India
                            </div>

                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

                    <p className="text-slate-500 text-center md:text-left">
                        © 2026 Kk's Pvt Ltd. All rights reserved.
                    </p>

                    <p className="flex items-center gap-2 text-slate-500">
                        Crafted with by<span className="font-semibold text-slate-300">Khilan Kanani</span>
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;