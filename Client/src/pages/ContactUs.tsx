import {
    PhoneCall,
    Mail,
    MapPin,
    Send,
    MessageSquare,
    Headphones,
    ShieldCheck,
    Globe,
    ArrowRight,
} from "lucide-react";

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 overflow-hidden">

            {/* HERO */}
            <section className="relative max-w-7xl mx-auto px-3 pt-25 sm:pt-30 pb-16">

                {/* GLOW */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200/40 blur-[130px] rounded-full" />
                <div className="absolute top-10 right-0 w-80 h-80 bg-blue-200/40 blur-[140px] rounded-full" />

                <div className="relative grid lg:grid-cols-2 gap-8 xl:gap-14 items-start">

                    {/* LEFT */}
                    <div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-600">
                            <MessageSquare size={14} className="text-emerald-500" />
                            Contact Support Team
                        </div>

                        <h1 className="mt-6 text-2xl sm:text-4xl font-serif font-bold text-slate-950 leading-tight">
                            Let’s Talk About <br />
                            Your Logistics Needs
                        </h1>

                        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-6 max-w-xl">
                            Need help with route planning, enterprise setup,
                            custom fleet tools, or support? Our team is ready
                            to assist you quickly.
                        </p>

                        {/* INFO CARDS */}
                        <div className="mt-8 space-y-4">

                            {[
                                {
                                    icon: <PhoneCall size={18} />,
                                    title: "Phone Support",
                                    value: "+91 74349 25771",
                                },
                                {
                                    icon: <Mail size={18} />,
                                    title: "Email Address",
                                    value: "khilankanani50@gmail.com",
                                },
                                {
                                    icon: <MapPin size={18} />,
                                    title: "Office Address",
                                    value: "Haliyad, Gujarat, India",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 rounded bg-white border border-slate-200 p-5 shadow-sm hover:shadow-xl transition-all"
                                >
                                    <div className="w-12 h-12 rounded bg-slate-950 text-white flex items-center justify-center">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-950">
                                            {item.title}
                                        </h4>

                                        <p className="text-sm text-slate-500 mt-1">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>

                        <div className="mt-6 grid sm:grid-cols-2 gap-4">

                            <a
                                href="https://www.linkedin.com/in/khilan-kanani-5a926b290"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between rounded bg-white border border-slate-200 px-5 py-4 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div>
                                    <p className="text-xs uppercase tracking-[0.20em] text-slate-500">
                                        Professional
                                    </p>

                                    <h4 className="text-sm font-bold text-slate-950 mt-1">
                                        LinkedIn Profile
                                    </h4>
                                </div>

                                <ArrowRight size={18} className="text-slate-500" />
                            </a>

                            <a
                                href="https://github.com/KhilanKanani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between rounded bg-white border border-slate-200 px-5 py-4 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div>
                                    <p className="text-xs uppercase tracking-[0.20em] text-slate-500">
                                        Portfolio
                                    </p>

                                    <h4 className="text-sm font-bold text-slate-950 mt-1">
                                        GitHub Projects
                                    </h4>
                                </div>

                                <ArrowRight size={18} className="text-slate-500" />
                            </a>

                        </div>

                    </div>

                    {/* RIGHT FORM */}
                    <div>

                        <div className="rounded bg-white border border-slate-200 p-5 sm:p-7 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">

                            {/* HEADER */}
                            <div className="flex items-center justify-between pb-5 border-b border-slate-200">

                                <div>
                                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                                        Send Inquiry
                                    </p>

                                    <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-2 text-slate-950">
                                        Contact Form
                                    </h2>
                                </div>

                                <div className="w-14 h-14 rounded bg-slate-950 text-white flex items-center justify-center shadow-lg">
                                    <Send size={22} />
                                </div>

                            </div>

                            {/* FORM */}
                            <form className="mt-6 space-y-4">

                                <div>
                                    <label className="text-sm font-semibold text-slate-700">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="mt-2 w-full rounded bg-slate-50 border border-slate-200 px-4 py-3 outline-none"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">

                                    <div>
                                        <label className="text-sm font-semibold text-slate-700">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="Enter email"
                                            className="mt-2 w-full rounded bg-slate-50 border border-slate-200 px-4 py-3 outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-semibold text-slate-700">
                                            Phone
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Phone number"
                                            className="mt-2 w-full rounded bg-slate-50 border border-slate-200 px-4 py-3 outline-none"
                                        />
                                    </div>

                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-slate-700">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="How can we help?"
                                        className="mt-2 w-full rounded bg-slate-50 border border-slate-200 px-4 py-3 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-slate-700">
                                        Message
                                    </label>

                                    <textarea
                                        rows={3}
                                        placeholder="Write your message..."
                                        className="mt-2 w-full rounded bg-slate-50 border border-slate-200 px-4 py-3 outline-none resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-6 py-4 rounded group bg-slate-950 cursor-pointer text-white font-semibold flex items-center justify-center gap-2 hover:-translate-y-1 transition-all"
                                >
                                    Send Message
                                    <ArrowRight size={18} className="group-hover:translate-x-3 transition-all duration-300" />
                                </button>

                            </form>

                        </div>

                    </div>
                </div>
            </section>

            {/* EXTRA FEATURES */}
            <section className="max-w-7xl mx-auto px-3 pb-20">

                <div className="grid md:grid-cols-3 gap-5">

                    {[
                        {
                            icon: <Headphones size={22} />,
                            title: "24/7 Dedicated Support",
                            desc: "Our experienced support specialists are available around the clock to provide fast assistance, technical guidance, and seamless issue resolution whenever you need help.",
                        },
                        {
                            icon: <ShieldCheck size={22} />,
                            title: "Trusted & Secure Service",
                            desc: "We deliver enterprise-grade reliability with secure communication, protected data handling, and premium support standards trusted by growing businesses.",
                        },
                        {
                            icon: <Globe size={22} />,
                            title: "Global Business Reach",
                            desc: "Empowering logistics teams and modern enterprises worldwide with scalable solutions, responsive support, and efficient digital operations.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="rounded bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="w-12 h-12 rounded bg-slate-950 text-white flex items-center justify-center">
                                {item.icon}
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-slate-950">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-sm text-slate-500 leading-7">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>

            </section>

        </div>
    );
};

export default ContactUs;