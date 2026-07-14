import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Sparkles, ShoppingBag, Leaf, Calendar, Barcode, ClipboardCheck, FileImage, CheckCircle } from "lucide-react";

const Food = () => {
    const [food, setFood] = useState({
        name: "",
        brand: "",
        ingredients: "",
        nutrition: "",
        country: "",
        manufactureDate: "",
        expiryDate: "",
        barcode: "",
        qrCode: "",
        halalStatus: "Halal",
        reason: "",
        islamicReference: "",
        image: null,
    });

    // নোটিফিকেশনের জন্য স্টেট
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setFood({
            ...food,
            [e.target.name]: e.target.value,
        });
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFood({
                ...food,
                image: URL.createObjectURL(file),
            });
        }
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const oldFoods = JSON.parse(localStorage.getItem("foods")) || [];
        const newFood = {
            id: Date.now(),
            ...food
        };

        localStorage.setItem(
            "foods",
            JSON.stringify([...oldFoods, newFood])
        );

        // মাঝখানে বড় নোটিফিকেশন ট্রিপার করা হলো
        setShowToast(true);

        // ফর্ম রিসেট
        setFood({
            name: "",
            brand: "",
            ingredients: "",
            nutrition: "",
            country: "",
            manufactureDate: "",
            expiryDate: "",
            barcode: "",
            qrCode: "",
            halalStatus: "Halal",
            reason: "",
            islamicReference: "",
            image: null,
        });

        if (document.querySelector('input[type="file"]')) {
            document.querySelector('input[type="file"]').value = "";
        }

        // ২.৫ সেকেন্ড পর নোটিফিকেশন বন্ধ হয়ে রিডাইরেক্ট হবে
        setTimeout(() => {
            setShowToast(false);
            navigate("/halal-food-tracker");
        }, 2500);
    };

    return (
        <div className="min-h-screen bg-[#faf8f5] text-slate-800 font-sans pb-16 selection:bg-emerald-200 relative">
            
            {/* স্ক্রিনের মাঝখানে বড় নোটিফিকেশন (ব্লার ব্যাকগ্রাউন্ড সহ) */}
            {showToast && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-fade-in">
                    <div className="bg-white text-slate-900 px-8 py-8 rounded-3xl shadow-2xl border border-emerald-100 flex flex-col items-center text-center max-w-sm w-full space-y-4 scale-100 animate-in zoom-in-95 duration-200">
                        <div className="bg-emerald-100 p-4 rounded-2xl ring-8 ring-emerald-50">
                            <CheckCircle className="w-10 h-10 text-emerald-600 animate-pulse" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-extrabold text-emerald-950">আলহামদুলিল্লাহ!</h3>
                            <p className="text-sm font-bold text-slate-700">খাবারটি সফলভাবে যুক্ত হয়েছে 🎉</p>
                            <p className="text-xs text-slate-400 pt-1">আপনাকে ট্র্যাকার পেজে নিয়ে যাওয়া হচ্ছে...</p>
                        </div>
                    </div>
                </div>
            )}

            {/* প্রিমিয়াম ইসলামিক থিম হেডার ব্যানার */}
            <div className="relative bg-linear-to-b from-slate-950 via-emerald-950 to-slate-900 text-white pt-10 pb-24 px-6 rounded-b-[3rem] shadow-2xl border-b border-emerald-900/30 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-emerald-600/10 via-transparent to-transparent opacity-80" />
                
                <div className="max-w-3xl mx-auto relative z-10">
                    <button 
                        onClick={() => navigate("/halal-food-tracker")}
                        className="inline-flex items-center gap-2 cursor-pointer text-emerald-200/80 hover:text-white transition text-sm font-medium mb-6 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/5"
                    >
                        <ArrowLeft className="w-4 h-4" /> ট্র্যাকার পেজে ফিরুন
                    </button>

                    <div className="text-center space-y-3">
                        <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs font-medium text-emerald-200 shadow-sm">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> ডাটাবেজ ম্যানেজমেন্ট
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-emerald-50 to-amber-100 tracking-wide">
                            Add New Food Product
                        </h1>
                        <p className="text-emerald-200/60 text-xs md:text-sm max-w-xl mx-auto">
                            নতুন খাবার প্রোডাক্টের উপাদান, পুষ্টিগুণ, বারকোড এবং শরীয়াহ ভিত্তিক হালাল মানদণ্ড ইনপুট দিয়ে কালেকশন সমৃদ্ধ করুন।
                        </p>
                    </div>
                </div>
            </div>

            {/* ফর্ম কন্টেইনার */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-12 relative z-30">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-2xl shadow-emerald-950/5 rounded-3xl p-6 md:p-10 space-y-8 border border-slate-100"
                >
                    {/* সেকশন ১: সাধারণ তথ্য */}
                    <div className="space-y-4">
                        <h3 className="text-md font-bold text-emerald-900 flex items-center gap-2 border-b pb-2 border-slate-100 uppercase tracking-wider">
                            <ShoppingBag className="w-4 h-4 text-emerald-700" /> General Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Food Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="যেমন: ডায়েট চকলেট, ওট মিল্ক"
                                    value={food.name}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/5 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400 font-medium text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Brand Name</label>
                                <input
                                    type="text"
                                    name="brand"
                                    placeholder="যেমন: Nestlé, Pran"
                                    value={food.brand}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/5 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400 font-medium text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* সেকশন ২: উপাদান ও পুষ্টিগুণ */}
                    <div className="space-y-4">
                        <h3 className="text-md font-bold text-emerald-900 flex items-center gap-2 border-b pb-2 border-slate-100 uppercase tracking-wider">
                            <Leaf className="w-4 h-4 text-emerald-700" /> Ingredients & Nutrition
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Ingredients</label>
                                <textarea
                                    name="ingredients"
                                    rows="3"
                                    placeholder="প্রধান উপাদানসমূহ বা ই-কোড লিখুন (যেমন: Sugar, E471, Flour)..."
                                    value={food.ingredients}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/5 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400 resize-none text-sm font-medium"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Nutrition Facts</label>
                                <textarea
                                    name="nutrition"
                                    rows="3"
                                    placeholder="পুষ্টিগুণ (যেমন: Calories: 250 kcal, Protein: 5g)..."
                                    value={food.nutrition}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/5 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400 resize-none text-sm font-medium"
                                />
                            </div>
                        </div>
                    </div>

                    {/* সেকশন ৩: লজিস্টিকস ও ডেট */}
                    <div className="space-y-4">
                        <h3 className="text-md font-bold text-emerald-900 flex items-center gap-2 border-b pb-2 border-slate-100 uppercase tracking-wider">
                            <Calendar className="w-4 h-4 text-emerald-700" /> Logistics & Timeline
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Country of Origin</label>
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="যেমন: Malaysia, BD"
                                    value={food.country}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/5 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400 text-sm font-medium"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Manufacture Date</label>
                                <input
                                    type="date"
                                    name="manufactureDate"
                                    value={food.manufactureDate}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/5 p-3 rounded-xl transition duration-200 outline-none text-slate-700 text-sm font-medium"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Expiry Date</label>
                                <input
                                    type="date"
                                    name="expiryDate"
                                    value={food.expiryDate}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/5 p-3 rounded-xl transition duration-200 outline-none text-slate-700 text-sm font-medium"
                                />
                            </div>
                        </div>
                    </div>

                    {/* সেকশন ৪: কোড এবং আইডেন্টিফায়ার */}
                    <div className="space-y-4">
                        <h3 className="text-md font-bold text-emerald-900 flex items-center gap-2 border-b pb-2 border-slate-100 uppercase tracking-wider">
                            <Barcode className="w-4 h-4 text-emerald-700" /> Identifiers & Codes
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Barcode Number</label>
                                <input
                                    type="text"
                                    name="barcode"
                                    placeholder="যেমন: 89010580023"
                                    value={food.barcode}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/5 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400 text-sm font-medium"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">QR Code Link / Data</label>
                                <input
                                    type="text"
                                    name="qrCode"
                                    placeholder="HTTPS লিঙ্ক অথবা টেক্সট ডেটা"
                                    value={food.qrCode}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/5 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400 text-sm font-medium"
                                />
                            </div>
                        </div>
                    </div>

                    {/* সেকশন ৫: হালাল অ্যাসেসমেন্ট */}
                    <div className="bg-emerald-50/40 p-5 md:p-6 rounded-2xl border border-emerald-950/10 space-y-5">
                        <h3 className="text-emerald-950 font-bold flex items-center gap-2 text-xs uppercase tracking-wider">
                            <ClipboardCheck className="w-4 h-4 text-emerald-800" /> Halal Compliance Assessment
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                            <div className="md:col-span-1">
                                <label className="block text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2">Shariah Status</label>
                                <select
                                    name="halalStatus"
                                    value={food.halalStatus}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-emerald-950/10 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/5 p-3 rounded-xl transition duration-200 outline-none font-bold text-slate-800 cursor-pointer text-sm"
                                >
                                    <option value="Halal">✅ Halal</option>
                                    <option value="Haram">❌ Haram</option>
                                    <option value="Needs Verification">⚠ Needs Verification</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2">Reason / Justification</label>
                                <input
                                    type="text"
                                    name="reason"
                                    placeholder="এই স্ট্যাটাসটি সিলেক্ট করার কারণ ব্যাখ্যা করুন..."
                                    value={food.reason}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-emerald-950/10 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/5 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400 text-sm font-medium"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2">Islamic Reference (Optional)</label>
                            <textarea
                                name="islamicReference"
                                rows="2"
                                placeholder="কোরআনের আয়াত, হাদিস বা কোনো হালাল সার্টিফিকেট অথরিটির নাম উল্লেখ করুন..."
                                value={food.islamicReference}
                                onChange={handleChange}
                                className="w-full bg-white border border-emerald-950/10 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/5 p-3 rounded-xl transition duration-200 outline-none text-slate-800 placeholder-slate-400 resize-none text-sm font-medium"
                            />
                        </div>
                    </div>

                    {/* সেকশন ৬: ইমেজ আপলোড */}
                    <div className="space-y-3">
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                            <span className="flex items-center gap-1.5"><FileImage className="w-4 h-4 text-slate-500" /> Product Image</span>
                        </label>
                        <div className="flex flex-col sm:flex-row items-center gap-4 p-5 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/30 hover:bg-slate-50 transition duration-200">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImage}
                                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-50 file:text-emerald-800 hover:file:bg-emerald-100 cursor-pointer"
                            />

                            {food.image && (
                                <div className="relative shrink-0 mt-3 sm:mt-0">
                                    <img
                                        src={food.image}
                                        alt="Preview"
                                        className="w-20 h-20 object-cover rounded-xl border border-slate-200 shadow-md ring-4 ring-emerald-50"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* সাবমিট বাটন */}
                    <button
                        type="submit"
                        className="w-full mt-4 bg-emerald-800 text-white font-bold py-4 px-6 rounded-xl hover:bg-emerald-700 active:bg-emerald-900 focus:outline-none focus:ring-4 focus:ring-emerald-700/20 transition duration-200 shadow-xl shadow-emerald-900/10 text-center flex items-center justify-center gap-2 text-base cursor-pointer"
                    >
                        Add Food To Collection
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Food;