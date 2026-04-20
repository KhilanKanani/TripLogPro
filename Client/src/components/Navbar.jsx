import { Link, useLocation } from "react-router-dom";
import {
    Menu,
    X,
    Route,
    House,
    ClipboardList,
    BarChart3,
    PhoneCall,
} from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (location.pathname) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    })

    const navItems = [
        {
            name: "Home",
            path: "/",
            icon: <House size={16} />
        },
        {
            name: "Planner",
            path: "/planner",
            icon: <ClipboardList size={16} />
        },
        {
            name: "Results",
            path: "/results",
            icon: <BarChart3 size={16} />
        },
        {
            name: "Contact Us",
            path: "/contact-us",
            icon: <PhoneCall size={16} />
        }
    ];

    const activeLink = (path) =>
        location.pathname === path
            ? "text-slate-950"
            : "text-slate-500 hover:text-slate-900";

    return (
        <nav className="font-serif fixed top-0 z-100 w-full bg-white/75 backdrop-blur-3xl border-b border-slate-200 shadow-[0_10px_40px_rgba(15,23,42,0.05)]">

            {/* TOP LINE */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" />

            <div className="max-w-7xl mx-auto px-3">

                {/* NAVBAR */}
                <div className="h-[65px] flex items-center justify-between gap-3">

                    {/* LEFT LOGO */}
                    <Link to="/" className="shrink-0 flex items-center">
                        <img
                            src="TriplogPro.png"
                            alt="TripLog Pro"
                            className=" h-11 sm:h-13 md:h-15 w-auto object-contain"
                        />
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-7">

                        {navItems.map((item, i) => (
                            <Link
                                key={i}
                                to={item.path}
                                className={`relative flex items-center gap-2 text-sm font-semibold tracking-wide transition-all duration-300 ${activeLink(
                                    item.path
                                )}`}
                            >
                                {item.icon}
                                {item.name}

                                {location.pathname === item.path && (
                                    <span className="absolute -bottom-[22px] left-0 w-full h-[2.2px] rounded-full bg-slate-950" />
                                )}
                            </Link>
                        ))}

                    </div>

                    {/* RIGHT CTA */}
                    <div className="hidden md:flex items-center">

                        <Link
                            to="/planner"
                            className="group px-5 lg:px-6 py-2.5 rounded-full bg-slate-950 text-white text-sm font-semibold flex items-center gap-2 shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-all duration-300 "
                        >
                            <Route size={16} />
                            Start Route
                        </Link>

                    </div>

                    {/* MOBILE ICON */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-slate-900"
                    >
                        {open ? <X size={23} /> : <Menu size={23} />}
                    </button>

                </div>

                {/* MOBILE MENU */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ${open
                        ? "max-h-[400px] opacity-100 pb-4"
                        : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="pt-2 flex flex-col gap-1">

                        {navItems.map((item, i) => (
                            <Link
                                key={i}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className={`flex items-center gap-3 px-2 py-3 text-sm font-semibold transition-all duration-300 ${activeLink(
                                    item.path
                                )}`}
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        ))}

                        <Link
                            to="/planner"
                            onClick={() => setOpen(false)}
                            className="mt-2 px-4 py-3 rounded-full bg-slate-950 text-white text-sm font-semibold flex items-center justify-center gap-2"
                        >
                            <Route size={16} />
                            Start Route
                        </Link>

                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;