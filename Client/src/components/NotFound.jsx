import { Link } from "react-router-dom";
import {
    ArrowLeft,
    Home,
    MapPinned,
    Search,
    AlertTriangle,
} from "lucide-react";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 overflow-hidden flex items-center justify-center px-3 sm:px-6">

            {/* GLOW EFFECT */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/40 blur-[140px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/40 blur-[140px] rounded-full" />

            <div className="relative text-center z-10 max-w-6xl w-fullgap-8 items-center">

                {/* LEFT CONTENT */}
                <div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-600">
                        <AlertTriangle
                            size={14}
                            className="text-rose-500"
                        />
                        Error 404
                    </div>

                    <h1 className="flex justify-center items-center gap-2 mt-6 text-2xl sm:text-4xl font-black text-slate-950">
                        Page <span className="block text-blue-600">
                            Not Found
                        </span>
                    </h1>

                    <p className="mt-3 text-sm sm:text-base text-slate-600 m-auto leading-7 max-w-lg">
                        The page you're looking for doesn't exist,
                        was moved, or the route is incorrect.
                        Return back safely using navigation below.
                    </p>

                    {/* ACTIONS */}
                    <div className="mt-8 flex justify-center items-center flex-row gap-2 sm:gap-4">

                        <Link
                            to="/"
                            className="inline-flex items-center justify-center text-sm gap-2 px-5 py-3 cursor-pointer rounded bg-slate-950 text-white font-semibold shadow-xl hover:-translate-y-1 transition-all"
                        >
                            <Home size={18} />
                            Go Home
                        </Link>

                        <button
                            onClick={() =>
                                window.history.back()
                            }
                            className="inline-flex items-center justify-center text-sm gap-2 px-5 py-3 rounded cursor-pointer bg-white border border-slate-200 text-slate-900 font-semibold shadow-sm hover:-translate-y-1 transition-all"
                        >
                            <ArrowLeft size={18} />
                            Go Back
                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
};

const InfoCard = ({ label, value, }) => (
    <div className="rounded-2xl bg-slate-100 p-4 text-center">

        <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
            {label}
        </p>

        <h4 className="mt-2 text-sm sm:text-base font-bold text-slate-950">
            {value}
        </h4>

    </div>
);

export default NotFound;